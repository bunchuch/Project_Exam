import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState:{
        isLogIn: " ",
        token : '',
        usernames : " ",
        userRole : "",
    },
    reducers : {
        roleBase : (state ,action) => {
            state.userRole = action.payload.role
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