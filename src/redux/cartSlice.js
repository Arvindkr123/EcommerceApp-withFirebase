import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log("State from cart Slice ", state);
      state.push(action.payload);
    },
    removeToCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
