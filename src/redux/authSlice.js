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
        username: "dara",
        password:"1234",
        loading:false,
        userTaken:null,
        error : null,
        isLoggIn:false,
        users : []
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
    },

    extraReducers: {
        [getUsersAsync.fulfilled]: (state, action)=>{
            state.users = action.users
        }
    }
})


export const authAction = authSlice.actions
export default authSlice