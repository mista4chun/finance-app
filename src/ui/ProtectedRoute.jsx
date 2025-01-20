import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";


function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If there's no authenticated user redirect to the /login
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login", { replace: true }); // `replace` prevents back navigation to this route
    }
  }, [isAuthenticated, isLoading, navigate]);

  // Show loading spinner while authentication is in progress
  if (isLoading) {
    return (
      <p className="flex h-screen animate-pulse items-center justify-center text-2xl font-semibold">
        Loading...
      </p>
    );
  }

  // Once authenticated, render children; otherwise, return null
  if (!isAuthenticated) return null;

  return children;
}

export default ProtectedRoute;