/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const HomeDisplayJson = [
  {
    short: "ZX9",
    name: "SPEAKER",
    category: "Speakers",
  },
  {
    short: "ZX7",
    name: "SPEAKER",
    category: "Speakers",
  },
  {
    short: "YX1",
    name: "WIRELESS EARPHONE",
    category: "Earphones",
  },
];

function HomeDisplay() {
  const [HomeDisplayContent] = HomeDisplayJson;
  //console.log(HomeDisplayContent);
  return (
    <div className="section-product">
      <div className="product-box">
        <div className="prod">
          <div className="product-img">
            <img src="./Images/image-removebg-preview(38) (1).png" alt="" />
          </div>
          <div className="product-text">
            <h5 className="prod-head">
              ZX9 <span> SPEAKER </span>
            </h5>
            <p className="prod-info">
              Upgrade to premium speakers that are phenomenally built to
              deliever trully remarkable sound
            </p>
            <div className="product-link">
              <Link
                to={`/${HomeDisplayJson[0].category}/${HomeDisplayJson[0].short} ${HomeDisplayJson[0].name}`}
                className="prod-link"
              >
                {/*<Link
                to="/"
                className="prod-link"
            >*/}
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="product-box">
        <div className="prod-2">
          <div className="prod-2-text">
            <span>ZX7 SPEAKER</span>
            <Link
              to={`/${HomeDisplayJson[1].category}/${HomeDisplayJson[1].short} ${HomeDisplayJson[1].name}`}
              className="prod-link"
            >
              {/*<Link to="/" className="prod-link">*/}
              See Product
            </Link>
          </div>
          <div className="prod-2-img">
            <img
              className="desktop-prod"
              src="./Images/Bitmap (1).png"
              alt=""
            />
            <img className="mobile-prod" src="./Images/Bitmap (9).png" alt="" />
          </div>
        </div>
      </div>
      <div className="product-box">
        <div className="prod-3">
          <div className="prod-3-1">
            <img src="./Images/Bitmap (2).png" alt="" />
          </div>
          <div className="prod-3-text">
            <span>YX1 EARPHONES</span>
            <Link
              to="/EarPhones/YX1 WIRELESS EARPHONES"
              className="pro-link"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDisplay;
