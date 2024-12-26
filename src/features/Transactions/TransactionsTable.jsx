

import Table from "./Table";

function TransactionsTable() {
  return (
    <section className="pt-8">
      <h1 className="pb-8 text-3xl font-semibold">Transactions</h1>

      <div className="rounded-xl bg-gray-50 px-8 pb-10 pt-3">
        <div className="mb-8 flex items-center justify-between">
        

          <div className="flex items-center gap-8 ">
            {/* <Sort />
            <Filter field="category" /> */}
          </div>
        </div>
        <Table />
      </div>
    </section>
  );
}

export default TransactionsTable;
