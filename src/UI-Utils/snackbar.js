import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';

export const withSnackbar = WrappedComponent => {
  return props => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [duration, setDuration] = useState(2000);
    const [severity, setSeverity] = useState(
      "success"
    ); /** error | warning | info */

    const showMessage = (message, severity = "error", duration = 2000) => {
      setMessage(message);
      setSeverity(severity);
      setDuration(duration);
      setOpen(true);
    };

   

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };

    return (
      <>
        <WrappedComponent {...props} snackbarShowMessage={showMessage} />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          autoHideDuration={duration}
          open={open}
          onClose={handleClose}
          TransitionComponent={Slide}
        >
          <Alert variant="filled" onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  };
};
