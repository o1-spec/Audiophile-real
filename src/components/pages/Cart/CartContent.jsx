/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import Carts from "./Carts";

function CartContent() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  console.log(cart);
  return (
    <div className="cart-box">
      <div className="cart-num">
        <h6>Cart({!cart.length ? 0 : cart.length})</h6>
        <p onClick={() =>dispatch(clearCart())}>Remove all</p>
      </div>
      {!cart.length ? (
        <p>No Items in cart</p>
      ) : (
        cart.map((cart) => <Carts cart={cart} key={cart.id} />)
      )}
      <div className="cart-total">
        <h6>Total</h6>
        <span>$1300</span>
      </div>
    </div>
  );
}

export default CartContent;
