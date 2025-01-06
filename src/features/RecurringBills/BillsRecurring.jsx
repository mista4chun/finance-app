import { useQuery } from "@tanstack/react-query";

import { getRecurringBills } from "../../services/transactionApi";
import { useState } from "react";
import BillsRow from "./BillsRow";
import { formatCurrency } from "../../utils/helper";

function BillsRecurring() {
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState({ column: "date", ascending: false });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Latest");

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

  const { data: recurringBills, isLoading } = useQuery(
    ["transactions", { search, sort }],
    getRecurringBills,
  );
  const totalBills = recurringBills?.reduce(
    (sum, item) => sum + Math.abs(item.amount),
    0,
  );

  const paidBills = recurringBills?.filter((bill) => bill.status === "Paid");
  const totalPaidBills = paidBills?.reduce(
    (sum, bill) => sum + Math.abs(bill.amount),
    0,
  );

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

  const count = paidBills?.length;
  const countDue = dueSoonBills?.length;
  const countUpcoming = upComingBills?.length;

  if (isLoading)
    return (
      <p className="flex h-screen animate-pulse items-center justify-center text-2xl font-semibold">
        Loading...{" "}
      </p>
    );

  return (
    <>
      <h1 className="my-8 text-4xl font-bold">Recurring Bills</h1>
      <section className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">

        <div className="flex flex-col gap-6 md:flex-row md:justify-between lg:flex-col lg:justify-start">
          <div className="flex grow items-center gap-6 rounded-lg bg-[#201f24] px-6 py-8 md:flex-col md:items-start md:gap-8 lg:grow-0">
            <img src="/icon-recurring-bills.svg" alt="" />
            <div className="flex-col space-y-2 text-gray-50">
              <p className="text-sm">Total bills</p>
              <p className="text-4xl font-bold">{formatCurrency(totalBills)}</p>
            </div>
          </div>
          <div className="grow flex-col rounded-lg bg-gray-50 px-6 py-8 lg:grow-0">
            <h1 className="pb-3 font-bold">Summary</h1>
            <div className="flex items-center justify-between border-b pb-3 text-sm">
              <p className="text-xs text-gray-400">Paid Bills</p>
              <p className="font-bold">
                {" "}
                <span className="mr-1">{count}</span>(
                {formatCurrency(totalPaidBills)})
              </p>
            </div>
            <div className="flex items-center justify-between border-b py-3 text-sm">
              <p className="text-xs text-gray-400">Total Upcoming</p>
              <p className="font-bold">
                {" "}
                <span className="mr-1">{countUpcoming}</span>(
                {formatCurrency(totalUpcomingBills)})
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 text-sm text-[#c94736]">
              <p className="text-xs">Due Soon</p>
              <p className="font-bold">
                {" "}
                <span className="mr-1">{countDue}</span>(
                {formatCurrency(totalDueSoon)})
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-gray-50 px-4 pt-5 md:px-8">
          <div className="flex items-center justify-between gap-5">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-72 rounded-lg border border-gray-500 p-2 outline-none"
            />

            <div className="relative max-w-md">
              <div className="flex items-center gap-2">
                <p className="hidden text-gray-400 md:block">Sort by</p>
                <button
                  className="cursor-pointer items-center justify-between bg-transparent outline-none ring-gray-500 ring-offset-2 md:flex md:gap-4 md:rounded-md md:px-4 md:py-2 md:ring-1"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="hidden text-sm md:block">
                    {selectedSort}
                  </span>
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
                    <button onClick={() => handleSort("highest")}>
                      Highest
                    </button>
                    <button onClick={() => handleSort("lowest")}>Lowest</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b-0 border-gray-300 pb-2 pt-6 text-xs font-medium text-gray-500 md:border-b">
            <div className="hidden md:block">Bill Title</div>

            <div className="flex items-center justify-between">
              <div className="hidden md:block">Due Date</div>
              <div className="hidden md:block">Amount</div>
            </div>
          </div>
          {recurringBills?.map((bill) => (
            <BillsRow key={bill.id} bill={bill} />
          ))}
        </div>
      </section>
    </>
  );
}

export default BillsRecurring;
