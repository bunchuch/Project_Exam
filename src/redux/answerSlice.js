import { IoAtCircleOutline } from "react-icons/io5";

const { createSlice } = require("@reduxjs/toolkit");

const answerSlice = createSlice({
    name: "answer",
    initialState:[
     {
        id:null,
        answer : [
            {
                id : null,
                ans : [],
                checked:false,
            }
        ]
     }
    ],
    reducers:{
        addAnswer : (state,action)=>{
           const newItem = {
             id : action.payload.id,
             answer : [
                {
                    id: action.payload.id,
                    ans: action.payload,
                    checked: action.payload,
                }
             ]
           }
           state.push(newItem)
        }
    }
})


export const {addAnswer} = answerSlice.actions
export default answerSlice.reducer;