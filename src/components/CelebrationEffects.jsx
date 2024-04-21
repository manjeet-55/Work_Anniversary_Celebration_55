import "../styles/CelebrationEffects.css";
import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

export const CelebrationEffects = () => {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [confettiVisibility, setConfettiVisibility] = useState(true);

  const [opacity, setOpacity] = useState(1);
  const detectSize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [dimension]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiVisibility(false);
    }, 10000);
    const opacityTimer = setInterval(() => {
      setOpacity((prev) => prev - 0.1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(opacityTimer);
    };
  }, []);
  return (
    <>
      {confettiVisibility && (
        <ReactConfetti
          width={dimension.width}
          height={dimension.height}
          tweenDuration={1000}
          run={true}
          opacity={opacity}
          style={{ zIndex: 9999 }} 
        />
      )}
    </>
  );
};
