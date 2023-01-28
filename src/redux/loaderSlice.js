import { createSlice } from "@reduxjs/toolkit";



const loaderSlice = createSlice({
    name: "loader",
    initialState:{
        loading : false,
    },

    reducers:{
        ShowLoading(state){
            state.loading = true
        },
        HideLoading(state){
        state.loading=  true
        }

    }
})


export const loadingAction = loaderSlice.actions
export default loaderSlice.reducer