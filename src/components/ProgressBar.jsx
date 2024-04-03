import React, { useEffect, useState } from "react";
import { progressBarLimit } from "../utils/constants";
import "../styles/ProgressBar.css";

export const ProgressBar = ({ addProgress, currentProgress }) => {
  const [progress, setProgress] = useState(currentProgress);

  useEffect(() => {
    if (progress < progressBarLimit && addProgress) {
      setProgress((prev) => prev + 1);
    }
  }, [addProgress, currentProgress]);

  return (
    <div
      style={{
        width: "20rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem 0",
        }}
      >
        <span>Contribution Progress</span>
        <span>{`${Math.floor((progress / progressBarLimit) * 100)}%`}</span>
      </div>
      <div
        style={{
          borderRadius: "2rem",
          backgroundColor: "#1B1525",
          backgroundImage: "linear-gradient(to right, #f0f0f0, #e9e9e9)",
          // border: "1px solid grey",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
        }}
      >
        <div
          // className='progress-moved'
          style={{
            height: "1.25rem",
            borderRadius: "2rem",
            transition: "0.5s linear",
            transitionProperty: "width, background-color",
            width: `${(progress / progressBarLimit) * 100}%`,
            backgroundColor: "#6653E8",
            position: "relative",
            animation:
              progress < progressBarLimit && addProgress ? "progress 0.5s" : "",
          }}
        ></div>
      </div>
    </div>
  );
};
