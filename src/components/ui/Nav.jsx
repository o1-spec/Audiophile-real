/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContent from "../pages/Cart/CartContent";
import { useSelector } from "react-redux";
import { getCart } from "../pages/Cart/cartSlice";

function Nav({ cartBar, toggleCart, toggleNavbar, isNavbarOpen }) {
  const cart = useSelector(getCart);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["header"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <>
      <header className={navbarClasses.join(" ")}>
        <div className="header-content">
          <div className="head-name">
            <div className="nav-img-none" onClick={toggleNavbar}>
              <img src="/static/Images/Group.svg" alt="" />
            </div>
            <h5>audiophile</h5>
          </div>
          <nav className="nav">
            <img
              className="nav-close"
              src="/static/Images/cancel-close-svgrepo-com.svg"
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
          <div className="nav-img" onClick={() => toggleCart()}>
            <img src="/static/Images/Combined Shape.svg" alt="" />
            <span>{cart.length}</span>
          </div>
        </div>
        {cartBar ? <CartContent /> : null}
      </header>
    </>
  );
}

export default Nav;

/* const header = document.querySelector('.headerr')
const nav = document.querySelector('.navv')
const navName = document.querySelector('.nav-name')
const navHeight = nav.getBoundingClientRect().height;
const cartBox = document.querySelector('.cart-box')
console.log(navHeight)

const stickyNav = function(entries){
    const [entry] = entries

    if(!entry.isIntersecting){
        nav.classList.add('sticky')
        nav.classList.add('padd')
        navName.classList.add('sticky')
        cartBox.style.top = '99%'
    }else{
        navName.classList.remove('sticky')
        nav.classList.remove('sticky')
        nav.classList.remove('padd')
        cartBox.style.top = '14%'
    }
}

const observer = new IntersectionObserver(stickyNav,{
    root: null,
    threshold: 0,
    rootMargin: '200px'
})

observer.observe(header)*/
