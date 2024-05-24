import { Navigate, useLocation } from "react-router-dom";
import { getLocalStorageItem } from "../utils/storageService";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const user = getLocalStorageItem("user");
  if (user && user.role==="admin") {
    return <>{children}</>;
  }
  // Redirect to login if user is not defined or not an admin
  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
