/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import Carts from "./Carts";
import Checkout from "../../ui/Checkout";

function CartContent() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const notify = () => {
    toast.error("Items Removed from Cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        fontSize: '1.5rem',
      },
    });
  };

  console.log(cart);
  return (
    <div className="cart-box">
      <div className="cart-num">
        <h6>Cart({!cart.length ? 0 : cart.length})</h6>
        <p
          onClick={() => {
            dispatch(clearCart());
            notify();
          }}
        >
          Remove all
        </p>
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
