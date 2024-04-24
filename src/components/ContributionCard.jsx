import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import ConfettiImage from "../assets/confetti-image.png";
import { palette } from "../styles/theme";

const ContributionCard = ({ open }) => {
  const imageUrl =
    "https://img.freepik.com/premium-vector/party-banner-background-with-colorful-tiny-confetti-congratulations-celebration-vector_345220-100.jpg?w=740";
  //   const imageUrl =
  //     "https://img.freepik.com/free-vector/colorful-confetti-celebratory-design_53876-67672.jpg?w=740&t=st=1713896179~exp=1713896779~hmac=d392011ad9eeada7332b59fe883ebe403ce112880a4acb9b671bad2c06ac0d23";
  // const confettiImageUrl =
  //   "https://t3.ftcdn.net/jpg/06/11/56/92/240_F_611569269_CZVPT7CY1ldu5zNVTpnhSBJWhpzxMn5d.jpg";

  return (
    <>
      <Dialog
        open={open}
        maxWidth='xs'
        sx={{
          "& .MuiPaper-root": {
            border: "none",
            maxWidth: "90vw",
            background: "#f7f7f7",
            width: "60vw",
          },
          "@keyframes fadeIn": {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          },
          animation: "fadeIn 0.5s ease-in-out",
        }}
      >
        <Box
          sx={{
            background: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "65vh",
              display: "flex",
              flexWrap: "wrap",
              whiteSpace: "pre-line",
              textAlign: "center",
              justifyContent: "center",
              // alignItems: "center",
              position: "relative",
            }}
          >
            {/* <Box
              sx={{
                background: `url(${confettiImageUrl})`,
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                zIndex: 99999,
              }}
            ></Box> */}
            <Stack
              sx={{
                display: "flex",
                // background: "pink",
                alignItems: "center",
                justifyContent: "center",
                rowGap: "2rem",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  // background: "pink",
                  alignItems: "center",
                  rowGap: "0.75rem",
                  // background: "red",
                }}
              >
                <img
                  src={ConfettiImage}
                  alt=''
                  width='35%'
                  style={{ background: "" }}
                />
                <Typography
                  sx={{
                    fontSize: "1.75rem",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "2.5rem",
                  }}
                >
                  Thank you mate!
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Thanks for your contribution to social activities.{"\n"}
                </Typography>
              </Stack>
              <Button
                sx={{
                  fontWeight: 400,
                  fontSize: "0.9rem",
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "capitalize",
                  backgroundImage:
                    "linear-gradient(to right, #f0691b, #f48d1c)",
                  borderRadius: "0.5rem",
                  padding: "0.3rem 1.5rem",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.025)",
                  },
                }}
              >
                Download badge
              </Button>
            </Stack>
          </div>
        </Box>
      </Dialog>
    </>
  );
};

export default ContributionCard;
