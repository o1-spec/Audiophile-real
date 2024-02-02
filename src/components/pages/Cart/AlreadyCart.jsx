/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
function AlreadyCart({ setAlready, already }) {
  function handleAlready() {
    setAlready(false);

    const intervalId = setInterval(() => {
      setAlready(true);
      console.log(already);
    }, 2000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 2000);
  }

  return (
    <button className="add-cart" onClick={handleAlready}>
      Add to Cart
    </button>
  );
}

export default AlreadyCart;
