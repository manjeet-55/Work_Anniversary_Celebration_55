import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Close } from "@mui/icons-material";
import { palette } from "../styles/theme";
const BadgeModal = ({ showModal, setShowModal }) => {
  const [open, setOpen] = useState(showModal);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    const imageUrl = "src/assets/Ribbon.png"; // Replace this with the actual URL of your image
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "badge.png"; // You can set the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "25rem",
            background: palette.white[900],
            p: 2,
            outline: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Here Is your Contribution Badge
            </Typography>
            <Close
              sx={{
                background: palette.blue.primary,
                borderRadius: "50%",
                color: "white",
                padding: "0.25rem",
                fontSize: "1.75rem",
                cursor: "pointer",
              }}
              onClick={() => {
                setShowModal((prev) => !prev);
              }}
            />
          </Box>

          <img
            src='src\assets\Ribbon.png'
            alt='Image'
            style={{ maxWidth: "100%", marginTop: "10px" }}
          />
          <Button
            onClick={handleDownload}
            variant='contained'
            color='primary'
            sx={{
              background: palette.blue.primary,
              color: palette.white.primary,
              "&.MuiButtonBase-root": {
                minWidth: "auto",
              },
              boxShadow: "none",
              borderRadius: "0.75rem",
              "&:hover": {
                background: palette.blue.primary,
                transform: "scale(1.04)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            Download Badge
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BadgeModal;
