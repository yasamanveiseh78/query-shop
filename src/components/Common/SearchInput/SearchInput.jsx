function SearchInput({ searchText, setSearchText }) {
  return (
    <input
      id="search-input"
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Search products..."
      className="mr-10 w-75 rounded-[20px] border border-[#e2d8ce] bg-[#fffaf5] px-2.5 py-2.5 text-base text-[#4b3f38] outline-none"
    />
  );
}

export default SearchInput;