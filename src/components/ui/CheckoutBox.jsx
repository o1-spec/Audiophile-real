/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form } from "react-router-dom";

function CheckoutBox() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Example validation: Check if the phoneNumber is a number
    if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number.";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const isValid = validateForm();

    // If the form is valid, proceed with checkout
    if (isValid) {
      // Perform checkout or other actions
      console.log("Form is valid, proceed with checkout");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="checkout-boxunit">
      <div>
        <h2 className="checkout-head">Checkout</h2>
        <div className="checkout-boxes">
          <Form>
            <div className="checkout-box">
              <h6>Billing Details</h6>
              <div className="box-1">
                <div>
                  <label>Name</label>
                  <input type="text" placeholder="Alex Waard" />
                </div>
                <div>
                  <label>Email Address</label>
                  <input type="email" placeholder="alexei@email.com" />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input type="number" placeholder="+234 000 000 00" />
                </div>
              </div>
            </div>
            <div className="checkout-box">
              <h6>Shipping Info</h6>
              <div className="box-2">
                <div>
                  <label>Address</label>
                  <input type="text" placeholder="1137 Williams Avenue" />
                </div>
                <div>
                  <label>Zip Code</label>
                  <input type="number" placeholder="10001" />
                </div>
                <div>
                  <label>City</label>
                  <input type="text" placeholder="New York" />
                </div>
                <div>
                  <label>Country</label>
                  <input type="text" placeholder="United States" />
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
                      <label>
                        <input
                          type="radio"
                          name="payment"
                          defaultValue="e-money"
                        />
                        e-Money
                        <span className="check-mark"></span>
                      </label>
                    </div>
                    <div className="label-delivery">
                      <label>
                        <input type="radio" name="delivery" />
                        Delivery
                        <span
                          className="check-mark"
                          value="Cash on Delievery"
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutBox;
