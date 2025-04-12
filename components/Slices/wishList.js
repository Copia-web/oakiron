import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [ ],
  notify: 0
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist(state, action) {
      if (action.payload.item) {
        state.items.push(action.payload.item);
        state.notify += 1;
      }
    },
    removeWhislistItem(state, action) {
        const index = action.payload.index;
        if (index !== undefined && index !== null) {
          state.items.splice(index, 1);
        }
      },
      reset(state){
        state.items = [];
      }    
  }
});

export const { addWishlist,removeWhislistItem ,reset} = wishListSlice.actions;

export default wishListSlice.reducer;
