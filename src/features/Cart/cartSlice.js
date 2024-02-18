import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        foodData:[],
        cartItem:[]
    },
    reducers:{
     
        resets:(state) => {
         return{
            
            cartItem:[]
         }
        },
        // Add to cart

        add:(state , action) => {
            return{
                ...state,
                cartItem:[action.payload , ...state.cartItem]
            }
        },

        // Increase quantity

        increase:(state , action) => {
            return{
                ...state,
                cartItem:state.cartItem.map((item) => item.id === action.payload.id ? {...item , qty: item.qty + 1} : item)
            }
        },

        // Decrease quantity

        decrease:(state , action) => {
            return{
                ...state, 
                cartItem:state.cartItem.map((item) => item.id === action.payload.id ? {...item , qty: item.qty - 1} :item).filter((item) => item.qty !== 0)
            }
        },

        // Remove  item

        remove:(state , action) => {
            return{
                ...state,
                cartItem:state.cartItem.filter((item) => item.id !== action.payload)
            }
        }

    }
})

export const {add , increase , decrease , remove , resets } = cartSlice.actions
export default cartSlice.reducer
