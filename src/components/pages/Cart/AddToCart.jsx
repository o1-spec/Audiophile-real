/* eslint-disable react/prop-types */
function AddToCart({handleToCart}) {
  return (
    <button className="add-cart" onClick={handleToCart}>
      Add to Cart
    </button>
  ); 
}

export default AddToCart;
