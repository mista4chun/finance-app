import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePot } from "../../services/potsApi";
import toast from "react-hot-toast";
import Modal from "../../ui/DeleteModal";
import { useState } from "react";

function DeletePot({pot}) {
  const [isOpen, setIsOpen] = useState(false);
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

  function handleDelete() {
    mutate(pot.id)
  }
  return (
    <>
    <button
      className="pt-3 text-red-600"
      disabled={isDeleting}
      onClick={() =>setIsOpen(!isOpen)}
      >
      Delete Pot
    </button>
    <Modal
        isOpen={isOpen}
        title={`Delete ‘${pot.name}’?`}
        description="Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever."
        confirmText="Yes, Confirm Deletion"
        cancelText="No, Go Back"
        onConfirm={handleDelete}
        onCancel={() => setIsOpen(false)}
        isLoading={isDeleting}
      />
      </>
  );
}

export default DeletePot
