function CardSpinner() {
  return (
    <div className="flex min-h-60 flex-col rounded-xl border bg-white shadow-sm">
      <div className="flex flex-auto flex-col items-center justify-center p-4 md:p-5">
        <div className="flex justify-center">
          <div
            className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-[#201f24]"
            role="status"
            aria-label="loading"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CardSpinner;
