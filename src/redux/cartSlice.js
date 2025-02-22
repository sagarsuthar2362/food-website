import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddCart: (state, action) => {
      let existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    RemoveCart: (state, action) => {
      console.log("removing", action.payload);
      return state.filter((item) => item.id !== action.payload);
    },
    IncreaseQuantity: (state, action) => {
      let item = state.find((item) => item.id === action.payload);
      if (item) {
        item.count += 1;
      }
    },
    DecreaseQuantity: (state, action) => {
      let item = state.find((item) => item.id === action.payload);
      if (item) {
        item.count -= 1;
      }
    },
  },
});

export const { AddCart, RemoveCart, IncreaseQuantity, DecreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
