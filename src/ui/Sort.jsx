import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Sort({ field }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSort = searchParams.get(field) || "Latest";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortOptions = [
    "Latest",
    "Oldest",
    "A to Z",
    "Z to A",
    "Highest",
    "Lowest",
  ];

  function handleSortChange(sort) {
    searchParams.set(field, sort);
    setSearchParams(searchParams);
    setIsDropdownOpen(false);
  }
  return (
    <div className="relative mx-auto max-w-md">
      <div className="flex items-center gap-3">
        <p className="hidden text-gray-400 md:block">Sort by</p>
        <button
          className="cursor-pointer items-center justify-between bg-transparent outline-none ring-gray-500 ring-offset-2 md:flex md:gap-4 md:rounded-md md:px-4 md:py-2 md:ring-1"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="hidden md:block">{selectedSort}</span>
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
          <ul className="flex flex-col gap-4 border-b px-4 py-2">
            {sortOptions.map((sort) => (
              <li
                key={sort}
                onClick={() => handleSortChange(sort)}
                className="hover:text-semibold border-b pb-2 transition-all duration-150 last:border-b-0 hover:scale-105"
              >
                {sort}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
