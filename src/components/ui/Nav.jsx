/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import CartContent from "../pages/Cart/CartContent";

function Nav() {
  return (
    <>
      <header>
        <div className="header-content">
          <div className="head-name">
            <div className="nav-img-none">
              <img src="./Images/Group.svg" alt="" />
            </div>
            <h5>audiophile</h5>
          </div>
          <nav className="nav">
            <img
              className="nav-close"
              src="./Images/cancel-close-svgrepo-com.svg"
              alt="nav-close"
            />
            <h5 className="mobile-head">Audiophile</h5>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/Headphones" id="prod-nav" className="nav-link">
              Headphones
            </Link>
            <Link to="/Speakers" id="prod-nav" className="nav-link">
              Speakers
            </Link>
            <Link to="/Earphones" id="prod-nav" className="nav-link">
              Earphones
            </Link>
          </nav>
          <div className="nav-img">
            <img src="../Images/Combined Shape.svg" alt="" />
          </div>
        </div>
        <CartContent/>
      </header>
    </>
  );
}

export default Nav;