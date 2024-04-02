import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CelebrationEffects,
  Employees,
  GlassJar,
  ProgressBar,
} from "../../components";
import { currentProgressBarValue } from "../../utils/constants";
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

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {coinDropped && <CelebrationEffects />}
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "1rem",
        }}
      >
        <GlassJar numberOfContributions={numberOfContributions} />
        <ProgressBar
          addProgress={coinDropped}
          currentProgress={numberOfContributions}
        />
      </div>
      <div
        style={{
          width: "45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Employees addMarble={addMarble} />
      </div>
    </div>
  );
};
