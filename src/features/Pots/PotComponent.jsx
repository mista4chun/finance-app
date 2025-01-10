import { useState } from "react";
import { formatCurrency } from "../../utils/helper";
import DeletePot from "./DeletePot";
import EditPot from "./EditPot";

import AddWithdrawMoneyForm from "./AddWithdrawMoneyForm";

function PotComponent({ pot }) {
  const [isMiniModalOpen, setIsMiniModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const progressPercentage = Math.min((pot.total / pot.target) * 100, 100);
  const percentage = (pot.total / pot.target) * 100;

  return (
    <div className="mb-3 w-full rounded-xl bg-gray-50 px-8 py-7">
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span
            className="h-4 w-4 rounded-full"
            style={{
              backgroundColor: pot.theme,
            }}
          ></span>
          <h1 className="text-lg font-bold">{pot.name}</h1>
        </div>

        <div className="relative">
          <button onClick={() => setIsMiniModalOpen(!isMiniModalOpen)}>
            <img src="/icon-ellipsis.svg" alt="" className="cursor-pointer" />
          </button>
          {isMiniModalOpen && (
            <div className="absolute right-0 w-32 divide-y rounded-md bg-gray-100 px-4 py-4 text-sm shadow-xl">
              <EditPot pot={pot} close={close} openModal={isMiniModalOpen} />

              <DeletePot pot={pot}  />
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between pb-3">
        <p className="text-sm text-gray-500">Total Saved</p>
        <span className="text-4xl font-bold">{formatCurrency(pot.total)}</span>
      </div>
      {/* ProgressBar */}
      <div className="flex h-3 w-full items-center rounded-sm bg-[#F8F4F0]">
        <div
          className={`h-2 rounded-md`}
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: pot.theme,
          }}
        ></div>
      </div>
      <div className="flex items-center justify-between pt-2 text-sm">
        <span className="font-semibold text-gray-600">{percentage}%</span>
        <span className="text-sm text-gray-500">
          Target of {formatCurrency(pot.target)}
        </span>
      </div>
      <div className="mb-4 flex items-center justify-between gap-5 pt-8 text-sm">
        <button
          onClick={() => setShowModal(!showModal)}
          className="grow rounded-md border-gray-500 bg-[#F8F4F0] px-4 py-4 transition-all duration-500 hover:border hover:bg-gray-50"
        >
          <span className="font-bold"> +Add Money </span>
        </button>
        {showModal && (
          <AddWithdrawMoneyForm
            pot={pot}
            close={setShowModal}
            openModal={showModal}
            actionType="add"
          />
        )}

        <button
          onClick={() => setWithdrawModal(!withdrawModal)}
          className="grow rounded-md border-gray-500 bg-[#F8F4F0] px-4 py-4 transition-all duration-500 hover:border hover:bg-gray-50"
        >
          <span className="font-bold"> Withdraw </span>
        </button>
        {withdrawModal && (
          <AddWithdrawMoneyForm
            pot={pot}
            close={setWithdrawModal}
            openModal={withdrawModal}
            actionType="withdraw"
          />
        )}
      </div>
    </div>
  );
}

export default PotComponent;
