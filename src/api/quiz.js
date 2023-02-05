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


export const deteleSubject = async (id, exam_id)=>{
    try {
        const respone = await axiosInstance.delete(`quiz/delete/${id}/${exam_id}`)
        return respone.data
    } catch (error) {
        return error.respone
    }
}