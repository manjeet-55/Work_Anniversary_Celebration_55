import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import React, { forwardRef } from "react";
import BrandLogo from "../assets/brand_logo.png";
import { useNavigate } from "react-router-dom";
const Header = ({ handleActivitiesClick }) => {
  const navigate = useNavigate();
  return (
    // <div
    //   style={{
    //     position: "absolute",
    //     top: 5,
    //     width: "95vw",
    //     display: "flex",
    //     justifyContent: "flex-end",
    //   }}
    // >
    //   <div
    //     style={{
    //       width: "35rem",
    //       background: "#1B1525",
    //       height: "50px",
    //       borderRadius: "2rem",
    //       position: "relative",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       padding: "0.5rem 1rem",
    //       columnGap: "0.5rem",
    //     }}
    //   >
    //     <div
    //       style={{
    //         background: "linear-gradient(to top, #f9f9f9, #f5f5f5)",
    //         borderRadius: "50%",
    //         height: "38px",
    //         width: "38px",
    //         overflow: "hidden",
    //         border: "1px solid lightgrey",
    //       }}
    //     >
    //       <img
    //         src='src\assets\brand_logo.png'
    //         style={{
    //           height: "100%",
    //           width: "100%",
    //           objectFit: "cover",
    //         }}
    //       />
    //     </div>
    //     <h1
    //       style={{
    //         color: "white",
    //         fontWeight: 400,
    //       }}
    //     >
    //       Work Anniversaries Celebration{" "}
    //     </h1>
    //   </div>
    // </div>
    <AppBar
      sx={{
        position: "sticky",
        top: 0,
        boxShadow: "none",
        padding: "0 2rem",
        background: "#f5f5f5",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          wdith: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "5rem",
            width: "4rem",
            height: "4rem",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={BrandLogo}
            alt='55 logo'
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "2rem",
          }}
        >
          <a
            style={{ color: "#000", fontWeight: 500, textDecoration: "none" }}
            href='https://fiftyfivetech.io/'
            target='_blank'
          >
            Company
          </a>
          <Typography
            style={{ color: "#000", fontWeight: 500, cursor: "pointer" }}
            onClick={handleActivitiesClick}
          >
            Activites
          </Typography>

          <IconButton
            size='medium'
            edge='end'
            color='inherit'
            aria-label='user profile'
          >
            <Avatar alt='User Profile' sx={{ width: "2rem", height: "2rem" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
