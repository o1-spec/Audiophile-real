/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import Carts from "./Carts";
import Checkout from "../../ui/Checkout";

function CartContent() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  console.log(cart);
  return (
    <div className="cart-box">
      <div className="cart-num">
        <h6>Cart({!cart.length ? 0 : cart.length})</h6>
        <p onClick={() => dispatch(clearCart())}>Remove all</p>
      </div>
      {!cart.length ? (
        <p>No Items in cart</p>
      ) : (
        cart.map((cart) => <Carts cart={cart} key={cart.id} />)
      )}
      {!cart.length ? "" : <Checkout />}
      <div className="cart-total">
        <h6>Total</h6>
        <span>${totalCartPrice}</span>
      </div>
    </div>
  );
}

export default CartContent;
