import Filter from "../../ui/Filter";
import Search from "../../ui/Search";
import Sort from "../../ui/Sort";
import Table from "./Table";

function TransactionsTable() {
  return (
    <section className="pt-8">
      <h1 className="pb-8 text-3xl font-semibold">Transactions</h1>

      <div className="rounded-xl bg-gray-50 px-8 pb-10 pt-8">
        <div className="mb-8 flex items-center justify-between">
          <Search />

          <div className="flex items-center gap-8 ">
            <Sort field="sort" />
            <Filter field="category" />
          </div>
        </div>
        <Table />
      </div>
    </section>
  );
}

export default TransactionsTable;