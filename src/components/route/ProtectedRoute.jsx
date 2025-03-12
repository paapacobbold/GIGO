import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  console.log("ProtectedRoute - isAuthenticated:", isAuthenticated); // Debug log

  if (!isAuthenticated) {
    console.log("Redirecting to login..."); // Debug log
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
