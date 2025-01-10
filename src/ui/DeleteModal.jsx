import { motion, AnimatePresence } from "framer-motion";

function Modal({
  isOpen,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isLoading = false,
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
    <motion.div className="fixed inset-0"
    initial={{ opacity: 0, y: 20 }} // Starting animation
    animate={{ opacity: 1, y: 0 }} // While in DOM
    exit={{ opacity: 0, y: -20 }} // Exit animation
    transition={{ duration: 0.4, ease: "easeInOut" }}>
      <div className="absolute inset-0 z-40 flex h-screen items-center justify-center bg-black/40">
        <div className="max-w-sm rounded-2xl bg-gray-100 px-6 py-8 md:max-w-xl">
          <div className="flex items-center justify-between gap-3 pb-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <img
              src="/icon-close-modal.svg"
              alt="Close Modal"
              onClick={onCancel}
              className="cursor-pointer"
            />
          </div>
          <p className="pb-4 text-sm text-gray-600">{description}</p>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`mb-5 block w-full rounded-lg px-4 py-3 font-bold text-gray-50 ${
              isLoading
                ? "bg-[#c94736] cursor-not-allowed"
                : "bg-[#c94736] hover:bg-[#c94750]"
            }`}
          >
            {confirmText}
          </button>
          <button
            onClick={onCancel}
            className="block w-full font-medium text-gray-500 hover:text-gray-800"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
