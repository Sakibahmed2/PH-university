import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { userCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(userCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
