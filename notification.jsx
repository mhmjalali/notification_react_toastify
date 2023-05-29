import { toast } from "react-toastify";
import ErrorNotification from "./ErrorNotification";
import SuccessNotification from "./successNotification";
import WarningNotification from "./warningNotification";

const Notifications = (directionApp, response) => {
  toast.dismiss();
  switch (response.status) {
    case 200:
      SuccessNotification(directionApp, response.status);
      break;
    case 400:
      ErrorNotification(directionApp, response.status);
      break;
    case 401:
      ErrorNotification(directionApp, response.status);
      break;
    case 403:
      ErrorNotification(directionApp, response.status);
      break;
    case 422:
      ErrorNotification(directionApp, response.status, response.data.message);
      break;
    case 500:
      WarningNotification(directionApp, response.status);
      break;
    case 503:
      WarningNotification(directionApp, response.status);
      break;
    case 504:
      WarningNotification(directionApp, response.status);
      break;
  }
};

export default Notifications;
