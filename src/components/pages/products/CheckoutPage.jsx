/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../ui/Footer";
import { Link } from "react-router-dom";
import Nav from "../../ui/Nav";
import CheckoutBox from "../../ui/CheckoutBox";
import Checkpay from "../../ui/Checkpay";
import { useNavigate } from "react-router-dom";
import CheckSubmit from "../../ui/CheckSubmit";

function CheckoutPage() {
  const location = useLocation();
  const [cartBar, setCartBar] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [checkOpen, setCheckOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleCheckOutChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const toggleCart = () => {
    setCartBar((prevCartBar) => !prevCartBar);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    emoneyNumber: "",
    emoneyPin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmoney = () => {
    const emoneyErrors = {};

    if (!/^\d+$/.test(formData.emoneyNumber)) {
      emoneyErrors.emoneyNumber = "Please enter a valid Number";
    }

    if (!/^\d+$/.test(formData.emoneyPin) || formData.emoneyPin.length !== 4) {
      emoneyErrors.emoneyPin = "Please enter a valid Pin";
    }

    return emoneyErrors;
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !/^\d+$/.test(formData.phoneNumber) ||
      formData.phoneNumber.length !== 11
    ) {
      newErrors.phoneNumber = "Please enter a valid phone number.";
    }

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 4 characters.";
    }

    if (!/^\d+$/.test(formData.zipCode) || formData.zipCode.length !== 5) {
      newErrors.zipCode = "Please enter a valid zip code.";
    }

    if (formData.email.trim().length < 8 || formData.email === "") {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.address.trim().length < 6) {
      newErrors.address = "Please provide more address information";
    }

    if (formData.country.trim().length === 0) {
      newErrors.country = "Please provide a country";
    }

    if (formData.city.trim().length === 0) {
      newErrors.city = "Please provide a City";
    }

    if (selectedPayment === "e-money") {
      const emoneyErrors = validateEmoney();
      Object.assign(newErrors, emoneyErrors);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log("Form validation successfull  ");
      setCheckOpen(true);
    } else {
      console.log("Form validation failed");
    }

  
      window.scrollTo(0, 0);
  
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="check-layout">
      <div className={checkOpen ? "overlay" : null}></div>
      <div className="app-layout">
        <div className="main-head">
          <Nav
            cartBar={cartBar}
            setCartBar={setCartBar}
            toggleCart={toggleCart}
          />
        </div>
        <div className="check-back">
          <Link onClick={() => navigate(-1)}>Go Back</Link>
        </div>
        <div className="checkout-section">
          <CheckoutBox
            handleSubmit={handleSubmit}
            errors={errors}
            formData={formData}
            handleChange={handleChange}
            selectedPayment={selectedPayment}
            handleCheckOutChange={handleCheckOutChange}
            setSelectedPayment={setSelectedPayment}
          />
          <Checkpay handleSubmit={handleSubmit} />
          <CheckSubmit checkOpen={checkOpen} setCheckOpen={setCheckOpen} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CheckoutPage;
