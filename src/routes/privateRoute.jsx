import { Navigate, useLocation } from "react-router-dom";
import { getLocalStorageItem } from "../utils/storageService";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = getLocalStorageItem("user");
  if (user && user.role !== "user") {
    return <>{children}</>;
  }
  // Redirect to login if user is not defined or not an admin
  return <Navigate to="/signin" state={{ from: location }} />;
};

export default PrivateRoute;
