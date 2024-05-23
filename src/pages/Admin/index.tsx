import React from "react";
import Waves from "../../components/Waves";
import { Container } from "@mui/material";

export const Admin = () => {
  return (
    <>
      <Waves />
      <Container
        maxWidth='xl'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#f5f5f5",
        }}
      >
      </Container>
    </>
  );
};
