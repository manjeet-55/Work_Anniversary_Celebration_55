import { Grid, Stack, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { SocialActivityCard } from "./SocialActivityCard";
import SocialActivity1 from "../../assets/social_activity_1.png";
import SocialActivity4 from "../../assets/social_activity_4.jpg";
import SocialActivity5 from "../../assets/social_activity_5.jpg";

const SocialActivitySection = ({}, ref) => {
  const socialActivitiesData = [
    {
      title: "Tree Plantation Drive",
      description: "Join us in our mission to nurture Mother Earth. Together, we plant trees to create a greener tomorrow.",
      image: SocialActivity4,
      badges: ["environment", "community", "sustainability"],
    },
    {
      title: "Supporting Orphaned Children",
      description: "Every child deserves love and care. At fiftyfive, we provide them with a safe haven and education.",
      image: SocialActivity5,
      badges: ["childcare", "education", "community"],
    },
    {
      title: "Women's Welfare Center",
      description: "Empowering women empowers communities. Join us as we uplift and empower women.",
      image: SocialActivity1,
      badges: ["women", "empowerment", "community"],
    },
  ];
  
  
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
      ref={ref}
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
        {socialActivitiesData.map((activity, index) => (
          <SocialActivityCard key={index} activity={activity} />
        ))}
      </Grid>
    </Stack>
  );
};

export default forwardRef(SocialActivitySection);
