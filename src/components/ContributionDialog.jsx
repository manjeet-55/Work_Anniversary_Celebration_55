import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, CircularProgress } from "@mui/material";
// import JarAnimationGIF from "../assets/donation-jar-unscreen.gif";
import JarAnimationGIF from "../assets/donation_jar.mp4";
const ContributionDialog = ({ open, handleClose }) => {
  //   const [audio] = useState(new Audio("src/assets/Confetti_Sound.mp3"));
  const [audio] = useState(new Audio("src/assets/confettiWithCheerUp.mp3"));

  setTimeout(() => {
    audio.play();
  }, 3000);

  return (
    <Dialog
      open={open}
      maxWidth='xs'
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "transparent",
          border: "none",
        },
      }}
    >
      <DialogContent sx={{}}>
        {/* Render the GIF */}
        <video autoPlay style={{ width: "100%" }}>
          <source src={JarAnimationGIF} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        {/* <img src={JarAnimationGIF} /> */}
        {/* Alternatively, you can use CircularProgress from MUI */}
        {/* <CircularProgress /> import { CelebrationEffects } from "./CelebrationEffects";
         */}
      </DialogContent>
    </Dialog>
  );
};

export default ContributionDialog;
