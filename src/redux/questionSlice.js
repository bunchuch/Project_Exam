import { createSlice } from "@reduxjs/toolkit";
import { Listening } from "../data/data";
import { Readings } from "../data/data";

const Listenings = {
    multiple_chocice : [
        {
            "id":"01",
            "type":"checkbox",
            "audio": "https://www.123listening.com/freeaudio/adjectives1-1.mp3",
            "categories": "multiple Chocice",
            "question":["what is the capital of Uruguay"],
            "clude":[
                {"id":"01", "choice":"Montery" },
                {"id":"02", "choice":"New Uruguay" },
                {"id":"03", "choice":"Motevideo" },
                {"id":"04", "choice":"Panama City" }
            ]
        
        },
    ]
}

const questionSlice = createSlice({
  name: "question",
  initialState:{
    question : {}
  },
  reducers : {
   getItem : (state,action)=>{
   state.question.action.payload = {...Listenings}
   },
   getReading (state,action){
    return {
        ...state,
    }
   }
  }
})
export const questionAction = questionSlice.actions
export default questionSlice.reducer