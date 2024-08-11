import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/ProductsSlice';
import cartReducer from './slices/CartSlice';


export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    }
})

