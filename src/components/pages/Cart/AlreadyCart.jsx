function AlreadyCart() {
  function handleAlready() {
    alert("Item already in cart");
  }
  return (
    <button className="add-cart" onClick={handleAlready}>
      Add to Cart
    </button>
  );
}

export default AlreadyCart;
