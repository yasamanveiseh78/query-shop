import { useState } from "react";

function CategoryButtons({
  selectedCategory,
  setSelectedCategory,
  setSearchText,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchText("");
    setIsOpen(false);
  };

  return (
    <div className="w-full lg:sticky lg:top-8 lg:w-1/5">
      {/* Mobile */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-[10px] bg-[#ebe4db] px-4 py-3 text-lg font-bold text-[#234a33] shadow-[0_0_8px_rgba(75,63,56,0.08)]"
        >
          <span>Categories</span>

          <span className="text-2xl">
            {isOpen ? "×" : "☰"}
          </span>
        </button>

        {isOpen && (
          <div className="mt-2 flex flex-col rounded-[10px] bg-[#ebe4db] p-2.5 shadow-[0_0_8px_rgba(75,63,56,0.08)]">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
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
        )}
      </div>

      {/* Desktop */}
      <div className="hidden h-fit w-full rounded-[10px] bg-[#ebe4db] p-2.5 shadow-[0_0_8px_rgba(75,63,56,0.08)] lg:flex lg:flex-col">
        <h3 className="mb-2 mt-2 border-b border-[#cfc3b8] pb-3 text-xl text-[#234a33]">
          Categories
        </h3>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryClick(category)}
            className={`mb-1 w-full rounded-[10px] px-2 py-3 text-left text-base transition ${
              selectedCategory === category
                ? "bg-[#366648] cursor-pointer font-bold text-[#fffaf5]"
                : "text-[#4b3f38] cursor-pointer hover:bg-[#d7c8bc] hover:text-[#234a33]"
            }`}
          >
            {category === "all"
              ? "All"
              : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryButtons;