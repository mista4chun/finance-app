import { useQuery } from "@tanstack/react-query";
import { getRecurringBills } from "../../services/transactionApi";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import CardSpinner from "../../ui/CardSpinner";

function RecurringOverview() {
  const { data: recurringBills, isLoading } = useQuery({
    queryKey: ["transactions", {}],
    queryFn: getRecurringBills,
  });

  const totalPaidBills = recurringBills
    ?.filter((bill) => bill.status === "Paid")
    .reduce((sum, bill) => sum + Math.abs(bill.amount), 0);

  const upComingBills = recurringBills?.filter(
    (bill) => bill.status === "Upcoming" || bill.status === "Due Soon",
  );
  const totalUpcomingBills = upComingBills?.reduce(
    (sum, bill) => sum + Math.abs(bill.amount),
    0,
  );

  const dueSoonBills = recurringBills?.filter(
    (bill) => bill.status === "Due Soon",
  );
  const totalDueSoon = dueSoonBills?.reduce(
    (sum, item) => sum + Math.abs(item.amount),
    0,
  );

  if (isLoading) return <CardSpinner />;

  return (
    <div className="rounded-xl bg-gray-50 px-6 pb-7 pt-6">
      <div className="flex items-center justify-between py-4">
        <h2 className="text-2xl font-bold">Recurring Bills</h2>
        <Link to="/recurring-bills" className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">See Details</span>
          <img src="/icon-caret-right.svg" alt="" />
        </Link>
      </div>
      <div className="flex items-center justify-between rounded-md border-l-4 border-[#277c78] bg-[#f8f4f0] p-4">
        <p className="text-sm text-gray-500">Paid Bills</p>
        <p className="font-bold">{formatCurrency(totalPaidBills)}</p>
      </div>
      <div className="my-3 flex items-center justify-between rounded-md border-l-4 border-[#f2cdac] bg-[#f8f4f0] p-4">
        <p className="text-sm text-gray-500">Total Upcoming</p>
        <p className="font-bold">{formatCurrency(totalUpcomingBills)}</p>
      </div>
      <div className="flex items-center justify-between rounded-md border-l-4 border-[#B2C9D7] bg-[#f8f4f0] p-4">
        <p className="text-sm text-gray-500">Due Soon</p>
        <p className="font-bold">{formatCurrency(totalDueSoon)}</p>
      </div>
    </div>
  );
}

export default RecurringOverview;
