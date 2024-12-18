import BudgetsSummary from "./BudgetsSummary";

function BudgetsCompilations() {
  return (
    <section className="px-4 py-6">
      <div className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold">Budgets</h1>
        <button className="rounded-md bg-[#201f24] px-4 py-3.5 font-bold tracking-tighter text-gray-100">
          +Add New Budget
        </button>
      </div>
      <div>
        <BudgetsSummary />
        <div className="mt-5 rounded-lg bg-gray-50 px-3">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500"></div>
              <h1>Entertainment</h1>
            </div>

            <img src="/icon-ellipsis.svg" alt="ellipsis-button" />

          </div>



        </div>
      </div>
    </section>
  );
}

export default BudgetsCompilations;
