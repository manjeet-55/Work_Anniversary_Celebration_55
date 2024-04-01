// App.js
import { useState } from "react";
import "./App.css";
import GlassJar from "./components/GlassJar";
import MarbleBall from "./components/MarbleBall";
import CelebrationEffects from "./components/CelebrationEffects";
import Employees from "./components/Employees.jsx";
import { Box } from "@mui/material";

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
      {marbleDropped && (
        <Box sx={{position:"absolute", top:"35%", left:"15%"}}>
          <iframe
            src='https://giphy.com/embed/qqJiWx3tggnExIN2re'
            width='100%'
            height='100%'
            // style='position:absolute'
            frameBorder='0'
            class='giphy-embed'
            allowFullScreen
          ></iframe>
        </Box>
      )}
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GlassJar />
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
}

export default App;
