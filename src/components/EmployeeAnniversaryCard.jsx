import "../styles/EmployeeAnniversaryCard.css";
import { Avatar, Button, Box } from "@mui/material";
export const EmployeeAnniversaryCard = ({
  fullName,
  location,
  onAddMarble,
  anniversaryDate,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "0.5rem",
        backgroundColor: "#f9f9f9",
        // backgroundImage: "linear-gradient(to top, #E0FFFF, #FFFFFF)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        rowGap: "0.5rem",
        width: "18rem",
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
            children={fullName?.trim().charAt(0).toUpperCase() || "-"}
            sx={{
              width: "2.5rem",
              height: "2.5rem",
              fontSize: "1.15rem",
              backgroundColor: "#ECEAF9",
              color: "#6653E8",
              fontWeight: 500,
            }}
          />
        </Box>
        <Box>
          <h2>{fullName}</h2>
          <p>{location}</p>
        </Box>
      </Box>
      <Box>
        <p>Celebration on {anniversaryDate}</p>
      </Box>
    </Box>
  );
};
