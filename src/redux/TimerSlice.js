import { createSlice } from "@reduxjs/toolkit";



export const TimerSlice = createSlice({
    name : "Time",
    initialState:{
        minutes : 0,
        seconds : 0,
    },

    reducers: {
        renderTimer : (state,actions)=>{
          let myInterVal = setTimeout(()=>{
            console.log(state.minutes)
          }, [1000])


          return myInterVal

          
        }
    }
})


export const TimerAction = TimerSlice.actions
export default TimerSlice