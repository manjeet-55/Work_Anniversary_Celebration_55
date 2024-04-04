// import React, { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import "../styles/MarbleBall.css";
// import {
//   marbelBallsInOneRow,
//   marbelBallSize,
//   turbulanceInBalls,
// } from "../utils/constants";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// export const MarbleBall = ({ index, totalMarbles }) => {
//   const spacing = marbelBallSize + 2;
//   const controls = useAnimation();

//   const [position, setPosition] = useState({
//     top:
//       400 -
//       Math.floor(index / marbelBallsInOneRow) * spacing +
//       Math.random() * turbulanceInBalls -
//       turbulanceInBalls / 2,
//     left:
//       20 +
//       (index % marbelBallsInOneRow) * spacing +
//       Math.random() * turbulanceInBalls -
//       turbulanceInBalls / 2,
//   });

//   useEffect(() => {
//     controls.start({
//       y: [position.top - window.innerHeight, 0],
//       transition: {
//         duration: 1.5,
//       },
//     });
//   }, [controls, position.top]);

//   return (
//     <motion.div
//       style={{
//         position: "absolute",
//         top: position.top,
//         left: position.left,
//         height: marbelBallSize,
//         width: marbelBallSize,
//         borderRadius: "50%",
//         zIndex: 999,
//         background: "radial-gradient(circle, #ff00ff, #ed16fa)",
//       }}
//       animate={controls}
//     >
//       <MonetizationOnIcon
//         sx={{
//           width: "100%",
//           height: "100%",
//           color: "#f3c623",
//         }}
//       />
//     </motion.div>
//   );
// };

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export const MarbleBall = () => {
  const controls = useAnimation();
  const [animationEnd, setAnimationEnd] = useState(false);
  useEffect(() => {
    controls.start({
      y: [-(window.innerHeight + 100), -200],
      x: [window.innerWidth - 1080],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      style={{
        position: "absolute",
        justifyContent: "flex-end",
        alignItems: "center",
        zIndex: "0",
      }}
    >
      <MonetizationOnIcon sx={{ width: 40, height: 40, color: "#f3c623" }} />
    </motion.div>
  );
};
