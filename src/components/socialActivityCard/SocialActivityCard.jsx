import { Box, Stack, Typography, Grid } from "@mui/material";
import { palette } from "../../styles/theme";
import ActivityBadge from "../activityBadge";
export const SocialActivityCard = ({ activity }) => {
  return (
    <Grid
      item
      lg={4}
      md={6}
      sm={6}
      xs={12}
      sx={{ background: "", display: "flex", justifyContent: "center" }}
    >
      <Stack
        sx={{
          width: "85%",
          display: "flex",
          rowGap: "2rem",
          background: "#f1f1f1",
          borderBottom: "0.125rem solid transparent",
          borderRadius: "1rem",
          padding: "1rem",
          cursor: "pointer",
          transition: "0.3s all ease-in-out",
          "&:hover": {
            transform: "translateY(-1rem)",
            borderBottom: "0.125rem solid",
            borderColor: palette.purple.primary,
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          },
        }}
        className='social-activity-image-container'
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            border: "none",
            borderRadius: "1rem",
            maxHeight: "13rem",
          }}
        >
          <img
            src={activity.image}
            alt=''
            style={{ width: "100%", border: "none", borderRadius: "1rem" }}
            className='social-activity-image'
          />
        </Box>

        <Stack sx={{ display: "flex", rowGap: "0.5rem" }}>
          <Typography
            sx={{
              color: palette.purple.primary,
              fontSize: "1.25rem",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              wordBreak: "break-word",
            }}
          >
            {activity.title}
          </Typography>
          <Typography
            sx={{
              color: "#2f3141",
              fontSize: "0.9rem",
              fontWeight: 400,
              fontFamily: "Poppins, sans-serif",
              wordBreak: "break-word",
              height: "4rem",
              overflowY: "scroll",
            }}
          >
            {activity.description}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "inline-flex",
            flexWrap: "wrap",
            gap: "0.5rem 1rem",
            marginBottom: "1rem",
          }}
        >
          {activity.badges.map((badgeContent, index) => (
            <ActivityBadge badgeContent={badgeContent} key={index} />
          ))}
        </Box>
      </Stack>
    </Grid>
  );
};
