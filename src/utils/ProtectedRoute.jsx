import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let isAuthenticated = false;
  if (localStorage.getItem("access_token") !== null) {
    isAuthenticated = true;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
