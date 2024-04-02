import "../styles/EmployeeCard.css";
import employees from "../sampleData.json";
import { EmployeeAnniversaryCard } from "./EmployeeAnniversaryCard.jsx";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { useEffect, useState } from "react";
import supabase from "../utils/SupabaseClient";
export const Employees = ({ addMarble }) => {
  const [user, setUser] = useState({});
  const [isUserAnniversaryToday, setIsUserAnniversaryToday] = useState(false);

  const handleAddMarble = (employee) => {
    addMarble();
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
  
  useEffect(() => {
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
    <Box>
      <Box sx={{ width: "100%" }}>
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
            flexDirection: "column",
            rowGap: "0.5rem",
            width: "38rem",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "0.5rem",
              height: "4rem",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <Avatar
                children={user?.fullname?.trim().charAt(0).toUpperCase() || "-"}
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
            <p>
              Your Work Anniversary celebration is on {user?.workAnniversaryDate}
            </p>
          </Box>
          <Box>
            <Button
              sx={{
                background: "#00B8FF",
                color: "#fff",
                "&.MuiButtonBase-root": {
                  minWidth: "auto",
                },
                borderRadius: "1rem",
                "&:hover": {
                  background: "#00B8FF",
                  transform: "scale(1.04)",
                  transition: "0.3s ease-in-out",
                },
              }}
              onClick={handleAddMarble}
            >
              Contribute
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: 600, textAlign: "center" }}
          >
            Upcoming Work anniversaries
          </Typography>
        </Box>
        <Box
          sx={{
            maxHeight: "50vh",
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
              // onAddMarble={() => handleAddMarble(employee)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
