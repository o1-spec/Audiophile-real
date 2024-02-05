/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavShop({ isNavbarOpen }) {
  return (
    <div
      className={isNavbarOpen ? "nav-open mobile-section" : "mobile-section"}
    >
      <div className="mobile-items">
        <div className="mobile-box">
          <div className="mobile-nav-img">
            <img src="/static/Images/image-removebg-preview(41).png" alt="" />
            <img className="oval" src="/static/Images/Oval_Copy 4.svg" alt="" />
          </div>
          <h5>Headphones</h5>
          <div className="mobile-nav-link">
            <Link to="/Headphones">Shop</Link>
            <img src="/static/Images/Path_2.png" alt="" />
          </div>
        </div>
        <div className="mobile-box">
          <div className="mobile-nav-img">
            <img src="/static/Images/image-removebg-preview(38).png" alt="" />
            <img className="oval" src="/static/Images/Oval_Copy 4.svg" alt="" />
          </div>
          <h5>Speakers</h5>
          <div className="mobile-nav-link">
            <Link to="/Speakers">Shop</Link>
            <img src="/static/Images/Path_2.png" alt="" />
          </div>
        </div>
        <div className="mobile-box">
          <div className="mobile-nav-img">
            <img src="/static/Images/Group_5.png" alt="" />
            <img className="oval" src="/static/Images/Oval_Copy 4.svg" alt="" />
          </div>
          <h5>Earphones</h5>
          <div className="mobile-nav-link">
            <Link to="/Earphones">Shop</Link>
            <img src="/static/Images/Path_2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavShop;
