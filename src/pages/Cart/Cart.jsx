import { useSelector } from "react-redux";
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

  if (cartItems.length === 0) {
    return <p>Cart is empty</p>;
  }

  return (
    <div className="px-4 pt-8 sm:px-6">
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
      </div>
    </div>
  );
}
export default Cart;
