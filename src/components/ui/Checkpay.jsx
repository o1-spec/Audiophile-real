/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { getCart } from "../pages/Cart/cartSlice";
import { getTotalCartPrice } from "../pages/Cart/cartSlice";

function Checkpay({ handleSubmit }) {
  const product = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  let VAT = 1015;

  return (
    <div className="checkpay-box">
      <h2>Summary</h2>
      <div className="checkout-content">
        {product.map((prod) => (
          <div className="prod-checkout" key={prod.id}>
            <img src={`/public/${prod.imageUrl}`} alt={prod.name} />
            <div className="product-info">
              <p>{prod.accronym}</p>
              <span>${prod.price}</span>
            </div>
            <div className="prod-quantity">&times;{prod.quantity}</div>
          </div>
        ))}
      </div>
      <div className="check-out-info-content">
        <p className="checkout-total">
          <span>Total :</span>
          <span>${totalCartPrice}</span>{" "}
        </p>
        <p className="checkout-total">
          <span>Shipping :</span>
          <span>$0</span>
        </p>
        <p className="checkout-total">
          <span>Vat Included :</span>
          <span>$1015</span>{" "}
        </p>
        <div className="checkout-total grand-tota">
          <span>Grand Total:</span>
          <span>${totalCartPrice + VAT}</span>
        </div>
        <div className="total-btn">
          <button type="submit" onClick={handleSubmit}>
            Continue & Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkpay;
