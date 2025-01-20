import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const { isPending, data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false, // Don't retry on error
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });

  return { 
    isLoading: isPending,
    user, 
    error,
    isAuthenticated: user?.role === "authenticated" || user?.aud === "authenticated" // Check both role and aud
  };
}