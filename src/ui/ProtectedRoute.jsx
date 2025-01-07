import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If No authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <p className="flex h-screen animate-pulse items-center justify-center text-2xl font-semibold">
        Loading...
      </p>
    );

  // 4. If there Is a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
