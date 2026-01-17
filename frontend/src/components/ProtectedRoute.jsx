import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles }) => {
  const { isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Role check (if roles provided)
  if (roles && !roles.includes(user?.role)) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default ProtectedRoute;
