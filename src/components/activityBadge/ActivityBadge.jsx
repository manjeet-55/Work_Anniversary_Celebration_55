import { Box, Typography } from "@mui/material";
import { palette } from "../../styles/theme";

export const ActivityBadge = ({ badgeContent }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        border: 0,
        borderRadius: "1rem",
        padding: "0.25rem 0.75rem",
        background: palette.purple.primary,
      }}
    >
      <Typography
        sx={{
          color: "#FFF",
          fontSize: "0.7rem",
          fontWeight: 400,
          fontFamily: "Poppins, sans-serif",
          wordBreak: "break-word",
        }}
      >
        {badgeContent}
      </Typography>
    </Box>
  );
};
