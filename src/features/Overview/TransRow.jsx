import { formatCurrency, formatISODate } from "../../utils/helper";

function TransRow({ transaction }) {
  const { avatar, name, amount, date } = transaction;
  return (
    <div className="flex items-center justify-between border-b py-4 last:border-b-0">
      <div className="flex items-center gap-4">
        <img src={avatar} alt="" className="w-8 rounded-full" />
        <p className="font-bold text-sm">{name}</p>
      </div>
      <div>
        <p
          className={`${amount > 0 ? "text-[#277c78]" : ""} text-right pb-1 font-bold`}
        >
          {formatCurrency(amount)}
        </p>
        <p className="text-xs text-gray-500">
          {formatISODate(date, "dd MMM yyy")}
        </p>
      </div>
    </div>
  );
}

export default TransRow;
