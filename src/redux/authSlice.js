import { createSlice } from "@reduxjs/toolkit";




export const authSlice = createSlice({
    name : "auth",
    initialState:{
        username: "dara",
        password:"1234",
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