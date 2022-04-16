import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context";

const RequiresAuth = ({ children }) => {
  const { authState } = useAuth();
  const location = useLocation();

  return authState.encodedToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
