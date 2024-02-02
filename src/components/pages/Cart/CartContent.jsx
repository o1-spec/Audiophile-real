/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import Carts from "./Carts";
import Checkout from "../../ui/Checkout";

const Popup = ({ onClose }) => (
  <div className="popup">
    <p style={{fontSize: '1.5rem'}} className="">Item removed from the cart!</p>
    
  </div>
);

function CartContent() {
  const [isRemoved, setIsRemoved] = useState(false);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRemoved) {
      const timeout = setTimeout(() => {
        setIsRemoved(false);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [isRemoved]);

  console.log(cart);
  return (
    <div className="cart-box">
      <div className="cart-num">
        <h6>Cart({!cart.length ? 0 : cart.length})</h6>
        <p
          onClick={() => {
            dispatch(clearCart());
            setIsRemoved(true);
          }}
        >
          Remove all
        </p>
        {isRemoved && <Popup onClose={() => setIsRemoved(false)} />}
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
