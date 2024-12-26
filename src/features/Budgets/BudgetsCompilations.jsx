
import BudgetComponent from "./BudgetComponent";
import BudgetsSummary from "./BudgetsSummary";


function BudgetsCompilations() {


  return (
    <section className="px-4 py-6">
      <div className="flex items-center justify-between pb-3">
        <h1 className="text-3xl font-bold">Budgets</h1>
        <button className="rounded-md bg-[#201f24] px-4 py-3.5 font-bold tracking-tighter text-gray-100">
          +Add New Budget
        </button>
      </div>

       <div className="flex-col items-start space-y-5 md:grid md:gap-5 md:space-y-0 lg:grid-cols-[1fr_1.5fr]">
        <BudgetsSummary />

        <div>
          {/* {budgets?.map((budget) => (
            <BudgetComponent budget={budget} key={budget.id} />
          ))} */}
        </div>
      </div> 
    </section>
  );
}

export default BudgetsCompilations;
