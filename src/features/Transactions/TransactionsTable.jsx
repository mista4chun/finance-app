

import Logout from "../authentication/Logout";
import Table from "./Table";

function TransactionsTable() {
  return (
    
    <section className="pt-8">
      <div className="flex items-center justify-between">

      <h1 className="pb-8 text-3xl font-semibold">Transactions</h1>
      <Logout />
      </div>

      <div className="rounded-xl bg-gray-50 px-8 pb-10 pt-6 ">
     
        <Table />
      </div>
    </section>
  );
}

export default TransactionsTable;
