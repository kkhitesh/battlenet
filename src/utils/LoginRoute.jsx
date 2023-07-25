import { Outlet, Navigate } from "react-router-dom";

const LoginRoute = () => {
  let isAuthenticated = true;
  if (localStorage.getItem("access_token") == null) {
    isAuthenticated = false;
  }
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default LoginRoute;
