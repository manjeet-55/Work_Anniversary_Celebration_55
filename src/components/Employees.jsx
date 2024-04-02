import "../styles/EmployeeCard.css";
import { EmployeeAnniversaryCard } from "./EmployeeAnniversaryCard.jsx";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import supabase from "../utils/SupabaseClient";
import { UserAnniversaryCard } from "./UserAnniversaryCard.jsx";
import { getFullMonthName } from "../utils/common.js";

export const Employees = ({ addMarble }) => {
  const [audio] = useState(new Audio("src/assets/coin-drop-39914.mp3"));
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [contributionMade, setContributionMade] = useState(false);

  const userEmail = JSON.parse(sessionStorage.getItem("token")).user
    .user_metadata.email;

  const currentDate = new Date();
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = getFullMonthName(currentDate.getMonth() + 1);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await supabase.from("Users").select("*");
      setUsers(data);
      // console.log("Hello:", data);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    setUser(
      users.filter((employee) => {
        return employee.email === userEmail;
      })[0]
    );
  }, [users]);

  useEffect(() => {
    setContributionMade(user?.contribution?.includes(currentYear));
  }, [user]);

  const handleAddMarble = async () => {
    if (!contributionMade) {
      const contribution = user.contribution;
      const currentYear = new Date().getFullYear().toString();
      if (!contribution.includes(currentYear)) {
        const updatedContribution = [...contribution, currentYear];
        const { err } = await supabase
          .from("Users")
          .update({ contribution: updatedContribution })
          .eq("id", user.id);
        if (err) {
          console.log(err);
        }
        addMarble();
        setTimeout(() => {
          audio.play();
        }, 1000);
        setContributionMade(true);
      }
    }
  };

  const employeesAnniversaryThisMonth = users.filter((employee) => {
    const anniversaryMonth = employee.workAnniversaryDate.split(" ")[1];
    return anniversaryMonth == currentMonth;
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {user && (
          <UserAnniversaryCard
            user={user}
            handleContribution={handleAddMarble}
            contributionMade={contributionMade}
          />
        )}
      </Box>
      <Box>
        <Box>
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: 600, textAlign: "center" }}
          >
            Upcoming Work anniversaries in {currentMonth}
          </Typography>
        </Box>
        <Box
          sx={{
            maxHeight: "45vh",
            overflowY: "scroll",
            display: "flex",
            flexWrap: "wrap",
            padding: "1rem 1rem",
            columnGap: "1rem",
            rowGap: "2rem",
          }}
        >
          {employeesAnniversaryThisMonth.map((employee) => (
            <EmployeeAnniversaryCard
              key={employee.email}
              fullName={employee.fullname}
              location={employee.location}
              anniversaryDate={employee.workAnniversaryDate}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
