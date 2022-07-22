import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, redirectTo = "/" }) {
  const token = useSelector(state => state.user.token);
  return token ? children : <Navigate to={redirectTo} />;
}
