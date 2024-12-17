
import TransactionRow from "./TransactionRow";
import Spinner from "../../ui/Spinner";
import useTransactions from "./useTransactions";

import { useGlobalSearchParams } from "../../hooks/useGlobalSearchParams";

function Table() {
  const { isLoading, transactions } = useTransactions();
  const { getParam } = useGlobalSearchParams();

  if (isLoading) return <Spinner />;

  // 1 Filter
  const filterValue = getParam("category") || "All Transactions";


  let filteredData =
    filterValue === "All Transactions"
      ? transactions
      : transactions?.filter((item) => item.category === filterValue);

  // 2 Search
  const searchQuery = getParam("search") || "";

  if (searchQuery) {
    filteredData = filteredData.filter((transaction) =>
      transaction.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  // 3 Sort
  // const sortOption = searchParams.get("sort") || "Latest";


  // const sortedData = [...filteredData].sort((a, b) => {
  //   switch (sortOption) {
  //     case "Latest":
  //       return b.date - a.date; // Sort by date descending
  //     case "Oldest":
  //       return a.date - b.date; // Sort by date ascending
  //     case "Highest":
  //       return b.amount - a.amount; // Sort by value descending
  //     case "Lowest":
  //       return a.amount - b.amount; // Sort by value ascending
  //     case "A-Z":
  //       return a.name.localeCompare(b.name); // Alphabetical ascending
  //     case "Z-A":
  //       return b.name.localeCompare(a.name); // Alphabetical descending
  //     default:
  //       return 0;
  //   }

  // });

  return (
    <>
      {/* TableHeader */}
      <div className="hidden grid-cols-[1fr_0.8fr_0.8fr_auto] gap-8 border-b border-gray-300 py-2 text-xs font-medium text-gray-500 md:grid">
        <div>Recipient / Sender</div>
        <div>Category</div>

        <div>Transaction Date</div>
        <div>Amount</div>
      </div>

      {filteredData.length > 0 ? (
        filteredData?.map((transaction) => (
          <TransactionRow
            transaction={transaction}
            key={transaction.id}
            filteredData={filteredData}
          />
        ))
      ) : (
        <p>No Transaction found</p>
      )}
    </>
  );
}

export default Table;
