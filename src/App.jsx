// App.js
import { useState } from "react";
import "./App.css";
import GlassJar from "./components/GlassJar";
import MarbleBall from "./components/MarbleBall";
import CelebrationEffects from "./components/CelebrationEffects";
import Employees from "./components/Employees.jsx";

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
        <Employees />
      </div>
    </div>
  );
}

export default App;
