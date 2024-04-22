import { Stack, Box, Typography } from "@mui/material";
import React, { forwardRef, useState } from "react";
// import BrandLogo from "../assets/brand_logo.png";
import { useNavigate } from "react-router-dom";
import { Business, LocalActivity } from "@mui/icons-material";
import { palette } from "../styles/theme";

const Header = ({ handleActivitiesClick }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

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
        width: isExpanded ? "10rem" : "3.5rem",
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
      >
        <Business
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
          Company
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
    </Stack>
  );
};
export default Header;
