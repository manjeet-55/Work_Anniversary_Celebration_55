// import "../styles/MarbleBall.css";

// export const MarbleBall = () => {
//   return <div className='marble'></div>;
// };

// import React from "react";
// import "../styles/MarbleBall.css";

// export const MarbleBall = ({ index, totalMarbles }) => {
//   const spacing = 42;
//   const turbulence = 8;

//   const position = {
//     top:
//       400 -
//       Math.floor(index / 7) * spacing +
//       Math.random() * turbulence -
//       turbulence / 2,
//     left:
//       20 + (index % 7) * spacing + Math.random() * turbulence - turbulence / 2,
//   };

//   return (
//     <div
//       className='marble'
//       style={{
//         position: "absolute",
//         top: position.top,
//         left: position.left,
//       }}
//     ></div>
//   );
// };
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles/MarbleBall.css";
import { marbelBallsInOneRow, marbelBallSize } from "../utils/constants";

export const MarbleBall = ({ index, totalMarbles, marbleDrop }) => {
  const spacing = 42;
  const turbulence = 16;
  const controls = useAnimation();

  // const [position, setPosition] = useState({
  //   top:
  //     400 - Math.floor(index / marbelBallsInOneRow) * spacing + Math.random(),
  //   left: 20 + (index % marbelBallsInOneRow) * spacing + Math.random(),
  // });

  const [position, setPosition] = useState({
    top:
      400 -
      Math.floor(index / marbelBallsInOneRow) * spacing +
      Math.random() * turbulence -
      turbulence / 2,
    left:
      20 +
      (index % marbelBallsInOneRow) * spacing +
      Math.random() * turbulence -
      turbulence / 2,
  });

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (marbleDrop && !animationStarted) {
      controls.start({
        y: [position.top - 400, 0],
        transition: {
          duration: 0.5,
        },
      });
      setAnimationStarted(true);
    }
  }, [marbleDrop, controls, animationStarted, position.top]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        height: marbelBallSize,
        width: marbelBallSize,
        borderRadius: "50%",
        zIndex: 999,
        background: "radial-gradient(circle, #ff00ff, #ed16fa)",
        boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.2)",
      }}
      animate={controls}
    ></motion.div>
  );
};
