import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CelebrationEffects,
  Employees,
  GlassJar,
  ProgressBar,
} from "../components";
import { currentProgressBarValue } from "../utils/constants";
export const Home = () => {
  let navigate = useNavigate();
  const [marbleDropped, setMarbleDropped] = useState(false);
  //will get the data from backend of previously contribution count
  const [numberOfMarbles, setNumberOfMarbles] = useState(
    currentProgressBarValue
  );

  const addMarble = () => {
    setMarbleDropped(true);
    setNumberOfMarbles((prev) => prev + 1);
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
      {marbleDropped && <CelebrationEffects />}
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
        <GlassJar numberOfMarbles={numberOfMarbles} />
        <ProgressBar
          addProgress={marbleDropped}
          currentProgress={numberOfMarbles}
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
