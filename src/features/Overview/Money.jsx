import { useQuery } from "@tanstack/react-query";
import { getBalance } from "../../services/balanceApi";
import { formatCurrency } from "../../utils/helper";

function Money() {
  const { data: balance = [], isLoading } = useQuery({
    queryFn: getBalance,
    queryKey: ["balance"],
  });

  const items = [
    {
      label: " Current Balance",
      value: balance[0]?.current
        ? formatCurrency(balance[0]?.current)
        : "$0.00",
      bg: "bg-[#201f24]",
      textColor: "text-gray-50",
    },
    {
      label: " Income",
      value: balance[0]?.income ? formatCurrency(balance[0]?.income) : "$0.00",
      bg: "bg-gray-50",
      textColor: "",
    },
    {
      label: " Expenses",
      value: balance[0]?.expenses
        ? formatCurrency(balance[0]?.expenses)
        : "$0.00",
      bg: "bg-gray-50",
      textColor: "",
    },
  ];

  return (
    <>
      <h1 className="my-8 text-4xl font-bold">Overview</h1>
      <section className="mb-4 flex flex-col gap-3 md:flex-row md:items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-full rounded-xl ${item.bg} p-4 ${item.textColor}`}
          >
            <p className="pb-2">{item.label}</p>
            <p className="text-4xl font-bold">{item.value}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Money;
