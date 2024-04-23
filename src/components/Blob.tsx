import React, { useRef } from "react";
import { animated, useSpring } from "react-spring";
import blob from "../assets/blob1.svg";

const MovingBlob = ({}) => {
  // Define the animation properties for the blob
  const isFirstRender = useRef(true);

  // Define the animation properties for the blob
  const { x, y } = useSpring({
    from: { x: 0, y: 0 }, // Initial position
    to: async (next, cancel) => {
      while (true) {
        const newX = Math.random() * window.innerWidth;
        const newY = Math.random() * window.innerHeight;

        // Move to a random position within the window
        await next({ x: newX, y: newY });

        // Check if it's not the first render and blob touches the boundary
        if (!isFirstRender.current && (x.get() > window.innerWidth || y.get() > window.innerHeight)) {
          cancel(); // Cancel current animation
          isFirstRender.current = true; // Reset first render flag
          await next({ x: window.innerWidth, y: window.innerHeight }); // Move blob to right-bottom corner
          await next({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }); // Move blob to a random position
        }

        isFirstRender.current = false; // Update first render flag
      }
    },
    config: { duration: 2000 }, // Adjust the duration of each movement
  });
  return (
    <animated.div
      style={{
        position: "absolute",
        width: "100px",
        height: "100px", // Adjust the size of your blob
        backgroundImage: `url(${blob})`,
        backgroundSize: "cover",
        left: x,
        top: y,
        zIndex:10000
      }}
    />
  );
};

export default MovingBlob;
