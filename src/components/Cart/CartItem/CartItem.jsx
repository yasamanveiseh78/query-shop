import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/cart/cartSlice";
function CartItem({ item }) {
  const { image, title, price } = item;
  const dispatch = useDispatch();

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>${price}</p>
      <button type="button" onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
