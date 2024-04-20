import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActivitySection, Header, HeroSection } from "../../components";
import { currentProgressBarValue } from "../../utils/constants";

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
      <Header handleActivitiesClick={handleActivitiesClick} />
      <HeroSection />
      <ActivitySection ref={ref} />
    </>
  );
};
