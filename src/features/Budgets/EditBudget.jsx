import { useState } from "react";

import EditBudgetForm from "./EditBudgetForm";


function EditBudget({ budget }) {
  const [showModal, setShowModal] = useState(false);

  function handleModals() {
    setShowModal(!showModal);
   
  }
  return (
    <>
      <button onClick={handleModals} className="pb-3">
        Edit Budget
      </button>

      {showModal && <div className="fixed inset-0">
      <EditBudgetForm showModal={showModal} setShowModal={setShowModal} budget={budget} />
      </div> }
    </>
  );
}

export default EditBudget;
