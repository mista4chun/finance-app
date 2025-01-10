import { useState } from "react";
import { useDelete } from "./useDelete";
import Modal from "../../ui/DeleteModal";

function DeleteBudget({ budget }) {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isDeleting } = useDelete();

  function handleDelete() {
    mutate(budget.id);
  }

  return (
    <>
      <button className="pt-3 text-red-600" onClick={() => setIsOpen(!isOpen)}>
        Delete Budget
      </button>
      <Modal
        isOpen={isOpen}
        title={`Delete ‘${budget.category}’?`}
        description="Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever."
        confirmText="Yes, Confirm Deletion"
        cancelText="No, Go Back"
        onConfirm={handleDelete}
        onCancel={() => setIsOpen(false)}
        isLoading={isDeleting}
      />
    </>
  );
}

export default DeleteBudget;
