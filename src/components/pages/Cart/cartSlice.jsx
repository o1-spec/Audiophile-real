/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
      updateLocalStorage(state.cart);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      updateLocalStorage(state.cart);
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;
      updateLocalStorage(state.cart);
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      console.log(item);

      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
      updateLocalStorage(state.cart);
    },
    clearCart(state) {
      state.cart = [];
      updateLocalStorage(state.cart);
    },
  },
});

const updateLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
