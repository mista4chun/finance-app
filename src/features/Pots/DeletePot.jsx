import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePot } from "../../services/potsApi";
import toast from "react-hot-toast";

function DeletePot({potId}) {
    const queryClient = useQueryClient();
  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: deletePot,

    onSuccess: () => {
      toast.success("Pot successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["pots"],
        
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return (
    <button
      className="pt-3 text-red-600"
      disabled={isDeleting}
      onClick={() => mutate(potId)}
    >
      Delete Pot
    </button>
  );
}

export default DeletePot
