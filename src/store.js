/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/pages/Cart/cartSlice';

const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})

export default store