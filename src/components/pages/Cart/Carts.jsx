/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function Carts({ cart }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-content">
      <img src={cart.imageUrl} alt="" />
      <div className="content-price">
        <h6>{cart.name}</h6>
        <span>{cart.totalPrice}</span>
      </div>
      <div className="content-btns">
        <button onClick={() => dispatch(increaseItemQuantity(cart.id))}>
          +
        </button>
        <button>{cart.quantity}</button>
        <button onClick={() => dispatch(decreaseItemQuantity(cart.id))}>
          -
        </button>
      </div>
    </div>
  );
}

export default Carts;
