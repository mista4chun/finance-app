import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBudget } from "../../services/budgetApi";
import toast from "react-hot-toast";

export function useDelete() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteBudget,

    onSuccess: () => {
      toast.success("Budget successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate: mutation.mutate, isDeleting: mutation.isPending };
}
