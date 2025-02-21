import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddCart: (state, action) => {
      state.push(action.payload);
    },
    RemoveCart: (state, action) => {
      console.log("removing",action.payload )
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { AddCart, RemoveCart } = cartSlice.actions;
export default cartSlice.reducer;
