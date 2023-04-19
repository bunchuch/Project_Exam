
import { configureStore} from "@reduxjs/toolkit"
import answerSlice from "./answerSlice"
import { authSlice } from "./authSlice"
import loaderSlice from "./loaderSlice"
import apiReducer from "./apicall"
import {TimerSlice} from "./TimerSlice"

const store = configureStore({
    reducer:{
        loader:loaderSlice,
        answer: answerSlice,
        auth : authSlice.reducer,
        quizs : apiReducer,
        Time : TimerSlice.reducer,
    }
})

export default store

