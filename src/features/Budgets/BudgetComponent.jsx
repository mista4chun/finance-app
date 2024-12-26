import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";

function BudgetComponent({ budget }) {
 

  const  categoryName = categories?.name || "Unknown";
  const theme = categories?.budgets?.[0]?.theme || "#ccc";
  const maximum = categories?.budgets?.[0]?.maximum || '10'
 
  return (
    <div className="mb-3 w-full rounded-lg bg-gray-50 px-3 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="h-4 w-4 rounded-full"
            style={{
              backgroundColor: theme
            }}
            
          ></span>
          <h1 className="text-lg font-bold">{categoryName
          }</h1>
        </div>

        <img src="/icon-ellipsis.svg" alt="" />
      </div>

      <p className="pb-2.5 pt-4 text-gray-400">
        Maximum of {formatCurrency(maximum)}

      </p>

      {/* ProgressBar */}
      <div className="flex h-8 w-full items-center rounded-md bg-[#F8F4F0]">
        <div
          className="mx-1 my-1 h-6 w-[50%] rounded-md"
          style={{
            backgroundColor: theme
          }}
        ></div>
      </div>
      <div className="grid grid-cols-2 pt-4">
        <div className=" px-3">
       
          <span className="text-sm text-gray-400">Spent</span>
          <p className="font-semibold">$25</p>
        </div>
        <div className="border-l-4 px-3">
          <span className="text-sm text-gray-400">Free</span>
          <p className="font-semibold">$25</p>
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
        <div className="flex items-center justify-between border-b pb-2 pt-4 text-xs last:border-b-0">
          <div className="flex items-center gap-3">
            <img
              src="/avatars/ethan-clark.jpg"
              alt=""
              className="hidden w-8 rounded-full md:block"
            />
            <p className="font-semibold">Ethan Clark</p>
          </div>
          <div className="flex flex-col">
            <span className="text-right font-semibold">$75.00</span>
            <span>19 Aug 2024</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-b pb-2 pt-4 text-xs last:border-b-0">
          <div className="flex items-center gap-3">
            <img
              src="/avatars/ethan-clark.jpg"
              alt=""
              className="hidden w-8 rounded-full md:block"
            />
            <p className="font-semibold">Ethan Clark</p>
          </div>
          <div className="flex flex-col">
            <span className="text-right font-semibold">$75.00</span>
            <span>19 Aug 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetComponent;
