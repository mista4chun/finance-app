import BudgetOverview from "./BudgetOverview";
import Money from "./Money";
import PotOverview from "./PotOverview";
import RecurringOverview from "./RecurringOverview";
import TransactionsOverview from "./TransactionsOverview";

function OverviewCompilation() {
  return (
    <div>
      <Money />
      <div className="grid  gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div >
          <PotOverview />
          <TransactionsOverview />
        </div>

        <div  >
          <BudgetOverview />

          <RecurringOverview />
        </div>
      </div>
    </div>
  );
}

export default OverviewCompilation;
