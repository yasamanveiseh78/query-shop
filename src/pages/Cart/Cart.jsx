import { Link } from "react-router-dom";
import { clearCart } from "../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

import {
  selectCartItems,
  selectCartTotalQuantity,
  selectCartTotalPrice,
} from "../../features/cart/cartSelector";

import CartItem from "../../components/Cart/CartItem/CartItem";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    Swal.fire({
      title: "Clear cart?",
      text: "Are you sure you want to remove all products from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
      }
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-306 items-center justify-center px-4">
        <div className="w-full max-w-120 rounded-2xl border border-[#e6ddd4] bg-[#fffaf5] p-8 text-center shadow-[0_4px_18px_rgba(75,63,56,0.1)]">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#f5dfe5] text-4xl">
            🛒
          </div>

          <h1 className="mb-3 text-2xl font-bold text-[#234a33]">
            Your Cart is Empty
          </h1>

          <p className="mb-6 text-[#4b3f38]">
            You haven't added any products to your cart yet.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-[10px] bg-[#366648] px-6 py-3 font-medium text-[#fffaf5] transition hover:bg-[#d9486b]"
          >
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-8 sm:px-6">
      <div className="relative mb-6">
        <Link
          to="/products"
          className="mb-6 inline-block rounded-lg bg-[#366648] px-4 py-2 text-sm font-medium text-[#fffaf5] transition hover:bg-[#d9486b] sm:mb-6"
        >
          Back to Products
        </Link>

        <h1 className="mx-auto max-w-200 text-2xl font-bold text-[#234a33] max-sm:mt-1">
          Shopping Cart
        </h1>
      </div>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="mx-auto mt-8 max-w-200 rounded-xl border border-[#e6ddd4] bg-[#fffaf5] p-5 shadow-[0_4px_14px_rgba(75,63,56,0.1)]">
        <div className="flex items-center justify-between border-b border-[#e6ddd4] pb-3">
          <span className="text-[#4b3f38]">Total Items</span>

          <span className="font-bold text-[#234a33]">{totalQuantity}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-medium text-[#4b3f38]">
            Total Price
          </span>

          <span className="text-xl font-bold text-[#c23a5c]">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <button
          type="button"
          onClick={handleClearCart}
          className="mt-5 w-full rounded-[10px] bg-[#c23a5c] px-4 py-2.5 font-medium text-[#fffaf5] transition hover:bg-[#d9486b]"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
