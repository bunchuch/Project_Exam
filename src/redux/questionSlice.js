import { createSlice } from "@reduxjs/toolkit";
import { Grammar, Listening, Vocabulary, Writing } from "../data/data";
import { Readings } from "../data/data";




const questionSlice = createSlice({
  name: "questions",
  initialState :{
    item : [],
    uploadImage : [],
  },
  reducers : {
   reading : state =>{
     state.item = [
     ...Readings["multiple chocice"]
     ]
   },
   grammar: state =>{
    state.item = [
        ...Grammar["multiple chocice"]
    ]
   },
   listenings : state =>{
    state.item = [
   ...Listening["multiple chocice"]
    
    ]
  },
  vocabulary : state =>{
    state.item = [
      ...Vocabulary["Fill in blank"]
    ]
  },
  writing : state=>{
    state.item = [
     ...Writing["multiple chocice"]
    ]
  }
  },
 
  uploadImage : (state,action)=>{
    state.uploadImage = [action.payload]
  }

})
export const questionAction = questionSlice.actions
export default questionSlice.reducer