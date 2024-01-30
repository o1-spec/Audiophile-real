/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { getCart } from "../Cart/cartSlice";
import { getTotalCartPrice } from "../Cart/cartSlice";
import Footer from "../../ui/Footer";
import { Link } from "react-router-dom";
import Nav from "../../ui/Nav";
import CheckoutBox from "../../ui/CheckoutBox";
import Checkpay from "../../ui/Checkpay";
import { useNavigate } from "react-router-dom";
import CheckSubmit from "../../ui/CheckSubmit";

function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <div className="check-layout">
      <div className="app-layout">
        <div className="main-head">
          <Nav />
        </div>
        <div className="check-back">
          <Link onClick={() => navigate(-1)}>Go Back</Link>
        </div>
        <div className="checkout-section">
          <CheckoutBox />
          <Checkpay />
          <CheckSubmit />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CheckoutPage;
