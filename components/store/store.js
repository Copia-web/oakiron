import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../Slices/cartSlice'
import wishListSlice from '../Slices/wishList'
import userState from '../Slices/userState'
export const store = configureStore({
    reducer:{
        cart:cartSlice,
        wishlist:wishListSlice,
        user:userState
    }
})