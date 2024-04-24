import { useRef } from "react";
import { Header, HeroSection } from "../../components";
import { Container, Box } from "@mui/material";
import Waves from "../../components/Waves";
import SocialActivitySection from "../../components/socialActivityCard";
import WorkAnniversariesSection from "../../components/WorkAnniversariesSection";
import FooterWave from "../../assets/footer-wave.svg";
export const Home = () => {
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
    </>
  );
};
