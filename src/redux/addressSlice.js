import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api";

export const getAddress = createAsyncThunk(
    'address/getAddress',
    async (payload)=>{
        const response = await axiosInstance.get(`address`)
       if(response.data){
            return response.data.address
       }else{
        return response.data.message
       }
    }
)

const courseLevel = [{label : 'Beginner', value: 'Beginner'},
{label : 'Pre-Intermediate', value: 'Pre-Intermediate'},
{label : 'Intermediate',value:'Intermediate',},{
    label : "Upper-Intermediate",value:"Upper-Intermediate"
}, {
    label : "Advanced",value:"Advanced"
}]

const addressSlice = createSlice({
    name : "address",
    initialState : {
        data : [],
        level : []
    },
    reducers : {
        courseLevel(state){
            state.level = courseLevel
        }
    },

    extraReducers : {
        [getAddress.fulfilled] : (state , action)=>{
            state.data = action.payload
        }
    }
})

export const addressAction = addressSlice.actions
export default addressSlice.reducer