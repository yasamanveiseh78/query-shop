import SearchInput from "../../Common/SearchInput/SearchInput";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

function Header({ searchText, setSearchText }) {
  const cartItems = useSelector((state) => state.cart.items);

  const cartQuantity = cartItems.length;
  return (
    <header className="sticky top-0 right-0 z-99 mx-auto flex max-w-306 flex-col items-center justify-between bg-[rgba(255,250,245,0.94)] p-4 shadow-[0_3px_12px_rgba(75,63,56,0.12)] sm:flex-row sm:px-20 sm:py-4">
      <a
        href="/"
        className="mb-6 text-[22px] font-bold text-[#234a33] sm:mb-0 sm:text-2xl"
      >
        shop
      </a>

      <div className="flex w-full items-center justify-between sm:justify-end">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />

        <NavLink
          to="/cart"
          id="header-cart-btn"
          className="group relative mr-4 flex h-11.25 w-11.25 rotate-45 cursor-pointer items-center justify-center rounded-[10px] bg-[#fffaf5] text-[20.8px] shadow-[-1px_1px_5px_rgba(75,63,56,0.18)] transition-all duration-300 hover:rotate-0 hover:shadow-[0_0_6px_rgba(75,63,56,0.12)]"
        >
          <span className="-rotate-45 transition-all duration-300 group-hover:rotate-0">
            🛒
          </span>

          <span className="absolute bottom-[-11.2px] left-[-12.8px] flex h-6.75 w-6.75 -rotate-45 items-center justify-center rounded-full bg-[#d9486b] text-[14.4px] font-bold text-[#fffaf5] transition-all duration-300 group-hover:bottom-[28.8px] group-hover:rotate-0">
            {cartQuantity}
          </span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
