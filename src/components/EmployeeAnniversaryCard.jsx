import "../styles/EmployeeAnniversaryCard.css";
import { Avatar, Button, Box, Typography, Stack, Grid } from "@mui/material";
import paperImage from "../assets/celebration.png";
import { motion } from "framer-motion";
import { calculateAnniversaryNumber, getAnniversary } from "../utils/common";
import { palette } from "../styles/theme";
import HappyGirlImage from "../assets/happy-girl.png";

export const EmployeeAnniversaryCard = ({ joiningDate, fullName }) => {
  const workAnniversary = getAnniversary(joiningDate);
  const workAnniversaryMessage = calculateAnniversaryNumber(joiningDate);
  return (
    <motion.div
      style={{
        borderRadius: "0.5rem",
        // backgroundImage: `url(${paperImage})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "row",
        rowGap: "1rem",
        // width: "18rem",
        width: "100%",
        transition: "0.3s all ease-in-out",
        scale: 1,
        padding: "0.5rem",
      }}
      // whileHover={{ scale: 1.01 }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "1rem 0",
          backgroundImage: palette.backgrounds.gradient,
          borderRadius: "0.5rem",
          borderBottom: "0.125rem solid",
          borderBottomColor: palette.purple.primary,
        }}
      >
        <Grid container sx={{ background: "", width: "100%" }}>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{ background: "", display: "flex", alignItems: "center" }}
          >
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                rowGap: "2rem",
                "&:hover": {
                  cursor: "pointer",
                },
                // background: "pink",
                padding: "1rem 0",
                width: "100%",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  rowGap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <Avatar
                  children={fullName?.trim().charAt(0).toUpperCase() || "-"}
                  sx={{
                    width: "4rem",
                    height: "4rem",
                    fontSize: "2rem",
                    backgroundColor: "#ECEAF9",
                    color: palette.purple.primary,
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.5rem",
                    textAlign: "center",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {fullName}
                </Typography>
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "1rem",
                    textAlign: "center",

                    color: "#090909",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                 {workAnniversaryMessage}
                </Typography>
              </Box>

              <Stack
                sx={{
                  display: "flex",
                  rowGap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "0.9rem",
                    color: "#b2b2b2",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Work Anniversary -&nbsp;
                  <span style={{ color: "#000" }}>{workAnniversary}</span>
                </Typography>

                {/* <Button
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                color: palette.purple.primary,
                textAlign: "center",
                fontFamily: "Poppins, sans-serif",
                textTransform: "capitalize",
                background: "transparent",
                border: "1px solid",
                borderColor: palette.purple.primary,
                borderRadius: "0.25rem",
                padding: "0.25rem 2rem",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: palette.purple.primary,
                  color: "#FFF",
                },
              }}
            >
              Send Wish
            </Button> */}
              </Stack>
            </Stack>
          </Grid>

          <Grid item sm={6} xs={12} sx={{ background: "" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                // background: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={HappyGirlImage}
                alt='happy_girl'
                style={{ width: "60%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};
