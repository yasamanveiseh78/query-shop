function ProductCard({ product }) {
  const { id, image, title, price } = product;

  return (
    <div
      data-id={id}
      className="flex h-full flex-col rounded-xl border border-[#e6ddd4] bg-[#fffaf5] p-3 shadow-[0_4px_14px_rgba(75,63,56,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(75,63,56,0.15)]"
    >
      <div className="relative mb-3 overflow-hidden rounded-t bg-[#f7f3ed]">
        <img
          src={image}
          alt={title}
          className="h-65 w-full object-contain px-8 py-4"
        />
      </div>

      <h3 className="wrap-break-word line-clamp-2 min-h-12 text-[#234a33]">
        {title}
      </h3>

      <div className="mt-auto flex flex-wrap items-center justify-between pt-4">
        <p className="text-lg font-bold text-[#c23a5c]">
          ${price}
        </p>

        <button
          type="button"
          data-id={id}
          className="rounded-[10px] bg-[#366648] px-4 py-1.5 text-base text-[#fffaf5] transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-[#d9486b] active:bg-[#c23a5c]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;