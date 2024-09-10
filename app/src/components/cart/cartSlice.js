import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  UpdateToCart,
  addToCart,
  clearCart,
  deletCartItem,
  fetchCartItemsById,
} from "./cartAPI";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchCartItemsByIdAsync = createAsyncThunk(
  "cart/fetchCartItemsById",
  async () => {
    const response = await fetchCartItemsById();
    return response.data;
  }
);

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item);
    return response.data;
  }
);

export const updateToCartAsync = createAsyncThunk(
  "cart/updateToCart",
  async (updateItem) => {
    const response = await UpdateToCart(updateItem);
    return response.data;
  }
);

export const deletCartItemAsync = createAsyncThunk(
  "cart/deleteCartItem",
  async (itemid) => {
    const response = await deletCartItem(itemid);
    return response.data;
  }
);

export const clearCartAsync = createAsyncThunk(
  "cart/clearCart",
  async (userId) => {
    const response = await clearCart(userId);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(fetchCartItemsByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItemsByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(updateToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const itemIndx = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[itemIndx] = action.payload;
      })
      .addCase(deletCartItemAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletCartItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const itemIndx = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(itemIndx, 1);
      })
      .addCase(clearCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(clearCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = [];
      });
  },
});

export const selectCartItems = (state) => state.cart.items;
export const selectCartStatus = (state) => state.cart.status;
export default cartSlice.reducer;
