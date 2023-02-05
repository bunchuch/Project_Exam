import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersAsync = createAsyncThunk("quiz/getQuestionAsync",
async (state)=> {
    const users = await axios("http://localhost:4000/user/login").then((respones)=> {
        return respones.data 
    })

    if(!users) {
        return  "Not Found"
    }

    return {users}

   
}
)


export const authSlice = createSlice({
    name : "auth",
    initialState:{
        isLogIn: false,
    },
    reducers : {
        login(state){
            state.isLogIn = true
        },
        logout(state) {
            state.isLogIn = false
         }
    },

   
})


export const authAction = authSlice.actions
export default authSlice