function BudgetsSummary() {
  return (
    <div className="rounded-lg bg-gray-50 pt-6 px-3 font-semibold">
      <h2 className="font-bold text-xl">Spending Summary</h2>
      <div className="flex items-center justify-between  text-gray-400 py-2 text-sm border-b">
        Bills
        <div>
          <span className="font-semibold text-gray-800 text-lg">250</span> of 750
        </div>
      </div>
      <div className="flex items-center justify-between text-gray-400 py-2 text-sm border-b">
        Dining Out
        <div>
          <span className="font-semibold text-gray-800 text-lg">67</span> of 75
        </div>
      </div>
      <div className="flex items-center justify-between text-gray-400 py-2 text-sm border-b">
        Personal Care
        <div>
          <span className="font-semibold text-gray-800 text-lg">65</span> of 100
        </div>
      </div>
      <div className="flex items-center justify-between text-gray-400 py-2 text-sm ">
        Entertainment
        <div>
          <span className="font-semibold text-gray-800 text-lg">25</span> of 50
        </div>
      </div>
    </div>
  );
}

export default BudgetsSummary;
