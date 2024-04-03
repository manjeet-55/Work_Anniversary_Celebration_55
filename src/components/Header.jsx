import React from "react";

export const Header = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 5,
        width: "95vw",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          width: "35rem",
          background: "#1B1525",
          height: "50px",
          borderRadius: "2rem",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem 1rem",
          columnGap: "0.5rem",
        }}
      >
        <div
          style={{
            background: "linear-gradient(to top, #f9f9f9, #f5f5f5)",
            borderRadius: "50%",
            height: "38px",
            width: "38px",
            overflow: "hidden",
            border: "1px solid lightgrey",
          }}
        >
          <img
            src='src\assets\brand_logo.png'
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <h1
          style={{
            color: "white",
            fontWeight: 400,
          }}
        >
          Work Anniversaries Celebration{" "}
        </h1>
      </div>
    </div>
  );
};
