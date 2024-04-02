import "../styles/EmployeeCard.css";
import { useEffect, useState } from "react";
import employees from "../sampleData.json";
import { EmployeeAnniversaryCard } from "./EmployeeAnniversaryCard.jsx";
import { Box, Typography } from "@mui/material";
import supabase from "../utils/SupabaseClient";
export const Employees = ({ addMarble }) => {
  const handleAddMarble = (employee) => {
    addMarble();
  };

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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    const { data } = await supabase.from("Users").select("*");
    setUsers(data);
    console.log("Hello:", data);
  }
  const filteredEmployees = users.filter((employee) => {
    const anniversaryMonth = employee.workAnniversaryDate.split(" ")[1];
    return anniversaryMonth == currentMonth;
  });

  return (
    <div>
      <Box>
        <Typography
          sx={{ fontSize: "1.5rem", fontWeight: 600, textAlign: "center" }}
        >
          Upcoming Work anniversaries
        </Typography>
      </Box>
      <div
        style={{
          maxHeight: "70vh",
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
            onAddMarble={() => handleAddMarble(employee)}
          />
        ))}
      </div>
    </div>
  );
};
