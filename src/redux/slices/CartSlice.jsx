import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [], // Load from localStorage if available
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find(item => item._id === action.payload._id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increase the quantity if the product already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add the new product with quantity 1
      }
      localStorage.setItem('cart', JSON.stringify(state.items)); // Save to localStorage
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items)); // Save to localStorage
    },
    updateQuantity: (state, action) => {
      const product = state.items.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state.items)); // Save to localStorage
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart'); // Clear from localStorage
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
