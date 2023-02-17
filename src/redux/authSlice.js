import { createSlice } from "@reduxjs/toolkit";




export const authSlice = createSlice({
    name : "auth",
    initialState:{
        username: null,
        password:null,
        loading:false,
        userTaken:null,
        error : null,
        isLoggIn:false,
    },
    reducers : {
        login(state,actions){
            state.isLoggIn = true
            state.username = actions.payload;
            state.password = actions.payload
        },
        logout(state) {
            state.isLoggIn =false
         }
    }
})


export const authAction = authSlice.actions
export default authSlice