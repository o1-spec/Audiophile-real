/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../pages/Cart/cartSlice";
import { Link } from "react-router-dom";
import { getTotalCartPrice } from "../pages/Cart/cartSlice";

function CheckSubmit({ checkOpen }) {
  const dispatch = useDispatch();
  const CheckCart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  let VAT = 1015;
  return (
    <div className={checkOpen ? "checksubmit" : "closeCheckSubmit"}>
      <div>
        <p className="check-tick">
          <span>&#x2713;</span>
        </p>
        <div className="check-submitdiv">
          <h4 className="check-thank">
            Thank You <br /> For Your Order
          </h4>
          <p className="check-email">
            You will receive an email confirmation reply
          </p>
          <div className="submit-content">
            <div className="checked-item">
              <div className="check-content">
                <div className="check-content-info">
                  <img src={`./${CheckCart[0]?.imageUrl}`} alt={CheckCart[0]?.name} />
                  <div className="checked-info">
                    <span>{CheckCart[0]?.accronym}</span>
                    <span>{CheckCart[0]?.price}</span>
                  </div>
                </div>
                <span>&times;{CheckCart[0]?.quantity}</span>
              </div>
              <p>
                and {CheckCart?.length - 1} other{" "}
                {CheckCart?.length - 1 > 1 ? "items" : "item"}
              </p>
            </div>
            <div className="grand-total">
              <span>Grand Total</span>
              <span>${totalCartPrice + VAT}</span>
            </div>
          </div>
          <button className="back-checkout">
            <Link to="/" onClick={() => dispatch(clearCart())}>
              Back To Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckSubmit;
