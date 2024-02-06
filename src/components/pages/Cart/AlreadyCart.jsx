/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";

function AlreadyCart() {
  const notify = () => {
    toast.success("Item Already Present", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        fontSize: '1.5rem',
      },
    });
  };

  return (
    <button className="add-cart" onClick={() => notify()}>
      Add to Cart
    </button>
  );
}

export default AlreadyCart;
