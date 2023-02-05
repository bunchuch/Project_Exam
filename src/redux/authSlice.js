import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState:{
        isLogIn: " ",
        token : '',
        usernames : " ",
        role : "",
    },
    reducers : {
        roleBase : (state ,action) => {
            state.role = action.payload.role
        },
        login(state){
            state.isLogIn = true
    
        },
        logout(state) {
            state.isLogIn = false
         }
    },

   
})


export const authAction = authSlice.actions
export default authSlice.reducer