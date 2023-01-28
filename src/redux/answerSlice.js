const { createSlice } = require("@reduxjs/toolkit");

const answerSlice = createSlice({
    name: "answer",
    initialState:[
        {
            id: 1, answer:"todo1",checked:false,
        }
    ],
    reducers:{
        addAnswer : (state,action)=>{
            const newAnswer = {
                id:Date.now(),
                answer:action.payload.answer,
                checked: true,
            }

            state.push(newAnswer)
        }
    }
})


export const {addAnswer} = answerSlice.actions
export default answerSlice.reducer;