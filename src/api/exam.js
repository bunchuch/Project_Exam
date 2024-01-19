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


export const requestStarExam = async (payload)=>{
    try {
        const response = await axiosInstance.post(`exam/start`, payload)
        return response.data
    } catch (error) {
        return error.response
    }
}


export const createExam = async (payload ,id)=>{
    try {
        const response = await axiosInstance.post(`exam/create`, payload)
        return response.data
    } catch (error) {
        return error.repsonse
    }
}

export const updateExam = async (id , payload)=>{
    try {
        const response = await axiosInstance.patch(`exam/update/${id}`,payload)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const assignSectionToExam = async (payload) => {
    try {
       const response = await axiosInstance.patch(`exam/assign`,payload)
       return response.data
    } catch (error) {
       return error.response.data
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


// question section
export const createQuestion = async (id ,payload)=>{
    try {
        const response = await axiosInstance.post(`question/create/${id}`,payload)
        return response.data
    } catch (error) {
        return error.response.data
    }
}


export const updateQuestion = async (id ,payload)=>{
    try {
        const response = await axiosInstance.patch(`question/update/${id}`, payload)
        return response.data

    } catch (error) {
        return error.response.data
    }
}

