function CategoryButtons({ selectedCategory, setSelectedCategory }) {
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="static flex h-fit w-full flex-col rounded-[10px] bg-[#ebe4db] p-2.5 shadow-[0_0_8px_rgba(75,63,56,0.08)] lg:sticky lg:top-8 lg:w-1/5">
      <h3 className="mb-2 mt-2 border-b border-[#cfc3b8] pb-3 text-xl text-[#234a33]">
        Categories
      </h3>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setSelectedCategory(category)}
          className={`mb-1 w-full rounded-[10px] px-2 py-3 text-left text-base transition ${
            selectedCategory === category
              ? "bg-[#366648] font-bold text-[#fffaf5]"
              : "text-[#4b3f38] hover:bg-[#d7c8bc] hover:text-[#234a33]"
          }`}
        >
          {category === "all"
            ? "All"
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;