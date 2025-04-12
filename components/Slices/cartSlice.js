import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  notify: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const { item } = action.payload;

      if (Array.isArray(item)) {
        state.items = [...state.items, ...item];
        state.notify += item.length;
      } else if (item) {
        state.items.push(item);
        state.notify += 1;
      }
    },
    removeItem(state, action) {
      const index = action.payload.index;
      if (index !== undefined && index !== null && index >= 0) {
        state.items.splice(index, 1);
      }
    },
    resetCart(state){
      state.items = [];
    }    
  }
});

export const { addCart, removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;
