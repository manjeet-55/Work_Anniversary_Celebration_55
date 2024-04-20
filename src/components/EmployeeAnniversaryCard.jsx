import "../styles/EmployeeAnniversaryCard.css";
import { Avatar, Button, Box, Typography } from "@mui/material";
import paperImage from "../assets/celebration.png";
import { motion } from "framer-motion";
import { getAnniversary } from "../utils/common";
import { palette } from "../styles/theme";
export const EmployeeAnniversaryCard = ({joiningDate, fullname}) => {
  const workAnniversary = getAnniversary(joiningDate);
  return (
    <motion.div
      style={{
        borderRadius: "0.5rem",
        backgroundImage: `url(${paperImage})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "row",
        rowGap: "0.5rem",
        width: "18rem",
        transition: "0.3s ease",
        scale: 1,
        padding: "0.5rem",
      }}
      whileHover={{ scale: 1.02 }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "1rem 0",
          backgroundImage: palette.backgrounds.gradient,
          borderRadius: "0.5rem",
        }}
      >
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
              children={fullname?.trim().charAt(0).toUpperCase() || "-"}
              sx={{
                width: "3rem",
                height: "3rem",
                fontSize: "1.35rem",
                backgroundColor: "#ECEAF9",
                color: palette.purple.primary,
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
              {fullname}
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "0.9rem",
                color: "#b2b2b2",
                // paddingBottom: "0.75rem",
              }}
            >
              Work Anniversary -
              <span style={{ color: "#000" }}>{workAnniversary}</span>
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                color: palette.green.primary,
                textAlign: "center",
              }}
            >
              Send Wish
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};
