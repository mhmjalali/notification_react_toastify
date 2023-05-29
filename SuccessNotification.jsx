import BeenhereIcon from "@mui/icons-material/Beenhere";
import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";

const SuccessNotification = (directionApp) => {
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
            <BeenhereIcon color="success" sx={{ mr: 1.6 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography color="success.main" variant="button">
                success (Code: 200)
              </Typography>
              <Typography variant="caption">Action Done</Typography>
            </Box>
          </Box>
        </Box>
      </>
    ),
    {
      position: directionApp === "ltr" ? "top-left" : "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: true,
      closeOnClick: false,
      draggable: true,
    }
  );
};

export default SuccessNotification;
