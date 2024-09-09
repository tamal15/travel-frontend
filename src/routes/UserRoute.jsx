import { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const UserRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <FaSpinner className="text-orange-500 text-4xl font-semibold animate-spin" />
      </div>
    );
  else if (user) return children;
  else return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default UserRoute;
