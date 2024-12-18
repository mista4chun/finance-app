import { useGlobalSearchParams } from "../hooks/useGlobalSearchParams";

function Search() {
  const { getParam, setParam } = useGlobalSearchParams();
  const searchValue = getParam("search") || "";

  const handleSearch = (e) => {
    setParam("search", e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
  
  }
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-full truncate rounded-md px-4 py-2 outline-none ring-1 ring-gray-400 ring-offset-2 md:w-40 xl:w-full"
      />
      <button className="absolute right-4" onClick={handleSubmit}>
        <img src="/icon-search.svg" alt="search-button" className="w-4" />
      </button>
    </div>
  );
}

export default Search;
