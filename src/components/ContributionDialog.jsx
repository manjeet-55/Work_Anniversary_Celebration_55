import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, CircularProgress } from "@mui/material";
import { animated, useSpring } from "react-spring";
import JarAnimationGIF from "../assets/donation_jar.mp4";

const ContributionDialog = ({ open, handleClose }) => {
  const [audio] = useState(new Audio("src/assets/confettiWithCheerUp.mp3"));

  useEffect(() => {
    setTimeout(() => {
      audio.play();
    }, 3000);
  }, []);

  const [showFadeOut, setShowFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setShowFadeOut(true);
    }, 4000); // 5 seconds

    return () => clearTimeout(fadeOutTimer);
  }, []);

  return (
    <Dialog
      open={open}
      maxWidth='xs'
      sx={{
        "& .MuiPaper-root": {
          // backgroundColor: "transparent",
          border: "none",
        },
        "@keyframes fadeIn": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        animation: `${showFadeOut ? "fadeOut" : "fadeIn"} 1s ease-in-out`, // Apply fade-in or fade-out animation conditionally
        ...(showFadeOut && {
          "@keyframes fadeOut": {
            from: {
              opacity: 1,
            },
            to: {
              opacity: 0,
            },
          },
        }), // Define fade-out animation keyframes conditionally
      }}
    >
      <DialogContent>
        <video autoPlay style={{ width: "100%" }}>
          <source src={JarAnimationGIF} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  );
};

export default ContributionDialog;
