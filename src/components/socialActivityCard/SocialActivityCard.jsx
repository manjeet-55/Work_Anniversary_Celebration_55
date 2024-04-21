import { Box, Stack, Typography, Grid } from "@mui/material";
import { palette } from "../../styles/theme";
import ActivityBadge from "../activityBadge";

export const SocialActivityCard = () => {
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
        onMouseEnter={() => setIsBeingHovered(index)}
        onMouseLeave={() => setIsBeingHovered(-1)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            border: "none",
            borderRadius: "1rem",
          }}
        >
          <img
            src='https://fiftyfivetech.io/wp-content/uploads/2023/07/Responsible.png'
            alt=''
            style={{ width: "100%", border: "none", borderRadius: "1rem" }}
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
            Tree plantation drive
          </Typography>
          <Typography
            sx={{
              color: "#2f3141",
              fontSize: "0.9rem",
              fontWeight: 400,
              fontFamily: "Poppins, sans-serif",
              wordBreak: "break-word",
            }}
          >
            We at fiftyfive take care of our environment by organizing regular
            tree plantation drives
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
          <ActivityBadge badgeContent='plantation' />
          <ActivityBadge badgeContent='plantation' />
          <ActivityBadge badgeContent='plantation' />
        </Box>
      </Stack>
    </Grid>
  );
};
