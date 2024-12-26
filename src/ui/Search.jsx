import { useGlobalSearchParams } from "../hooks/useGlobalSearchParams";

function Search() {
  const { getParam, setParam, searchParams } = useGlobalSearchParams();
  const searchValue = getParam("search") || "";

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={searchValue}
        placeholder="Search..."
        onChange={(e) =>
          setParam({
            ...Object.fromEntries(searchParams),
            search: e.target.value,
          })
        }
        className="w-full truncate rounded-md px-4 py-2 outline-none ring-1 ring-gray-400 ring-offset-2 md:w-40 xl:w-full"
      />
      <button className="absolute right-4" >
        <img src="/icon-search.svg" alt="search-button" className="w-4" />
      </button>
    </div>
  );
}

export default Search;
