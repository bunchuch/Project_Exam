import axiosInstance from ".";


export const examGet = async ()=>{
    try {
        const repsonse = await axiosInstance.get('exam')
        return repsonse.data
    } catch (error) {
       return error.repsonse
    }
}

export const examGetById = async (id)=>{
    try {
        const response = await axiosInstance.get(`exam/${id}`)
        return response.data
    } catch (error) {
        return error.repsonse
    }
}

export const createExam = async (payload ,id)=>{
    try {
        const response = await axiosInstance.post(`question/create/${id}`, payload)
        return response.data
    } catch (error) {
        return error.repsonse
    }
}


export const deleteExam = async (id ,course)=>{
    try {
        const response = await axiosInstance.delete(`exam/delete/${id}/${course}`)
        return response.data
    } catch (error) {
        return error.repsonse
    }
}