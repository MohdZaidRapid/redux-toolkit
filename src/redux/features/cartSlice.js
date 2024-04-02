import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

// cart Slice

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addTocart: (state, action) => {
      state.carts = [...state.carts, action.payload];
    },
  },
});

export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;
