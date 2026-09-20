import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSelector";
import CartItem from "../../components/cart/CartItem/CartItem";
function Cart() {
  const cartItems = useSelector(selectCartItems);

  if (cartItems.length === 0) {
    return <p>Cart is empty</p>;
  }

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default Cart