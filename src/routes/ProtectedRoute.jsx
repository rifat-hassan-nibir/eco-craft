/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center h-[70vh]">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
};

export default ProtectedRoute;
