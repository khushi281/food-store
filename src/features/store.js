import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "./Cart/cartSlice"
import authReducer from './auth/authSlice'

const store = configureStore({
    reducer:{
     cart:cartReducer,
     auth:authReducer
    }
})

export default store
