import "../styles/EmployeeCard.css";
import { EmployeeAnniversaryCard } from "./EmployeeAnniversaryCard.jsx";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { useEffect, useState } from "react";
import supabase from "../utils/SupabaseClient";

import anniversaryGif from "../assets/confetti.gif";
export const Employees = ({ addMarble }) => {
  const [audio] = useState(new Audio("src/assets/coin-drop-39914.mp3"));

  const [user, setUser] = useState({});
  const [isUserAnniversaryToday, setIsUserAnniversaryToday] = useState(false);

  const [contributionMade, setContributionMade] = useState(false);
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

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    const { data } = await supabase.from("Users").select("*");
    setUsers(data);
    // console.log("Hello:", data);
  }

  const currentDate = new Date();
  const getFullMonthName = (month) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[parseInt(month) - 1];
  };
  const currentMonth = getFullMonthName(currentDate.getMonth() + 1);

  const filteredEmployees = users.filter((employee) => {
    const anniversaryMonth = employee.workAnniversaryDate.split(" ")[1];
    return anniversaryMonth == currentMonth;
  });
  const userEmail = JSON.parse(sessionStorage.getItem("token")).user
    .user_metadata.email;

  useEffect(() => {
    setUser(
      users.filter((employee) => {
        return employee.email === userEmail;
      })[0]
    );
  }, [users]);

  const currentYear = new Date().getFullYear().toString();
  useEffect(() => {
    setContributionMade(user?.contribution?.includes(currentYear));
    if (user?.length > 0) {
      const checkUserAnniversary = () => {
        const today = new Date();
        const [day, monthName] = user?.workAnniversaryDate?.split(" ");
        return today.getDate() == day && currentMonth == monthName;
      };
      setIsUserAnniversaryToday(() => checkUserAnniversary());
    }
  }, [user]);
  console.log("user", user);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {isUserAnniversaryToday && (
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: 600, textAlign: "center" }}
          >
            Congratulations! It's your work Anniversary today
          </Typography>
        )}
        <Box
          sx={{
            borderRadius: "0.5rem",
            backgroundColor: "#f9f9f9",
            padding: "1rem",
            display: "flex",
            flexDirection: "row",
            rowGap: "0.5rem",
            width: "100%",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
            },
            justifyContent: "space-between",
          }}
        >
          <img
            src={anniversaryGif}
            alt='Anniversary GIF'
            style={{
              width: "10rem",
              height: "10rem",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "70%",
              justifyContent: "space-between",
              padding: "0.5rem 0 ",
              rowGap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "0.75rem",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Box>
                <Avatar
                  children={
                    user?.fullname?.trim().charAt(0).toUpperCase() || "-"
                  }
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    fontSize: "1.4rem",
                    backgroundColor: "#ECEAF9",
                    color: "#6653E8",
                    fontWeight: 500,
                  }}
                />
              </Box>
              <Box>
                <h2>{user?.fullname}</h2>
                <p>{user?.location}</p>
              </Box>
            </Box>
            <Box>
              <p style={{ textAlign: "center" }}>
                Your Work Anniversary celebration is on{" "}
                {user?.workAnniversaryDate}
              </p>
            </Box>
            <Box>
              <Button
                sx={{
                  background: contributionMade ? "#4caf50" : "#00B8FF",
                  color: "#fff",
                  "&.MuiButtonBase-root": {
                    minWidth: "auto",
                  },
                  borderRadius: "0.75rem",
                  "&:hover": {
                    background: contributionMade ? "#4caf50" : "#00B8FF",
                    transform: "scale(1.04)",
                    transition: "0.3s ease-in-out",
                  },
                }}
                onClick={handleAddMarble}
              >
                {contributionMade ? "Contributed" : "Contribute"}
              </Button>
            </Box>
          </Box>
          <img
            src={anniversaryGif}
            alt='Anniversary GIF'
            style={{
              width: "10rem",
              height: "10rem",
            }}
          />
        </Box>
      </Box>
      <Box>
        <Box sx={{}}>
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
          {filteredEmployees.map((employee) => (
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
