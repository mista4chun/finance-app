function BudgetsSummary() {
  return (
    <div className="flex flex-col rounded-lg bg-gray-50 px-5 pb-5 pt-10 font-semibold md:flex-row md:justify-between lg:flex-col">
      <div className="mx-auto grow px-5 pb-10">
        <img src="/avatars/ethan-clark.jpg" alt="" className="rounded-full" />
      </div>

      <div className="grow">
        <h2 className="text-xl font-bold">Spending Summary</h2>
        <div className="flex items-center justify-between border-b py-2 text-sm text-gray-400">
          <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-md bg-green-600"></span>
          Bills
          </div>
          <div>
            <span className="text-lg font-semibold text-gray-800">250</span> of
            750
          </div>
        </div>
        <div className="flex items-center justify-between border-b py-2 text-sm text-gray-400">
        <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-md bg-green-600"></span>
          Dining Out
          </div>
          <div>
            <span className="text-lg font-semibold text-gray-800">67</span> of
            75
          </div>
        </div>
        <div className="flex items-center justify-between border-b py-2 text-sm text-gray-400">
        <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-md bg-green-600"></span>
          Personal Care
          </div>
          <div>
            <span className="text-lg font-semibold text-gray-800">65</span> of
            100
          </div>
        </div>
        <div className="flex items-center justify-between py-2 text-sm text-gray-400">
        <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-md bg-green-600"></span>
          Entertainment
          </div>
          <div>
            <span className="text-lg font-semibold text-gray-800">25</span> of
            50
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetsSummary;
