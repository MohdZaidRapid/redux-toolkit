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
        
    },
  },
});

// export const {}
