/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Shop() {
    return(
        <div className="item-section">
        <div className="items">
            <div className="item-box">
                <div className="item-img">
                    <img src="/static/Images/image-removebg-preview(41).png" alt=""/>
                    <img className="oval" src="/static/Images/Oval_Copy 4.svg" alt=""/>
                </div>
                <h5>Headphones</h5>
                <div className="item-link">
                    <Link to="/Headphones">
                        Shop
                    </Link>
                    <img src="/static/Images/Path_2.png" alt=""/>
                </div>
            </div>
            <div className="item-box">
                <div className="item-img">
                    <img src="/static/Images/image-removebg-preview(38).png" alt=""/>
                    <img className="oval" src="/static/Images/Oval_Copy 4.svg" alt=""/>
                </div>
                <h5>Speakers</h5>
                <div className="item-link">
                    <Link to="/Speakers">
                        Shop
                    </Link>
                    <img src="/static/Images/Path_2.png" alt=""/>
                </div>
            </div>
            <div className="item-box">
                <div className="item-img">
                    <img src="/static/Images/Group_5.png" alt=""/>
                    <img className="oval" src="/static/Images/Oval_Copy 4.svg" alt=""/>
                </div>
                <h5>Earphones</h5>
                <div className="item-link">
                    <Link to="/Earphones">
                        Shop
                    </Link>
                    <img src="/static/Images/Path_2.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
} 

export default Shop