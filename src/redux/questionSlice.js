import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Grammar, Listening, Vocabulary, writings } from "../data/data";
import { Readings } from "../data/data";

const getQuetstionAsync = createAsyncThunk('exam/getQuestionAsync',
  async () => {
    const response = await axios('')
    if(response.ok){
      const question = await response.json()
      return {question}
    }

  }

)

const ramdonQuestion = (arr)=>{
  return arr[Math.floor(Math.random()* arr.length)]
}

const TaskInitailState = {
  'id':null,
  'title':null,
  'type': null,
  'QtyQuestion':null,
}


const questionSlice = createSlice({
  name: "questions",
  initialState :{
    questionCard : [TaskInitailState],
    loadding : false,
    padding : false,
    item : [],
    selectedState : false,
    selectedQuetion: [
    {
      question_id : null,
      selectedAnswer : {
        id: null,
        selected : false,
      }
    }
    ],

    uploadImage : [],
  },
  reducers : {

    loaddingQuestion : state =>{
      state.loadding = true
    },
    getQuestions: (state, action)=>{
      return {...state, item:action.payload}
    },
    getRamdomQuestion :(state,action)=>{
        return {...state,}
    },
    QuestionAdd:(state,action)=>{
      const newQuestion = {
        
      }


      return {...state,item:state.item.push([action.payload])}
    },
    checkState : (state)=>{
       return state.selectedState = true
    }
   

  },
  extraReducers : {
[getQuetstionAsync.fulfilled] : (state,action)=>{
  return action.payload.question
}
  },

})
export const questionAction = questionSlice.actions
export default questionSlice.reducer