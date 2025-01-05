import { formatCurrency, formatDate, formatISODate } from "../../utils/helper";

function BillsRow({ bill }) {
  const { avatar, name, amount, date, status } = bill;

  return (
    <div className="grid gap-4 border-b py-3 md:grid-cols-2">
      <div className="flex items-center gap-5">
        <img src={avatar} alt="" className="w-8 rounded-full" />
        <p className="text-sm font-semibold">{name}</p>
      </div>

      <div className="flex items-center justify-between">
        <p
          className={`text-xs ${status === "Paid" ? "text-[#277c78]" : ""} flex items-center gap-2 font-medium`}
        >
          {formatDate(formatISODate(date))}

          {status === "Paid" && (
            <svg
              fill="none"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 .5A6.5 6.5 0 1 0 13.5 7 6.507 6.507 0 0 0 7 .5zm2.854 5.354-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L6 8.293l3.146-3.147a.5.5 0 1 1 .708.708z"
                fill="#277c78"
              />
            </svg>
          )}
          {status === "Due Soon" && (
            <svg
              fill="none"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 .5A6.5 6.5 0 1 0 13.5 7 6.507 6.507 0 0 0 7 .5zM6.5 4a.5.5 0 1 1 1 0v3.5a.5.5 0 1 1-1 0zm.5 6.5A.75.75 0 1 1 7 9a.75.75 0 0 1 0 1.5z"
                fill="#c94736"
              />
            </svg>
          )}
        </p>
        <p
          className={`${status === "Due Soon" ? "text-[#c94736]" : ""} text-sm font-bold`}
        >
          {formatCurrency(Math.abs(amount))}
        </p>
      </div>
    </div>
  );
}

export default BillsRow;
