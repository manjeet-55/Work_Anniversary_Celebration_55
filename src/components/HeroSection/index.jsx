import { CelebrationEffects } from "../../components";
import { Box, Button } from "@mui/material";

import celebrationImage from "../../assets/landingPageImage.png";
import EmployeeAnniversaryCarousel from "../EmployeesCarousel";
export const HeroSection = () => {
  return (
    <>
  
      <Box
        style={{
        //   display: "flex",
        //   alignItems: "center",
          height: "100vh",
          width: "100vw",
          background: "#f5f5f5",
        }}
      >
            <EmployeeAnniversaryCarousel />
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            textWrap: "wrap",
            paddingLeft: "5rem",
            flexDirection: "column",
          }}
        >
          <div style={{}}>
            <p
              style={{ color: "#2f3141", fontSize: "1.5rem", fontWeight: 600 }}
            >
              Celebrate Work Anniversary{" "}
            </p>
            <p style={{ color: "#464654" }}>
              contribute your celebration to social activites and be a part of
              our new initiative
            </p>
          </div>
          <div>
            <Button
              sx={{
                backgroundImage: "linear-gradient(to right, #00B8FF, #007dff)",
                color: "#fff",
                "&.MuiButtonBase-root": {
                  minWidth: "auto",
                },
                padding: "0.35rem 0.5rem",
                borderRadius: "1.5rem",
                "&:hover": {
                  backgroundImage:
                    "linear-gradient(to right, #00B8FF, #007dff)",
                  transform: "scale(1.04)",
                  transition: "0.3s ease-in-out",
                },
              }}
              // onClick={handleContribution}
            >
              {"Contribute"}
            </Button>
          </div>
        </div>
        <Box
          style={{
            width: "100%", // Adjust width as needed
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "50%", // Adjust width as needed
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${celebrationImage})`, // Set the background image
              backgroundSize: "contain", // Optional: Adjust background size as needed
              backgroundPosition: "center", // Center the background image horizontally and vertically
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </Box>
      </Box>
    </>
  );
};
