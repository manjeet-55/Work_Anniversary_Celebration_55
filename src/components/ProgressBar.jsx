import React, { useEffect, useState } from "react";
// import { progressBarLimit } from "../utils/constants";
import "../styles/ProgressBar.css";
import { useCelebrationAppContext } from "../context";

export const ProgressBar = ({ addProgress }) => {
  const { users, totalContributionsThisYear } = useCelebrationAppContext();

  const [change, setChange] = useState(totalContributionsThisYear);
  useEffect(() => {
    setChange(totalContributionsThisYear / users.length);
  }, [totalContributionsThisYear, users]);

  useEffect(() => {
    if (totalContributionsThisYear < users.length && addProgress) {
      setChange(totalContributionsThisYear / users.length);
    }
  }, [addProgress, totalContributionsThisYear, change]);
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
        <span>{`${Math.ceil(change * 100)}%`}</span>
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
            width: `${change * 100 + 2}%`,
            backgroundColor: "#6653E8",
            position: "relative",
            animation: change && addProgress ? "progress 0.5s" : "",
          }}
        ></div>
      </div>
    </div>
  );
};
