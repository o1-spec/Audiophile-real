import { Link } from "react-router-dom";
import Shop from "../../ui/Shop";
import HomeDisplay from "../../ui/HomeDisplay";

function HomeProducts() {
  return (
    <div>
      <div className="main-head">
        <div className="hero">
          <div className="hero-container">
            <div className="hero-text">
              <span>New Product</span>
              <h5>XX99 MARK II HEADPHONES</h5>
              <p className="hero-info">
                Experience natural lifelike audio and exceptional build quality
                made for the passionate music enthusiast
              </p>
              <div className="hero-btn">
                <Link to="/Headphones/ XX99 Mark IIHeadphones">
                  See Product
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <img className="desktop-hero" src="../src/Images/Bitmap.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Shop />
      <HomeDisplay />
    </div>
  );
}

export default HomeProducts;
