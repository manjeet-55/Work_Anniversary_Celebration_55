import { MarbleBall } from "./MarbleBall";

export const GlassJar = ({ numberOfContributions }) => {
  const marbles = Array.from({ length: numberOfContributions });
  return (
    <div style={{ position: "relative" }}>
      <img
        src='src\assets\3d-cash-money.jpg'
        alt=''
        width={500}
        style={{
          zIndex: "1",
          position: "relative",
          borderRadius: "5rem",
        }}
      />
      {/* <img src='src\assets\jar.webp' alt='' width={300} /> */}
      {marbles.map((_, index) => (
        <MarbleBall
          key={index}
          index={index}
          totalMarbles={numberOfContributions}
        />
      ))}
    </div>
  );
};

// import React from "react";
// import { motion } from "framer-motion";
// import { MarbleBall } from "./MarbleBall";

// export const GlassJar = ({ marbleDrop, numberOfContributions }) => {
//   const marbles = Array.from({ length: numberOfContributions });
//   return (
//     <motion.div
//       style={{
//         width: 350,
//         height: 500,
//         position: "relative",
//         // perspective: "1000px",
//         boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
//         overflow: "hidden",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "flex-end",
//         zIndex: "0",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "90%",
//           // backgroundColor: "#f9f9f9",
//           borderTopLeftRadius: "20% 5%",
//           borderTopRightRadius: "20% 5%",
//           borderBottomLeftRadius: "20% 10%",
//           borderBottomRightRadius: "20% 10%",
//           position: "absolute",
//           border: "1px solid #010101",
//           bottom: 0,
//           left: 0,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundImage: "linear-gradient(to bottom, #ffffff, #e0e0e0)",
//         }}
//       >
//         {marbles.map((_, index) => (
//           <MarbleBall
//             key={index}
//             index={index}
//             totalMarbles={numberOfContributions}
//             marbleDrop={marbleDrop}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// };
