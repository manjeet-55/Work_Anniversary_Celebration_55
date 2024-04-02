import "../styles/EmployeeAnniversaryCard.css";
import { Avatar, Button, Box, Typography } from "@mui/material";
import paperImage from "../assets/celebration.png";
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
        display: "flex",
        flexDirection: "row",
        rowGap: "0.5rem",
        width: "18rem",
        transition: "0.3s ease",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
        },
      }}
    >
      <Box>
        <img
          src={paperImage}
          alt='Anniversary GIF'
          style={{
            height: "10rem",
            position: "relative",
            objectFit: "cover",
            width: "5rem",
          }}
        />
      </Box>
      <Box sx={{ width: "75%", padding: "1rem 0" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            columnGap: "0.5rem",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Box>
            <Avatar
              children={fullName?.trim().charAt(0).toUpperCase() || "-"}
              sx={{
                width: "3rem",
                height: "3rem",
                fontSize: "1.35rem",
                backgroundColor: "#ECEAF9",
                color: "#6653E8",
                fontWeight: 500,
              }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.25rem",
                paddingBottom: "0.25rem",
                textAlign: "center",
              }}
            >
              {fullName}
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "0.9rem",
                color: "#b2b2b2",
                // paddingBottom: "0.75rem",
              }}
            >
              Work Anniversary -{" "}
              <span style={{ color: "#000" }}>{anniversaryDate}</span>
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                color: "#4caf50",
                textAlign: "center",
              }}
            >
              Send Wish
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
