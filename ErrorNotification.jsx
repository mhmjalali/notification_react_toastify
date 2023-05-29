import DangerousIcon from "@mui/icons-material/Dangerous";
import { Box, Button, Divider, Typography } from "@mui/material";
import { toast } from "react-toastify";

const ErrorNotification = (directionApp, statusCode, message) => {
  toast(
    ({ closeToast }) => (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DangerousIcon color="error" sx={{ mr: 1.6 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography color="error" variant="button">
                Error (Code: {statusCode})
              </Typography>
              <Typography variant="caption">{message}</Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Button
          variant="contained"
          size="small"
          color="error"
          sx={{ mr: 0.5 }}
          onClick={closeToast}
        >
          Close
        </Button>
        <Button variant="contained" size="small" color="info">
          Contact Us
        </Button>
      </>
    ),
    {
      position: directionApp === "ltr" ? "top-left" : "top-right",
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    }
  );
};

export default ErrorNotification;
