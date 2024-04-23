import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, HeroSection } from "../../components";
import { currentProgressBarValue } from "../../utils/constants";
import EmployeeAnniversaryCarousel from "../../components/EmployeesCarousel";
import { Container, Stack, Box, Typography, Grid } from "@mui/material";
import Waves from "../../components/Waves";
import SocialActivitySection from "../../components/socialActivityCard";
import WorkAnniversariesSection from "../../components/WorkAnniversariesSection";
import FooterWave from "../../assets/footer-wave.svg";
import blob from "../../assets/blob1.svg";
export const Home = () => {
  let navigate = useNavigate();
  const [coinDropped, setCoinDropped] = useState(false);
  //will get the data from backend of previously contribution count
  const [numberOfContributions, setNumberOfContributions] = useState(
    currentProgressBarValue
  );
  const addMarble = () => {
    setCoinDropped(true);
    setNumberOfContributions((prev) => prev + 1);
  };

  function handleLogout() {
    console.log("btn");
    sessionStorage.removeItem("token");
    navigate("/login");
  }

  const ref = useRef(null);
  const handleActivitiesClick = () => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const anniversaryRef = useRef(null);
  const handleAnniversaryClick = () => {
    anniversaryRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Waves />
      <Container
        maxWidth='xl'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#f5f5f5",
        }}
      >
        <Header
          handleActivitiesClick={handleActivitiesClick}
          handleAnniversaryClick={handleAnniversaryClick}
        />
        <HeroSection />
       
        <WorkAnniversariesSection ref={anniversaryRef} />
        <SocialActivitySection ref={ref} />
      </Container>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          background: `url(${FooterWave})`,
          backgroundSize: "cover",
          height: "20vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom", // Adjusted position
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          bottom: "1rem",
          left: 0,
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            bottom: "0",
            right: "1rem",
            color: "#1b2f78",
          }}
        >
          Made by Manjeet
        </Typography>
      </Box>
    </>
  );
};
