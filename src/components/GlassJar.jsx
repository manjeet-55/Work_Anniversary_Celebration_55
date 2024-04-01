// import { MarbleBall } from "./MarbleBall";

// export const GlassJar = ({ marble }) => {
//   return (
//     <div>
//       <img src='src\assets\jar.webp' alt='' width={300}/>
//         {marble && <MarbleBall />}
//     </div>
//   );
// };

import React from "react";
import { motion } from "framer-motion";
import { MarbleBall } from "./MarbleBall";

export const GlassJar = ({ marbleDrop, numberOfMarbles }) => {
  const marbles = Array.from({ length: numberOfMarbles });
  return (
    <motion.div
      style={{
        width: 350,
        height: 500,
        position: "relative",
        // perspective: "1000px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        zIndex: "0",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "90%",
          // backgroundColor: "#f9f9f9",
          borderTopLeftRadius: "20% 5%",
          borderTopRightRadius: "20% 5%",
          borderBottomLeftRadius: "20% 10%",
          borderBottomRightRadius: "20% 10%",
          position: "absolute",
          border: "1px solid #010101",
          bottom: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "linear-gradient(to bottom, #ffffff, #e0e0e0)",
        }}
      >
        {marbles.map((_, index) => (
          <MarbleBall
            key={index}
            index={index}
            totalMarbles={numberOfMarbles}
            marbleDrop={marbleDrop}
          />
        ))}
      </div>
    </motion.div>
  );
};
