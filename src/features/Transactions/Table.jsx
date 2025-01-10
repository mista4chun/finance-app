import TransactionRow from "./TransactionRow";
import Spinner from "../../ui/Spinner";

import Pagination from "../../ui/Pagination";

import { getTransactions } from "../../services/transactionApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PAGE_SIZE } from "../../utils/constants";

function Table() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const [sort, setSort] = useState({ column: "date", ascending: false });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Latest");

  const [filter, setFilter] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All Transactions");

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  // Debounce the search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(search);
    }, 300); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [search]);

  const {
    data: transactionsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "transactions",
      { page, search: debouncedSearchTerm, PAGE_SIZE, sort, filter },
    ],
    queryFn: getTransactions,

    enabled: !!debouncedSearchTerm || search === "", // Only fetch if search term exists
  });

  const transactions = transactionsData?.data || [];
  const totalCount = transactionsData?.count || 0;

  const totalPages = totalCount > 0 ? Math.ceil(totalCount / PAGE_SIZE) : 1;

  queryClient.prefetchQuery({
    queryKey: [
      "transaction",
      { page: page + 1, search, PAGE_SIZE, sort, filter },
    ],
    queryFn: getTransactions,
  });

  const handleSort = (type) => {
    // Update the selected sort value for display
    const sortLabels = {
      latest: "Latest",
      oldest: "Oldest",
      "a-z": "A to Z",
      "z-a": "Z to A",
      highest: "Highest",
      lowest: "Lowest",
    };

    setSelectedSort(sortLabels[type]); // Set the display label
    setIsDropdownOpen(false); // Close the dropdown

    // Apply the sorting logic
    switch (type) {
      case "latest":
        setSort({ column: "date", ascending: false });
        break;
      case "oldest":
        setSort({ column: "date", ascending: true });
        break;
      case "a-z":
        setSort({ column: "name", ascending: true });
        break;
      case "z-a":
        setSort({ column: "name", ascending: false });
        break;
      case "highest":
        setSort({ column: "amount", ascending: false });
        break;
      case "lowest":
        setSort({ column: "amount", ascending: true });
        break;
      default:
        break;
    }
  };

  const handleFilter = (value, label) => {
    setFilter(value === "all" ? "" : value);
    setSelectedFilter(label);
    setIsDropdownOpen1(false);
  };

  const filterOptions = [
    { value: "all", label: "All Transactions" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Bills", label: "Bills" },
    { value: "Groceries", label: "Groceries" },
    { value: "Dining Out", label: "Dining Out" },
    { value: "Transportation", label: "Transportation" },
    { value: "Personal Care", label: "Personal Care" },
    { value: "Education", label: "Education" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Shopping", label: "Shopping" },
    { value: "General", label: "General" },
  ];

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading transactions.</p>;

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border border-gray-500 p-2 outline-none"
        />

        <div className="flex items-center gap-8">
          <div className="relative max-w-md">
            <div className="flex items-center gap-3">
              <p className="hidden text-gray-400 md:block">Sort by</p>
              <button
                className="cursor-pointer items-center justify-between bg-transparent outline-none ring-gray-500 ring-offset-2 md:flex md:gap-4 md:rounded-md md:px-4 md:py-2 md:ring-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="hidden text-sm md:block">{selectedSort}</span>
                <img
                  src="/icon-caret-down.svg"
                  alt="caret"
                  className="hidden md:block"
                />
                <img
                  src="/icon-sort-mobile.svg"
                  alt="sort-mobile"
                  className="md:hidden"
                />
              </button>
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-lg bg-white shadow-xl">
                <div className="flex flex-col items-start gap-3 px-3 py-3">
                  <button onClick={() => handleSort("latest")}>Latest</button>
                  <button onClick={() => handleSort("oldest")}>Oldest</button>
                  <button onClick={() => handleSort("a-z")}>A to Z</button>
                  <button onClick={() => handleSort("z-a")}>Z to A</button>
                  <button onClick={() => handleSort("highest")}>Highest</button>
                  <button onClick={() => handleSort("lowest")}>Lowest</button>
                </div>
              </div>
            )}
          </div>
          <div className="relative mx-auto max-w-md">
            <div className="flex items-center gap-3">
              <p className="hidden text-gray-400 md:block">Category</p>
              <button
                className="cursor-pointer items-center justify-between bg-transparent outline-none ring-gray-500 ring-offset-2 md:flex md:gap-4 md:rounded-md md:px-4 md:py-2 md:ring-1"
                onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}
              >
                <span className="hidden text-sm md:block">
                  {selectedFilter}
                </span>
                <img
                  src="/icon-caret-down.svg"
                  alt="caret"
                  className="hidden md:block"
                />
                <img
                  src="/icon-filter-mobile.svg"
                  alt="filter"
                  className="md:hidden"
                />
              </button>
            </div>
            {/* dropdown Items */}

            {isDropdownOpen1 && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-xl">
                <div className="flex flex-col items-start gap-3 px-3 py-3">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleFilter(option.value, option.label)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TableHeader */}
      <div className="hidden grid-cols-[1fr_0.8fr_0.8fr_auto] gap-8 border-b border-gray-300 py-2 text-xs font-medium text-gray-500 md:grid">
        <div>Recipient / Sender</div>
        <div>Category</div>

        <div>Transaction Date</div>
        <div>Amount</div>
      </div>
      <div>
        {transactions.length > 0 ? (
          transactions?.map((transaction) => (
            <TransactionRow transaction={transaction} key={transaction.id} />
          ))
        ) : (
          <p>No Transaction found</p>
        )}
      </div>

      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </>
  );
}

export default Table;
