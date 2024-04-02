import { useState } from "react";
import { CelebrationEffects, Employees, GlassJar } from "../components";
export const Home = () => {
  const [marbleDropped, setMarbleDropped] = useState(false);
  const [numberOfMarbles, setNumberOfMarbles] = useState(50);

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
          justifyContent: "center",
        }}
      >
        <GlassJar
          marbleDrop={marbleDropped}
          numberOfMarbles={numberOfMarbles}
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
