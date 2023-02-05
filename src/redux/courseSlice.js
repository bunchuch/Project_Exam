import { createSlice } from "@reduxjs/toolkit";


const courseSlice = createSlice({
    name : 'course',
    initialState :{
        options : [],
        teacher : [],
        courseName : []
    },

    reducers : {
        addCourseOption : (state, action)=>{
            state.courseName = action.payload.course
        },
        addTeacher : (state, action)=>{
            state.teacher = action.payload.teacher
        },



    },

})


export const courseAction = courseSlice.actions
export default courseSlice.reducer