// App.js
import { useState } from "react";
import "./App.css";
import GlassJar from "./components/GlassJar";
import MarbleBall from "./components/MarbleBall";
import CelebrationEffects from "./components/CelebrationEffects";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [marbleDropped, setMarbleDropped] = useState(false);

  const addMarble = () => {
    setMarbleDropped(true);
  };

  const handleAnimationEnd = () => {
    // Animation end logic, e.g., display celebration effects
    console.log("Animation ended");
  };

  return (
    <div
      className='App'
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {marbleDropped && <CelebrationEffects />}
      {marbleDropped && <MarbleBall onAnimationEnd={handleAnimationEnd} />}
      <div
        style={{
          width: "50%",
          background: "lightpink",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GlassJar />
      </div>
      <div
        style={{
          width: "50%",
          background: "lightblue",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <EmployeeCard onAddMarble={addMarble} />
      </div>
    </div>
  );
}

export default App;
