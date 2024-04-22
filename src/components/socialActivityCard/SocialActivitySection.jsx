import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { SocialActivityCard } from "./SocialActivityCard";

const SocialActivitySection = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: 0,
        borderRadius: "0.5rem",
        marginBottom: "2rem",
        rowGap: "1rem",
      }}
    >
      <Typography
        sx={{
          color: "#2f3141",
          fontSize: "2rem",
          fontWeight: 600,
          fontFamily: "Poppins, sans-serif",
          wordBreak: "break-word",
        }}
      >
        Social activities
      </Typography>
      <Grid container rowSpacing={2} sx={{ marginBottom: "2rem" }}>
        <SocialActivityCard />
        <SocialActivityCard />
        <SocialActivityCard />
      </Grid>
    </Stack>
  );
};

export default SocialActivitySection;
