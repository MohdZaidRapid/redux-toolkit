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
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(ItemIndex);

      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },

    // remove particular items
    removeToCart: (state, action) => {
      const data = state.carts.filter((ele) => ele.id !== action.payload);
      state.carts = data;
    },

    removeSingleItems: (state, action) => {
      const ItemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[ItemIndex_dec].qnty >= 1) {
        state.carts[ItemIndex_dec].qnty -= 1;
      }
    },

    // clearCart
    emptyCartItem: (state, action) => {
      state.carts = [];
    },
  },
});

export const { addTocart, removeToCart, removeSingleItems, emptyCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
