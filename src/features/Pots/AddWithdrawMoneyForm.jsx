import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { handleTransaction } from "../../services/potsApi";

function AddWithdrawMoneyForm({
  pot = {},
  close,
  openModal,
  actionType = "add",
}) {
  const queryClient = useQueryClient();

  const [amount, setAmount] = useState(0);

  const currentAmount = pot.total || 0;
  const targetAmount = pot.target || 2000;

  const updatedAmount =
    actionType === "add"
      ? currentAmount + Number(amount)
      : currentAmount - Number(amount);

  const progress = parseFloat(
    ((Math.max(updatedAmount, 0) / targetAmount) * 100).toFixed(2),
  );

  const { mutate } = useMutation({
    mutationFn: handleTransaction,
    onSuccess: () => {
      toast.success(
        `Amount ${actionType === "add" ? "added to" : "withdrawn from"} the pot successfully`,
      );
      queryClient.invalidateQueries({
        queryKey: ["pots"],
      });
      close(!openModal);
    },
    onError: (err) => toast.error(err.message),
  });

  function handleInput(e) {
    const value = e.target.value;
    setAmount(value ? parseFloat(value) : 0);
  }

  return (
    <div className="absolute inset-0 z-40 flex h-screen items-center justify-center bg-black/40">
      <div className="max-w-sm rounded-2xl bg-gray-100 px-6 py-8 md:max-w-xl">
        <div className="flex items-center justify-between gap-3 pb-4">
          <h1 className="text-3xl font-bold">
            {actionType === "add" ? "Add to" : "Withdraw from"}
            {`‘${pot.name}’`}
          </h1>
          <img
            src="/icon-close-modal.svg"
            alt="Close"
            onClick={() => close(!openModal)}
            className="cursor-pointer"
          />
        </div>
        <p className="pb-4 text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vero
          beatae officiis dolor perspiciatis placeat illum fugit neque id
          accusamus?
        </p>
        {/* ProgressBar */}
        <div className="mb-8">
          <div className="flex items-center justify-between pb-4">
            <p className="text-gray-500">New Amount</p>
            <p className="text-3xl font-bold">
              ${Math.max(updatedAmount, 0).toFixed(2)}
            </p>
          </div>
          <div className="flex h-3 w-full items-center rounded-sm bg-[#F8F4F0]">
            <div
              className="h-2 rounded-md"
              style={{
                width: ` ${Math.min(progress, 100)}%`,
                backgroundColor: actionType === "add" ? "#277c78" : "#C94736",
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between pt-3">
            <span className="font-bold text-[#277c78]">{progress}%</span>
            <span className="text-sm text-gray-500">
              Target of ${targetAmount.toFixed(2)}
            </span>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            mutate({
              potId: pot.id,
              amount: actionType === "add" ? amount : -amount, // Negative amount for withdrawal
            });
          }}
          className="mt-3"
        >
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold">
              Amount to {actionType === "add" ? "Add" : "Withdraw"}
            </label>
            <input
              type="number"
              value={amount}
              onChange={handleInput}
              placeholder="$"
              className="rounded-lg border border-gray-500 bg-inherit px-4 py-3 outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-[#201f24] px-4 py-3.5 font-bold text-white hover:bg-[#696868]"
          >
            Confirm {actionType === "add" ? "Addition" : "Withdrawal"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddWithdrawMoneyForm;
