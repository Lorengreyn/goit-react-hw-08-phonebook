import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, path, restricted = false }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return isLoggedIn && restricted ? <Navigate to={`${path}`} /> : children;
};

export default PublicRoute;