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
  },
});

export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;
