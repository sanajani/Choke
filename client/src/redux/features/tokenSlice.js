import { createSlice } from "@reduxjs/toolkit";

// Example reducer initialization
const initialState = {
    isToken: false,
    // other properties...
  };

export const tokenSlicer = createSlice({
    name:"token",
    initialState,
    reducers:{
        setToken: (state,action) =>{
            state.isToken = action.payload
        },
        clearToken:(state) => {
            state.isToken = false
        }
    }
})

export const {setToken, clearToken} = tokenSlicer.actions
export default tokenSlicer.reducer