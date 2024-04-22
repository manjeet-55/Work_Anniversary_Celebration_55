import React, { forwardRef } from "react";
import { Stack, Typography } from "@mui/material";
import EmployeeAnniversaryCarousel from "./EmployeesCarousel";

const WorkAnniversariesSection = ({}, ref) => {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: 0,
        borderRadius: "0.5rem",
        marginBottom: "5rem",
        rowGap: "1rem",
      }}
      ref={ref}
    >
      <Typography
        sx={{
          color: "#2f3141",
          fontSize: "2rem",
          fontWeight: 600,
          fontFamily: "Poppins, sans-serif",
          wordBreak: "break-word",
        }}
      >
        Upcoming work anniversaries
      </Typography>
      <EmployeeAnniversaryCarousel />
    </Stack>
  );
};

export default forwardRef(WorkAnniversariesSection);
