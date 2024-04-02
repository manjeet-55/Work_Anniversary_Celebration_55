import React from "react";
import { Box, Avatar, Button, Typography } from "@mui/material";
import anniversaryGif from "../assets/confetti.gif";

export const UserAnniversaryCard = ({
  user,
  handleContribution,
  contributionMade,
}) => {
  return (
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
          <p style={{ textAlign: "center" }}>
            Your Work Anniversary celebration is on {user?.workAnniversaryDate}
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
            onClick={handleContribution}
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
  );
};
