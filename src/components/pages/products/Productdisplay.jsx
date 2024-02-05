/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function Products({product}) {
  console.log(product.category)
  return (
    <div className="product-cont">
      <div>
        <img src={`/static/Images/${product.imageUrl}`} alt={product.name} />
      </div>
      <div className="prodd-info">
        <h4 className="prodd-head">{product.name}</h4>
        <p className="prod-text">{product.description}</p>
        <Link className="prodd-btn" to={`/${product.category}/${product.name}`}>
          See Product
        </Link>
      </div>
    </div>
  );
} 

export default Products;
