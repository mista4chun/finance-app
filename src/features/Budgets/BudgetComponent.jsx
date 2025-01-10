import { Link } from "react-router-dom";
import { formatCurrency, formatISODate } from "../../utils/helper";
import { useState } from "react";
import EditBudget from "./EditBudget";
import DeleteBudget from "./DeleteBudget";

function BudgetComponent({ budget }) {
  
  const remaining = Math.abs(budget.maximum) - Math.abs(budget.spent);
  const rems = remaining < 0 ? 0 : remaining;
  const progressPercentage = Math.min(
   
    (Math.abs(budget.spent) / Math.abs(budget.maximum)) * 100,
    100,
  );
  const [isMiniModalOpen, setIsMiniModalOpen] = useState(false);

  return (
    <div className="mb-3 w-full rounded-xl bg-gray-50 px-8 py-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="h-4 w-4 rounded-full"
            style={{
              backgroundColor: budget.theme,
            }}
          ></span>
          <h1 className="text-lg font-bold">{budget.category}</h1>
        </div>

        <div className="relative">
          <button onClick={() => setIsMiniModalOpen(!isMiniModalOpen)}>
            <img src="/icon-ellipsis.svg" alt="" className="cursor-pointer" />
          </button>
          {isMiniModalOpen && (
            <div className="absolute right-0 w-32 divide-y rounded-md bg-gray-100 px-4 py-4 text-sm shadow-xl">
           
                <EditBudget budget={budget}  />
             
              <DeleteBudget budget={budget} />
            </div>
          )}
        </div>
      </div>

      <p className="pb-2.5 pt-4 text-gray-400">
        Maximum of {formatCurrency(budget.maximum)}
      </p>

      {/* ProgressBar */}
      <div className="flex h-8 w-full items-center rounded-sm bg-[#F8F4F0]">
        <div
          className={`mx-1 my-1 h-6 rounded-md`}
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: budget.theme,
          }}
        ></div>
      </div>
      <div className="grid grid-cols-2 pt-4">
        <div
          className="border-l-4 px-3"
          style={{ borderLeft: `4px solid ${budget.theme}` }}
        >
          <span className="text-sm text-gray-400">Spent</span>
          <p className="font-semibold">
            {formatCurrency(Math.abs(budget.spent))}
          </p>
        </div>
        <div className="border-l-4 border-l-[#F8F4F0] px-3">
          <span className="text-sm text-gray-400">Remaining</span>
          <p className="font-semibold">{formatCurrency(rems)}</p>
        </div>
      </div>

      <div className="my-3 rounded-lg bg-[#F8F4F0] px-3 py-3">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Latest Spending</p>
          <Link
            to="/transactions"
            className="flex items-center gap-3 border-none outline-none"
          >
            <span className="text-sm text-gray-400">See All </span>
            <img src="/icon-caret-right.svg" alt="" className="w-1" />
          </Link>
        </div>
        {budget.latestTransactions?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-2 pt-4 text-xs last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.avatar}
                alt=""
                className="hidden w-8 rounded-full md:block"
              />
              <p className="font-semibold">{item.name}</p>
            </div>
            <div className="flex flex-col">
              <span className="text-right font-semibold">
                {formatCurrency(item.amount)}
              </span>
              <span>{formatISODate(item.date, "dd MMM yyyy")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetComponent;
