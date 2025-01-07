import { Link } from "react-router-dom";
import { useBudgets } from "../Budgets/useBudgets";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import TinyCardBudget from "./TinyCardBudget";
import CardSpinner from "../../ui/CardSpinner";

ChartJS.register(ArcElement, Tooltip, );

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

  if(isLoading) return <CardSpinner />

  return (
    <div className=" rounded-xl bg-gray-50 px-6 pb-12 pt-6 mb-7 ">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-2xl font-bold">Budgets</h2>
        <Link to="/budgets" className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">See Details</span>
          <img src="/icon-caret-right.svg" alt="" />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-5 md:justify-items-end ">
        <div className="mx-auto size-52 lg:size-44   ">
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
