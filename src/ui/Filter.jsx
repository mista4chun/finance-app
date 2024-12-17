import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ field }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFilter = searchParams.get(field) || "All Transactions";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filters = [
    "All Transactions",
    "Entertainment",
    "Bills",
    "Groceries",
    "Dining Out",
    "Transportation",
    "Personal Care",
    "Education",
    "Lifestyle",
    "Shopping",
    "General",
  ];

  function handleFilterChange(filter) {
    searchParams.set(field, filter); // Update the specific field in searchParams
    setSearchParams(searchParams);
    setIsDropdownOpen(false);
  }
  return (
    <div className="relative mx-auto  max-w-md">
      <div className="flex items-center gap-3">
        <p className="hidden text-gray-400 md:block">Category</p>
        <button
          className="cursor-pointer items-center justify-between md:gap-4 bg-transparent outline-none ring-gray-500 ring-offset-2 md:flex md:rounded-md md:px-4 md:py-2 md:ring-1"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="hidden md:block ">{selectedFilter}</span>
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

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-xl">
          <ul className="flex flex-col gap-4 border-b px-4 py-2">
            {filters.map((filter) => (
              <li
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className="hover:text-semibold border-b pb-2 transition-all duration-150 last:border-b-0 hover:scale-105"
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Filter;
