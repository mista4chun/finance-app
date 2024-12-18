import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

// const PAGE_SIZE = 10

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // current Page
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // number of Pages
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between pt-4">
      <button
        className="group flex items-center gap-3 rounded-md border border-gray-500 px-4 py-1.5 outline-none transition-colors duration-300 hover:bg-[#696868] hover:text-gray-50 md:hidden"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        <svg
          height="11"
          className="fill-[#696868] transition-colors duration-300 group-hover:fill-white"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m5.147 10.854-5-5a.5.5 0 0 1 0-.708l5-5A.5.5 0 0 1 6 .5v10a.5.5 0 0 1-.853.354z" />
        </svg>

        <span className="hidden md:block">Prev</span>
      </button>

      <p className="text-sm md:text-base">
        Showing{" "}
        <span className="font-bold"> {(currentPage - 1) * PAGE_SIZE + 1} </span>{" "}
        to
        <span className="font-bold">
          {" "}
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}{" "}
        </span>{" "}
        of
        <span className="font-bold"> {count} </span>
        results
      </p>

      <div className="flex items-center gap-4">

        <button
          className="group hidden items-center gap-3 rounded-md border border-gray-500 px-4 py-1.5 outline-none transition-colors duration-300 hover:bg-[#696868] hover:text-gray-50 md:flex"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <svg
            height="11"
            className="fill-[#696868] transition-colors duration-300 group-hover:fill-white"
            width="6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m5.147 10.854-5-5a.5.5 0 0 1 0-.708l5-5A.5.5 0 0 1 6 .5v10a.5.5 0 0 1-.853.354z" />
          </svg>

          <span>Prev</span>
        </button>

        <button
          className="group flex items-center gap-3 rounded-md border border-gray-500 px-4 py-1.5 outline-none transition-colors duration-300 hover:bg-[#696868] hover:text-gray-50"
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span className="hidden md:block">Next</span>

          <svg
            className="fill-[#696868] transition-colors duration-300 group-hover:fill-white"
            height="11"
            width="6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146z" />
          </svg>
        </button>
        
      </div>

    </div>
  );
}

export default Pagination;
