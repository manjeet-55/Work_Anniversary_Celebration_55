import { Stack, Box, Typography } from "@mui/material";
import React, { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalActivity, Cake, ManageAccounts } from "@mui/icons-material";
import { palette } from "../styles/theme";

const Header = ({ handleActivitiesClick, handleAnniversaryClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const isAdmin = false;

  return (
    <Stack
      sx={{
        background: "#202C33",
        display: "flex",
        position: "fixed",
        top: "50%",
        right: "0%",
        transform: "translate(0%, -50%)",
        // rowGap: "0.75rem",
        border: 0,
        borderRadius: "0.5rem 0 0 0.5rem",
        width: isExpanded ? "12rem" : "3.5rem",
        transition: "0.5s all ease-in-out",
        padding: "0.5rem 0.25rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "",
          alignItems: "center",
          columnGap: "0.5rem",
          padding: "1rem 0.5rem",
          cursor: "pointer",
          borderRadius: "0.5rem",
          "&:hover": {
            background: "#211F1F",
          },
          border: 0,
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={handleAnniversaryClick}
      >
        <Cake
          sx={{
            color: "#FFF",
            background: palette.purple.primary,
            padding: "0.25rem",
            fontSize: "2.25rem",
            border: 0,
            borderRadius: "0.25rem",
          }}
        />
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
          }}
        >
          Anniversaries
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "",
          alignItems: "center",
          columnGap: "0.5rem",
          padding: "1rem 0.5rem",
          cursor: "pointer",
          borderRadius: "0.5rem",
          "&:hover": {
            background: "#211F1F",
          },
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={handleActivitiesClick}
      >
        <LocalActivity
          sx={{
            color: "#FFF",
            background: palette.purple.primary,
            padding: "0.25rem",
            fontSize: "2.25rem",
            border: 0,
            borderRadius: "0.25rem",
          }}
        />
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
          }}
        >
          Activity
        </Typography>
      </Box>
      {isAdmin && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "",
            alignItems: "center",
            columnGap: "0.5rem",
            padding: "1rem 0.5rem",
            cursor: "pointer",
            borderRadius: "0.5rem",
            "&:hover": {
              background: "#211F1F",
            },
          }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          onClick={() => navigate("/admin")}
        >
          <ManageAccounts
            sx={{
              color: "#FFF",
              background: palette.purple.primary,
              padding: "0.25rem",
              fontSize: "2.25rem",
              border: 0,
              borderRadius: "0.25rem",
            }}
          />
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
            }}
          >
            Admin
          </Typography>
        </Box>
      )}
    </Stack>
  );
};
export default Header;
