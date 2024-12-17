import { formatCurrency, formatISODate } from "../../utils/helper";

function TransactionRow({ transaction }) {
  const { avatar, name, category, amount, date } = transaction;

  return (
  
    
   <div className="flex items-center justify-between border-b pb-4 pt-0 last:border-b-0 md:grid md:grid-cols-[1fr_0.8fr_0.8fr_auto] md:gap-8 md:pt-3">
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="w-8 rounded-full" />
        <div className="pt-2">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm text-gray-500 md:hidden">{category}</p>
        </div>
      </div>
      <div className="hidden md:block">
        <p className="text-xs font-medium text-gray-500">{category}</p>
      </div>
      <div>
        <p
          className={`text-right text-sm font-semibold md:hidden ${amount > 0 ? "text-[#277c78]" : ""}`}
        >
          {amount > 0 ? `+${formatCurrency(amount)}` : formatCurrency(amount)}
        </p>
        <p className="text-xs font-medium text-gray-500">
          {formatISODate(date, "dd MMM yyyy")}
        </p>
      </div>
      <div
        className={`hidden text-sm font-semibold md:block ${amount > 0 ? "text-[#277c78]" : ""}`}
      >
        {amount > 0 ? `+${formatCurrency(amount)}` : formatCurrency(amount)}
      </div>
    </div>
  );
}

export default TransactionRow;
