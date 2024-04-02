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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>CSR Contribution Progress</span>
        <span>{`${Math.floor((progress / progressBarLimit) * 100)}%`}</span>
      </div>
      <div
        style={{
          borderRadius: "2rem",
          backgroundColor: "#1B1525",
          border: "1px solid black",
        }}
      >
        <div
          className='progress-moved'
          style={{
            height: "1.25rem",
            borderRadius: "2rem",
            transition: "1s linear",
            transitionProperty: "width, background-color",
            width: `${(progress / progressBarLimit) * 100}%`,
            backgroundColor: "#f3c623",
            position: "relative",
            animation:
              progress < progressBarLimit && addProgress ? "progress 1s" : "",
          }}
        ></div>
      </div>
    </div>
  );
};
