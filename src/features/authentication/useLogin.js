// useLogin.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      console.log("Login successful, setting user:", user); // Debug successful login
      // Set the user data in the query cache
      queryClient.setQueryData(["user"], user);
      navigate("/overview", { replace: true });
    },
    onError: (err) => {
      console.log("Login error:", err); // Debug login error
      toast.error("The provided email or password is incorrect");
    },
  });

  return {
    isPending: mutation.isPending,
    mutate: mutation.mutate,
  };
}
