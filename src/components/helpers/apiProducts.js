//const API_FAKE_URL = "http://localhost:8000/products";
//import data from '../../../data/info.json'


export async function getProducts() {
 // console.log(data)
  
  const res = await fetch('/info.json');

  if (!res.ok) throw new Error("Failed getting menu");
  const data  = await res.json();
  console.log(data)
  return data;

}

 /*
    increaseItemQuantity(state, action) {
      const { payload: itemId } = action;
      const updatedCart = state.cart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            }
          : item
      );
      return { ...state, cart: updatedCart };
    },

    decreaseItemQuantity(state, action) {
      const { payload: itemId } = action;
      const updatedCart = state.cart.map((item) =>
        item.id === itemId && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.price,
            }
          : item
      );
      return {
        ...state,
        cart: updatedCart.filter((item) => item.quantity > 0),
      };
    },*/
