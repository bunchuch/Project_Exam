import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FaSadCry } from "react-icons/fa";



export const getQuestionAsync = createAsyncThunk("quiz/getQuestionAsync",
async ()=> {
    const quiz = await axios("http://localhost:7000/todos").then((respones)=> {
        return respones.data 
    })

    if(!quiz) {
        return  "Not Found"
    }

    return {quiz}

   
}
)

export const toggleCompleteAsync = createAsyncThunk(
	'todos/completeTodoAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ completed: payload.completed }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

export const getQuestionNameAsync =
 createAsyncThunk("quiz/getQuestionNameAsync",
 async(payload)=> {
    const quizName = await axios.get(`http://localhost:7000/todos/${payload.name}`).then((respone)=>{
        return respone.data
    })
    
if (!quizName){
    console.log("Not Found")
}
    return {quizName}

})

const initialState = {
    loadding : false,
    pending : false,
    task : [],
    questions : null,
}


export const apiCallSlics = createSlice({
    name : "quiz",
    initialState,
    reducers : {

        loadding : (state) =>{
                state.loadding =true
        },

        addTodo: (state, action) => {
			const todo = {
				id: new Date(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		}
    },

    extraReducers: {
 [getQuestionAsync.pending] : (state)=>{
            state.pending = true
        },

[getQuestionAsync.fulfilled] : (state, action) => {
            state.pending = false
            state.task = action.payload.quiz
        },
[getQuestionAsync.rejected] : (state)=>{
    console.log("rejected fetching")
},


[getQuestionNameAsync.pending] : (state)=>{
    state.pending = true
}
,

[getQuestionNameAsync.fulfilled] : (state, action) => {
    state.pending = false
    state.questions = action.payload.quizName
},
[getQuestionNameAsync.rejected] : (state)=>{
    state.pending = true
},

        [toggleCompleteAsync.fulfilled] : (state ,action) => {
            const index = state.findIndex( (i) => i.id ==  action.payload.todo.completed )
            state[index].completed = action.payload.todo.completed

        }
    }
})


export const {addTodo, loadding} = apiCallSlics.actions
export default apiCallSlics.reducer