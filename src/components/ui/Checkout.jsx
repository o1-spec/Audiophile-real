import { Link } from "react-router-dom";

function Checkout() {
  return (
    <button className="checkout-btn"> 
      <Link to="/product/checkout">Checkout</Link>
    </button>
  );
}

export default Checkout;
