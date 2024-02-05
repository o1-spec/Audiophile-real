/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function ProductDisplayTwo({ product }) {
  return ( 
    <div className="product-cont"> 
      <div className="prodd-info">
        <h4 className="prodd-head">{product.name}</h4>
        <p className="prod-text">{product.description}</p>
        <Link className="prodd-btn" to={`${product.name}`}>
          See Product 
        </Link>
      </div>
      <div className="pro-img">
        <img src={`/static/Images/${product.imageUrl}`} alt={product.name} />
      </div>
    </div>
  );
}

export default ProductDisplayTwo;
