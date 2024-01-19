import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api";



export const getCourse = createAsyncThunk(
    'course/getCourse',
    async (payload) => {
        const response = await axiosInstance.get(`group`)
        if(response.data){
            return response.data.groups
        }else{
            return response.data.message
        }
    }
)

export const getTeacher = createAsyncThunk(
    'teacher/getTeacher',
    async(payload)=>{
        const response = await axiosInstance.get('user')
        if(response.data){
        const teachername = response.data.data ?
         response.data.data.filter(i => i.role[0] == "teacher")
         .map(i=> i.name) : null
        return teachername
        }else{
            return 0
        }
    }
)




const courseSlice = createSlice({
    name : 'course',
    initialState :{
        options : [],
        teacher : [],
        courseName : [],
        examName : []
    },

    reducers : {
        addCourseOption : (state, action)=>{
            state.courseName = action.payload.course
        },
        addTeacher : (state, action)=>{
            state.teacher = action.payload.teacher
        },
        addExamName : (state, actions)=>{
            state.examName = actions.payload.examName
        }
    },

    extraReducers : {
        [getCourse.fulfilled] : (state,actions)=>{
            state.courseName = actions.payload
        },
        [getTeacher.fulfilled] : (state ,actions)=>{
            state.teacher = actions.payload
        }
    }

})


export const courseAction = courseSlice.actions
export default courseSlice.reducer