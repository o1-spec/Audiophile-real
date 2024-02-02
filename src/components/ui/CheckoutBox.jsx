/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Emoney from "./Emoney";
import CashOnDelivery from "./CashOnDelivery";

function CheckoutBox({ errors, handleChange, handleSubmit, formData }) {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleCheckOutChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  return (
    <div className="checkout-boxunit">
      <div>
        <h2 className="checkout-head">Checkout</h2>
        <form onSubmit={handleSubmit} className="checkout-boxes">
          <div className="checkout-box">
            <h6>Billing Details</h6>
            <div className="box-1">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Alex Waard"
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                  name="name"
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>
              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="alexei@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                  name="email"
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+234 000 000 00"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange(e)}
                  name="phoneNumber"
                />
                {errors.phoneNumber && (
                  <span className="error-message">{errors.phoneNumber}</span>
                )}
              </div>
            </div>
          </div>
          <div className="checkout-box">
            <h6>Shipping Info</h6>
            <div className="box-2">
              <div>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  value={formData.address}
                  onChange={(e) => handleChange(e)}
                  name="address"
                />
                {errors.address && (
                  <span className="error-message">{errors.address}</span>
                )}
              </div>
              <div>
                <label>Zip Code</label>
                <input
                  type="number"
                  placeholder="10001"
                  value={formData.zipCode}
                  onChange={(e) => handleChange(e)}
                  name="zipCode"
                />
                {errors.zipCode && (
                  <span className="error-message">{errors.zipCode}</span>
                )}
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  placeholder="New York"
                  value={formData.city}
                  onChange={(e) => handleChange(e)}
                  name="city"
                />
                {errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>
              <div>
                <label>Country</label>
                <input
                  type="text"
                  placeholder="United States"
                  value={formData.country}
                  onChange={(e) => handleChange(e)}
                  name="country"
                />
                {errors.country && (
                  <span className="error-message">{errors.country}</span>
                )}
              </div>
            </div>
          </div>
          <div className="checkout-box">
            <h6>Payment Details</h6>
            <div className="box-3">
              <h4>Payment Method</h4>
              <div className="label-head">
                <div className="label-div">
                  <div className="label-emoney">
                    <label htmlFor="paymentCheck">
                      <input
                        id="paymentCheck"
                        type="radio"
                        name="payment"
                        value="e-money"
                        checked={selectedPayment === "e-money"}
                        onChange={handleCheckOutChange}
                      />
                      e-Money
                      <span className="check-mark"></span>
                    </label>
                  </div>
                  <div className="label-delivery">
                    <label htmlFor="deliveryCheck">
                      <input
                        id="deliveryCheck"
                        type="radio"
                        name="delivery"
                        value="Check delivery"
                        checked={selectedPayment === "Check delivery"}
                        onChange={handleCheckOutChange}
                      />
                      Delivery
                      <span className="check-mark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {selectedPayment === "e-money" && (
              <Emoney
              
                handleChange={handleChange}
                formData={formData}
                errors={errors}
              />
            )}
            {selectedPayment === "Check delivery" && <CashOnDelivery />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutBox;
