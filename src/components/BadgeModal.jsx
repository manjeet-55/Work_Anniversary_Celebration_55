import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BadgeModal = ({ showModal }) => {
  const [open, setOpen] = useState(showModal);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box sx={{ width: 300, bgcolor: "background.paper", p: 2 }}>
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        Here Is your Badge
      </Typography>
      <img
        src='src\assets\Ribbon.png'
        alt='Image'
        style={{ maxWidth: "100%", marginTop: "10px" }}
      />
      <Button
        onClick={handleDownload}
        variant='contained'
        color='primary'
        style={{ marginTop: "10px" }}
      >
        Download Image
      </Button>
    </Box>
  );

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

export default BadgeModal;
