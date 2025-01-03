import { useState } from "react";
import EditPotForm from "./EditPotForm";

function EditPot({pot}) {
    const [showModal, setShowModal] = useState(false);

    function handleModals() {
      setShowModal(!showModal);
     
    }
    return (
      <>
        <button onClick={handleModals} className="pb-3">
          Edit Pot
        </button>
  
        {showModal && <div className="fixed inset-0 z-50">
        <EditPotForm openModal={showModal} close={setShowModal} pot={pot} />
        </div> }
      </>
    );
}

export default EditPot
