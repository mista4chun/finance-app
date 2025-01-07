import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../../services/transactionApi";
import { Link } from "react-router-dom";
import TransRow from "./TransRow";
import CardSpinner from "../../ui/CardSpinner";

function TransactionsOverview() {
  const { data: transactions, isLoading } = useQuery({
    queryFn: fetchTransactions,
    queryKey: ["transactions"],
  });

  if(isLoading) return <CardSpinner />
  return (
    <div className=" rounded-xl bg-gray-50 px-4 py-4 pb-2">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-2xl font-bold">Transactions</h2>
        <Link to="/transactions" className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">See Details</span>
          <img src="/icon-caret-right.svg" alt="" />
        </Link>
      </div>

      {transactions?.map((transaction) => (
        <TransRow key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionsOverview;
