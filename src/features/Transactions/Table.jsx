import TransactionRow from "./TransactionRow";
import Spinner from "../../ui/Spinner";
import useTransactions from "./useTransactions";

import { useGlobalSearchParams } from "../../hooks/useGlobalSearchParams";
import Pagination from "../../ui/Pagination";
import { PAGE_SIZE } from "../../utils/constants";

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

  // 4 Pagination
  const currentPage = !getParam("page") ? 1 : Number(getParam("page"));
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      {/* TableHeader */}
      <div className="hidden grid-cols-[1fr_0.8fr_0.8fr_auto] gap-8 border-b border-gray-300 py-2 text-xs font-medium text-gray-500 md:grid">
        <div>Recipient / Sender</div>
        <div>Category</div>

        <div>Transaction Date</div>
        <div>Amount</div>
      </div>
      <div>
        {paginatedData.length > 0 ? (
          paginatedData?.map((transaction) => (
            <TransactionRow transaction={transaction} key={transaction.id} />
          ))
        ) : (
          <p>No Transaction found</p>
        )}
      </div>
      <Pagination count={filteredData.length} />
    </>
  );
}

export default Table;
