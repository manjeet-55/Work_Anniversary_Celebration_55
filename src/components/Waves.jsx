import { Box, Stack } from "@mui/material";
import React from "react";

const Waves = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        position: "relative",
        top: 0,
        left: 0,
        zIndex: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: "-8rem",
          left: 0,
          zIndex: -2,
        }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <defs>
            <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop
                offset='0%'
                style={{ stopColor: "rgb(50,154,255)", stopOpacity: 1 }}
              />
              <stop
                offset='45%'
                style={{ stopColor: "rgb(181,4,255)", stopOpacity: 1 }}
              />
              <stop
                offset='100%'
                style={{ stopColor: "rgb(166,0,255)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill='url(#grad1)'
            fillOpacity='1'
            d='M0,192L120,213.3C240,235,480,277,720,288C960,299,1200,277,1320,266.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'
          ></path>
        </svg>
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: "-4.5rem",
          left: "-25vw",
          zIndex: -1,
        }}
      >
        {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        fill='#eb3a68'
        fill-opacity='1'
        d='M0,192L80,208C160,224,320,256,480,261.3C640,267,800,245,960,208C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
      ></path>
    </svg> */}
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <defs>
            {/* Define linear gradient */}
            <linearGradient id='grad2' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop
                offset='0%'
                style={{ stopColor: "rgb(255,137,217)", stopOpacity: 1 }}
              />
              <stop
                offset='30%'
                style={{ stopColor: "rgb(215,0,120)", stopOpacity: 1 }}
              />
              <stop
                offset='100%'
                style={{ stopColor: "rgb(255,76,123)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          {/* Path with linear gradient fill */}
          <path
            d='M0,192L80,208C160,224,320,256,480,261.3C640,267,800,245,960,208C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
            fill='url(#grad2)'
            fillOpacity='1'
          />
            
        </svg>
      </Box>
    </Stack>
  );
};

export default Waves;