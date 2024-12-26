// const PAGE_SIZE = 10

function Pagination({ totalPages, page, setPage }) {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className={`group hidden items-center gap-4 rounded-lg border border-[#201f24] px-4 py-2 text-gray-600 transition-all duration-300 hover:bg-[#201f24] hover:text-gray-100 md:flex ${
          page === 1 ? "cursor-not-allowed" : "hover:bg-[#201f24]"
        }`}
      >
        <span>
          <svg
            fill="none"
            height="11"
            width="5"
            className="fill-gray-500 group-hover:fill-gray-100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m5.147 10.854-5-5a.5.5 0 0 1 0-.708l5-5A.5.5 0 0 1 6 .5v10a.5.5 0 0 1-.853.354z" />
          </svg>
        </span>{" "}
        Prev
      </button>

      <div className="flex gap-3 mx-auto">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`rounded-md border  px-3 py-1 text-sm ${
                page === pageNumber
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className={`group hidden items-center gap-4 rounded-lg border border-[#201f24] px-4 py-2 text-gray-600 transition-all duration-300 hover:bg-[#201f24] hover:text-gray-100 md:flex ${
          page === totalPages ? "cursor-not-allowed" : "hover:bg-[#201f24]"
        }`}
      >
        Next{" "}
        <span>
          <svg
            fill="none"
            height="11"
            width="5"
             className="fill-gray-500 group-hover:fill-gray-100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146z"
             
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default Pagination;
