/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-copy">
          <h4 className="footer-name">audiophile</h4>
          <div className="footer-nav">
            <Link id="prod-nav" to="/">
              Home
            </Link>
            <Link id="prod-nav" to="/Headphones">
              Headphones
            </Link>
            <Link id="prod-nav" to="/Speakers">
              Speakers
            </Link>
            <Link id="prod-nav" to="/Earphones">
              Earphones
            </Link>
          </div>
        </div>
        <div>
          <p className="footer-text">
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="footer-social">
          <div className="footer-socials">
            <Link to="https://www.facebook.com/david.oluwafemi.71465">
              <img src="/static/Images/Path (1).svg" alt="" />
            </Link>
            <Link to="/">
              <img src="/static/Images/Path.svg" alt="" />
            </Link>
            <Link to="https://twitter.com/Oluwafemi166?s=08">
              <img src="/static/Images/Shape.svg" alt="" />
            </Link>
          </div>
          <span className="copyright">Copyright 2024. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}

export default Footer; 
