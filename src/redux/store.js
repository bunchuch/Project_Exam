import { configureStore} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/dist/query"
import answerSlice from "./answerSlice"
import authSlice  from "./authSlice"
import loaderSlice from "./loaderSlice"
import {TimerSlice} from "./TimerSlice"
import { api } from "../api/api"
import showScoreSlice from "./ShowScore"
import courseSlice from "./courseSlice"
import addressSlice from "./addressSlice"

const store = configureStore({
    reducer:{
        loader:loaderSlice,
        answer: answerSlice,
        auth : authSlice,
        show  : showScoreSlice,
        Time : TimerSlice.reducer,
        course : courseSlice,
        address : addressSlice,
        [api.reducerPath] : api.reducer

    },

    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(api.middleware)
    
})

setupListeners(store.dispatch);

export default store

