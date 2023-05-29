import ReportIcon from "@mui/icons-material/Report";
import { Box, Button, Divider, Typography } from "@mui/material";
import { toast } from "react-toastify";

const WarningNotification = (directionApp) => {
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
            <ReportIcon color="warning" sx={{ mr: 1.6 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography color="warning.main" variant="button">
                Warning (Code: 500)
              </Typography>
              <Typography variant="caption">No Response From Server</Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Button
          variant="contained"
          size="small"
          color="warning"
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

export default WarningNotification;
