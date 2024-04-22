import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, HeroSection } from "../../components";
import { currentProgressBarValue } from "../../utils/constants";
import EmployeeAnniversaryCarousel from "../../components/EmployeesCarousel";
import { Container, Stack, Box, Typography, Grid } from "@mui/material";
import Waves from "../../components/Waves";
import SocialActivitySection from "../../components/socialActivityCard";
import { WorkAnniversariesSection } from "../../components/WorkAnniversariesSection";
export const Home = ({ activitiesRef }) => {
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
        <Header handleActivitiesClick={handleActivitiesClick} />
        <HeroSection />
        <WorkAnniversariesSection />
        <SocialActivitySection ref ={ref}/>
      </Container>
    </>
  );
};
