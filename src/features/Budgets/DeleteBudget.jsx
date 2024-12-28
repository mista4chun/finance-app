import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBudget } from "../../services/budgetApi";
import toast from "react-hot-toast";

function DeleteBudget({ budgetId }) {
  const queryClient = useQueryClient();
  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBudget,

    onSuccess: () => {
      toast.success("Budget successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["budgets"],
        
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return (
    <button
      className="pt-3 text-red-600"
      disabled={isDeleting}
      onClick={() => mutate(budgetId)}
    >
      Delete Budget
    </button>
  );
}

export default DeleteBudget;
