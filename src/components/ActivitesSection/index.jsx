import { CelebrationEffects } from "../../components";
import { Button, Box } from "@mui/material";

import celebrationImage from "../../assets/landingPageImage.png";
import { forwardRef } from "react";
import zIndex from "@mui/material/styles/zIndex";
const ActivitySection = ({}, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        padding: "7rem 0 5rem",
        zIndex: 1,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          height: "20rem",
          backgroundColor: "#6c6ee8",
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "0rem 2rem",
        }}
      >
        {/* Card 1 */}
        <Box
          sx={{
            width: "calc(33.33% - 0.5rem)", // 33.33% width for each card with a small gap between them
            padding: "1rem",
            backgroundColor: "#fff",
            borderRadius: "0.5rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden", // Ensure text doesn't overflow outside the card
            position: "relative",
          }}
        >
          <img
            src='https://fiftyfivetech.io/wp-content/uploads/2023/07/Responsible.png'
            alt='Social Activity 1'
            style={{ width: "100%", height: "10rem", objectFit: "cover" }}
          />

          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
            Social Activity 1
          </p>
        </Box>

        <Box
          sx={{
            width: "calc(33.33% - 0.5rem)",
            padding: "1rem",
            backgroundColor: "#fff",
            borderRadius: "0.5rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <img
            src='https://fiftyfivetech.io/wp-content/uploads/2023/07/Responsible.png'
            alt='Social Activity 2'
            style={{ width: "100%", height: "10rem", objectFit: "cover" }}
          />
          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
            Social Activity 2
          </p>
        </Box>

        {/* Card 3 */}
        <Box
          sx={{
            width: "calc(33.33% - 0.5rem)",
            padding: "1rem",
            backgroundColor: "#fff",
            borderRadius: "0.5rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <img
            src='https://fiftyfivetech.io/wp-content/uploads/2023/07/Rectangle-304.png'
            alt='Social Activity 3'
            style={{ width: "100%", height: "10rem", objectFit: "cover" }}
          />
          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
            Social Activity 3
          </p>
        </Box>
      </Box>
    </Box>
  );
};
export default forwardRef(ActivitySection);
