import { Link } from "react-router-dom";
import { useBudgets } from "../Budgets/useBudgets";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import TinyCardBudget from "./TinyCardBudget";

ChartJS.register(ArcElement, Tooltip, Legend);

function BudgetOverview() {
  const { budgets, isLoading } = useBudgets();

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
    <div className=" rounded-xl bg-gray-50 p-4 mb-7">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-2xl font-bold">Budgets</h2>
        <Link to="/budgets" className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">See Details</span>
          <img src="/icon-caret-right.svg" alt="" />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-5 items-center">
        <div className="mx-auto size-64 px-5 pb-10 md:size-72 ">
          <Pie data={pieChartData} />
        </div>

        <div className=" grid grid-cols-2 gap-4  md:grid-cols-1 ">
          {budgets?.map((budget) => (
            <TinyCardBudget key={budget.id} budget={budget} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BudgetOverview;
