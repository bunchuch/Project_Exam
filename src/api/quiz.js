import { message } from "antd";
import axiosInstance from ".";

export const createQuiz = async (paylod ,id)=>{
    try {
        const repsonse = await axiosInstance.post(`quiz/create/${id}` ,paylod)
        return repsonse.data
    } catch (error) {
       return error.repsonse
    }
}


export const queryQuiz = async (payload)=>{
     try {
        const response = await axiosInstance.post(`quiz`, payload)
        return response.data
     } catch (error) {
        return error.repsonse.data
     }
}

export const deteleSubject = async (id, exam_id)=>{
    try {
        const response = await axiosInstance.delete(`quiz/delete/${id}/${exam_id}`)
        return response.data
    } catch (error) {
        return error.response
    }
}