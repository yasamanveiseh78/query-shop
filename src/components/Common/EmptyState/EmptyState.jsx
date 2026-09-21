function EmptyState() {
  return (
    <div className="col-span-full flex min-h-60 items-center justify-center">
      <div className="w-full max-w-100 rounded-2xl border border-[#e6ddd4] bg-[#fffaf5] p-8 text-center shadow-[0_4px_14px_rgba(75,63,56,0.1)]">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f5dfe5] text-3xl">
          🛍️
        </div>

        <h3 className="mb-2 text-xl font-bold text-[#234a33]">
          Product Doesn't Exist!
        </h3>

        <p className="text-sm text-[#4b3f38]">
          Try searching for another product or choose a different category.
        </p>
      </div>
    </div>
  );
}

export default EmptyState;