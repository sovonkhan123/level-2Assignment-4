import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ searchTerm, categoryFilter, priceRange, sortOrder }) => {
    const url = new URL(
      "https://campers-shop-backend-dream.vercel.app/api/products"
    );

    if (searchTerm) {
      url.searchParams.append("search", searchTerm);
    }
    if (categoryFilter) {
      url.searchParams.append("category", categoryFilter);
    }
    if (priceRange) {
      url.searchParams.append("minPrice", priceRange[0]);
      url.searchParams.append("maxPrice", priceRange[1]);
    }
    if (sortOrder) {
      url.searchParams.append("sort", sortOrder);
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://campers-shop-backend-dream.vercel.app/api/products/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await fetch(
      `https://campers-shop-backend-dream.vercel.app/api/products/${id}`,
      {
        method: "DELETE",
      }
    );
    return id;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    currentProduct: {},
    status: "idle",
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (product) => product._id !== action.payload
        );
      });
  },
});
export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
