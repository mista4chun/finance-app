import { formatCurrency } from "../../utils/helper";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function BudgetsSummary({ budgets }) {
  const pieChartData = {
    labels: budgets?.map((budget) => budget.category),
    datasets: [
      {
        label: "Spent",
        data: budgets?.map((budget) => budget.spent),
        backgroundColor: budgets?.map((budget) => budget.theme || "#ccc"),
        borderWidth: 1,
      },
      {
        label: "Maximum",
        data: budgets?.map((budget) => budget.maximum),
        backgroundColor: budgets?.map(() => "#ddd"),
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex flex-col rounded-xl bg-gray-50 px-8 pb-5 pt-10 font-semibold md:flex-row md:justify-between lg:flex-col">
      <div className="mx-auto grow px-5 pb-10">
       <Pie data={pieChartData} />
      </div>

      <div className="grow">
        <h2 className="text-xl font-bold">Spending Summary</h2>
        {budgets?.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b last:border-b-0  py-3 text-sm text-gray-400">
            <div className="flex items-center  gap-3">
              <span
                className="h-5 w-1 rounded-md"
                style={{ backgroundColor: item.theme }}
              ></span>
              {item.category}
            </div>
            <div>
              <span className="text-lg font-semibold text-gray-800">{formatCurrency(Math.abs(item.spent))} </span>
              of  {formatCurrency(Math.abs(item.maximum))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetsSummary;
