
import "../styles/EmployeeAnniversaryCard.css";
import { Avatar, Button, Box } from "@mui/material";
function EmployeeAnniversaryCard({
  fullName,
  location,
  onAddMarble,
  anniversaryDate,
}) {
  return (
    <Box
      sx={{
        borderRadius: "0.5rem",
        backgroundColor: "#f7f7f7",
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
          <Avatar />
        </Box>
        <Box>
          <h2>{fullName}</h2>
          <p>{location}</p>
        </Box>
      </Box>
      <Box>
        <p>Celebration on {anniversaryDate}</p>
      </Box>
      <Box>
        <Button
          sx={{
            background: "#00B8FF",
            color: "#fff",
            "&.MuiButtonBase-root": {
              minWidth: "auto",
            },
            "&:hover": {
              background: "#00B8FF",
              transform: "scale(1.04)",
              transition: "0.3s ease-in-out",
            },
          }}
          onClick={onAddMarble}
        >
          Contribute
        </Button>
      </Box>
    </Box>
  );
}

export default EmployeeAnniversaryCard;
