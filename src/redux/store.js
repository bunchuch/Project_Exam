
import { configureStore} from "@reduxjs/toolkit"
import answerSlice from "./answerSlice"
import { authSlice } from "./authSlice"
import loaderSlice from "./loaderSlice"
import questionSlice, { questionAction } from "./questionSlice"
import userSlice from "./userSlice"

const store = configureStore({
    reducer:{
        user: userSlice,
        loader:loaderSlice,
        answer: answerSlice,
        question:questionSlice,
        auth : authSlice.reducer,
    }
})

export default store

