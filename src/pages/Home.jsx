import { useState } from "react";
import {
  CelebrationEffects,
  Employees,
  GlassJar,
  ProgressBar,
} from "../components";
export const Home = () => {
  const [marbleDropped, setMarbleDropped] = useState(false);
  //will get the data from backend of previously contribution count
  const [numberOfMarbles, setNumberOfMarbles] = useState(10);

  const addMarble = () => {
    setMarbleDropped(true);
    setNumberOfMarbles((prev) => prev + 1);
  };

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
          width: "50%",
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
