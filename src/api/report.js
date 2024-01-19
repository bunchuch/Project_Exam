import axiosInstance from ".";


export const getGroupReport = async (payload)=>{
       try {
            const response = await axiosInstance.post(`report`, payload)
            return response.data
       } catch (error) {
            return error.response
       }
}

export const GetReportByStudent = async (payload)=>{
    try {
        const response = await axiosInstance.axiosInstance()
    } catch (error) {
        
    }
}

export const updateStudentScore = async (payload)=>{
    try {
        const response = await
         axiosInstance.post(`report/update`, payload)
        return response.data
    } catch (error) {
       return error.response   
    }
}

export const getReportByExamId = async (examId)=>{
    try {
        const response = await axiosInstance.get(`report/${examId}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const deleteReport = async (id) => {
    try {
        const response = await axiosInstance.delete(`report/delete/${id}`)
        return response.data

    } catch (error) {
        return error.response
    }
}