import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


const userExit = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user:userExit ? userExit : null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:""
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers : {
        reset : (state) => {
            return{
                isLoading : false,
                isSuccess : false,
                isError : false,
                message : ""
            }
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(registerUser.pending , (state) => { state.isLoading = true , state.isSuccess =  false , state.isError = false , state.user = null , state.message= ""})
        .addCase(registerUser.fulfilled , (state , action) => { state.isLoading = false , state.isSuccess = true , state.user = action.payload , state.message="" })
        .addCase(registerUser.rejected , (state , action) => { state.isLoading = false , state.isSuccess = false , state.isError = true , state.message = action.payload , state.user= null })
       
        .addCase(loginUser.pending , (state) => {state.isLoading = true , state.isSuccess = false , state.isError = false , state.user = null , state.message = ""})
        .addCase(loginUser.fulfilled, (state , action) => {state.isLoading = false , state.isSuccess = true , state.user = action.payload , state.isError = false , state.message = ""})
        .addCase(loginUser.rejected , (state , action) => {state.isLoading = false , state.isSuccess = false , state.user = null , state.isError = true , state.message = action.payload})
        
        .addCase(logOutUser.fulfilled , (state) => {state.user = null , state.isSuccess = false})

    }
})
export const {reset} =authSlice.actions
export default authSlice.reducer


export const registerUser = createAsyncThunk("AUTH/REGISTER" , async(formData , thunkAPI) => {
   try{
    return await authService.register(formData)
   }
   catch(error){
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
   }

// authService.register(formData)
})


export const loginUser = createAsyncThunk("AUTH/LOGIN" , async(formData , thunkAPI) => {
    try{
        return await authService.login(formData)
    }
    catch(error){
       const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
    }
})


export const logOutUser = createAsyncThunk("AUTH/LOGOUT" , async() => {
    localStorage.removeItem("user")
})