import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../../features/cart/cartSlice";
import Swal from "sweetalert2";
function CartItem({ item }) {
  const { image, title, price } = item;

  const dispatch = useDispatch();
  const handleRemove = () => {
  Swal.fire({
    title: "Remove product?",
    text: "Are you sure you want to remove this product from your cart?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, remove it",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(removeFromCart(item.id));
    }
  });
};

  return (
    <div className="mx-auto  mb-4 flex max-w-200 items-center gap-5 rounded-xl border border-[#e6ddd4] bg-[#fffaf5] p-4 shadow-[0_4px_14px_rgba(75,63,56,0.1)]">
      <div className="flex h-28 w-28 mt-4 shrink-0 items-center justify-center rounded-lg bg-[#f7f3ed] p-3">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <p className="line-clamp-2 text-base font-medium text-[#234a33]">
          {title}
        </p>

        <p className="text-lg font-bold text-[#c23a5c]">
          ${(price * item.quantity).toFixed(2)}
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#366648] text-lg font-bold text-[#fffaf5] transition hover:bg-[#d9486b]"
          >
            +
          </button>

          <span className="min-w-5 text-center font-bold text-[#4b3f38]">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ebe4db] text-lg font-bold text-[#4b3f38] transition hover:bg-[#d7c8bc]"
          >
            −
          </button>
        </div>
      </div>

      <button
        type="button"
       onClick={handleRemove}
        className="self-start rounded-lg px-3 py-2 text-sm font-medium text-[#c23a5c] transition hover:bg-[#f5dfe5]"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
