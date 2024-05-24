import { Button, Grid, Typography, Stack, Box } from "@mui/material";
import HeroImage from "../../assets/landingPageImage2.png";
import "../../../src/index.css";
import { palette } from "../../styles/theme";
import ContributionDialog from "../ContributionDialog";
import { useEffect, useState } from "react";
import { CelebrationEffects } from "../CelebrationEffects";
import ContributionCard from "../ContributionCard";
// import { app_id, api_key } from "../../App";
import axios from "axios";

export const HeroSection = () => {
  const [contributionDialogOpen, setContributionDialogOpen] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const [showGrettingCard, setShowGrettingCard] = useState(false);

  useEffect(() => {
    if (contributionDialogOpen) {
      const timeOut = setTimeout(() => {
        setConfetti(true);
      }, 3000);
      const cardTimeOut = setTimeout(() => {
        setShowGrettingCard(true);
      }, 5000);
      return () => {
        clearInterval(timeOut);
        clearInterval(cardTimeOut);
      };
    }
  }, [contributionDialogOpen]);

  const handleContribution = () => {
    setContributionDialogOpen(true);
  };
  const handleClose = () => {
    setContributionDialogOpen(false);
  };

  const sendNotification = async () => {
    const response = await axios.get(
      "https://notification-app-2.onrender.com/api/notification"
    );
    console.log("RES---->>>>", response);
  };

  return (
    <>
      <Grid container sx={{ width: "100%", height: "100vh", background: "" }}>
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={{
            // background: "skyblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "flex-start",
          }}
        >
          <Stack
            sx={{
              // background: "lightgreen",
              display: "flex",
              justifyContent: "space-between",
              rowGap: "2rem",
              padding: "6rem 3rem 0",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                rowGap: "0.5rem",
                // background: "blue",
                width: "100%",
              }}
            >
              <Typography
                style={{
                  color: "#2f3141",
                  fontSize: "3.5rem",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                  wordBreak: "break-word",
                  lineHeight: "3.75rem",
                }}
              >
                Celebrate work
              </Typography>
              <Typography
                style={{
                  fontSize: "3.5rem",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                  wordBreak: "break-word",
                  lineHeight: "3.75rem",
                }}
                className='hero-text-animation'
              >
                anniversary
              </Typography>
              <Typography
                style={{
                  color: "#464654",
                  fontSize: "1rem",
                  fontWeight: 400,
                  fontFamily: "Poppins, sans-serif",
                  wordBreak: "break-word",
                  whiteSpace: "pre-line",
                }}
              >
                Join us in spreading joy by dedicating your celebration to
                meaningful social causes.{"\n"}
                Together, we can make a difference and create lasting impact.
                Empower your celebrations to make a difference and share the joy
                with those in need.
              </Typography>
            </Stack>
            <Box
              sx={{
                background: "",
                width: "100%",
                display: "flex",
                columnGap: "0.5rem",
              }}
            >
              <Button
                sx={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: palette.purple.primary,
                  textAlign: "center",
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "capitalize",
                  background: "transparent",
                  border: "1px solid",
                  borderColor: palette.purple.primary,
                  borderRadius: "0.5rem",
                  padding: "0.25rem 2rem",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: palette.purple.primary,
                    color: "#FFF",
                  },
                }}
                onClick={handleContribution}
              >
                Contribute
              </Button>
              <Button
                onClick={sendNotification}
                sx={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: palette.purple.primary,
                  textAlign: "center",
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "capitalize",
                  background: "transparent",
                  border: "1px solid",
                  borderColor: palette.purple.primary,
                  borderRadius: "0.5rem",
                  padding: "0.25rem 2rem",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: palette.purple.primary,
                    color: "#FFF",
                  },
                }}
              >
                Send Notification
              </Button>
            </Box>
          </Stack>
          {/* <Box
            sx={{
              background: `url(${blob})`,
              width: "20vw",
              height: "20vh",
              position: "absolute",
              left: 5,
              bottom: 5,
              animation: "moveBlob 10s linear infinite",
              zIndex: 1,
              objectFit: "cover",
              backgroundRepeat:'no-repeat'
            }}
          ></Box> */}
          {/* <MovingBlob/> */}
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // background: "orange",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8rem 0 0",
            }}
          >
            <img src={HeroImage} alt='hero_image' style={{ width: "80%" }} />
          </div>
        </Grid>
      </Grid>
      {contributionDialogOpen && !showGrettingCard && (
        <ContributionDialog
          open={contributionDialogOpen}
          handleClose={handleClose}
        />
      )}
      {showGrettingCard && <ContributionCard open={showGrettingCard} />}
      {confetti && <CelebrationEffects />}
    </>
  );
};
