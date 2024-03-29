/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../Cart/cartSlice";
import AlreadyCart from "../Cart/AlreadyCart";
import AddToCart from "../Cart/AddToCart";
import { useState, useEffect } from "react";

function ProductDesc({ selectedProduct }) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const [pric, setPric] = useState(selectedProduct.price);

  const dispatch = useDispatch();
  const { id, imageUrl, name, price, quantity, accronym } = selectedProduct;

  const currentQuantity = useSelector(getCurrentQuantityById(id)) || 0;

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  useEffect(() => {
    // Set initial quantity and price based on stored cart
    const storedItem = storedCart.find((item) => item.id === id);
    if (storedItem) {
      setNum(storedItem.quantity);
      setPric(storedItem.totalPrice);
    }
  }, [id, storedCart]);
  //console.log(selectedProduct.inTheBox);

  const isInCart = currentQuantity > 0;

  const handleNum = function (action) {
    if (action === "decrement" && num > 1) {
      setNum(num - 1);
      setPric(selectedProduct.price * (num - 1));
      dispatch(decreaseItemQuantity(id));
    } else if (action === "increment") {
      setNum(num + 1);
      setPric(selectedProduct.price * (num + 1));
      dispatch(increaseItemQuantity(id));
    }
  };

  function handleToCart() {
    const newItem = {
      id,
      imageUrl,
      name,
      accronym,
      quantity: num,
      price,
      totalPrice: price * num,
    };
    dispatch(addItem(newItem));

    const notify = () => {
      toast.success("Item Added to Cart", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          fontSize: "1.5rem",
        },
      });
    };
    notify();
  }
  return (
    <>
      {selectedProduct ? (
        <div className="product-description">
          <div className="back">
            <Link onClick={() => navigate(-1)}>Go Back</Link>
          </div>
          <div className="prod-describe">
            <div className="desc-img">
              <img
                src={`/static/Images/${selectedProduct.imageUrl}`}
                alt={selectedProduct.name}
              />
            </div>
            <div className="desc-text">
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>
              <span>${pric}</span>
              <div className="counter">
                <div>
                  <button
                    className="minus"
                    onClick={() => handleNum("decrement")}
                  >
                    -
                  </button>
                  <span className="count">{num}</span>
                  <button
                    className="plus"
                    onClick={() => handleNum("increment")}
                  >
                    +
                  </button>
                </div>
                {isInCart ? (
                  <AlreadyCart />
                ) : (
                  <AddToCart handleToCart={handleToCart} />
                )}
              </div>
            </div>
          </div>
          <div className="prod-features">
            <div className="features">
              <h3>Features</h3>
              <p>{selectedProduct.features}</p>
            </div>
            <div className="inthebox-content">
              <h3>In the Box</h3>
              <div className="inthebox">
                <div>
                  {selectedProduct.inTheBoxTimes.map((int) => (
                    // eslint-disable-next-line react/jsx-key
                    <p>{int}</p>
                  ))}
                </div>
                <div>
                  {selectedProduct.inTheBox.map((int) => (
                    <p key={int}>{int}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="product-images">
            {selectedProduct.subImages.map((img) => (
              <img
                className="prod-img"
                src={`/static/Images/${img}`}
                alt="Images"
                key={img}
              />
            ))}
          </div>
          <div className="also-like">
            <h3>You may also like</h3>
            <div className="like">
              {selectedProduct.alsoLike.map((also) => (
                <div className="also" key={also.name}>
                  <img src={`/static/Images/${also.alsoImg}`} alt={also.name} />
                  <p>{also.name}</p>
                  <Link to={`/${also.category}/${also.fullname}`}>
                    See Product
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Product not Found</p>
      )}
    </>
  );
}

export default ProductDesc;
