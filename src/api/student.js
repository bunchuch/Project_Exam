import axiosInstance from ".";



export const getStudent = async (id) =>{
    try {
        const response = await axiosInstance.get(`student/get/${id}`)
        return response.data
    } catch (error) {
            return error.response
    }
}

export const createStudent = async (payload)=>{
    try {
        const response = await axiosInstance.post(`student/create`, payload)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const updateStudent = async (id ,payload) => {
    try {
        const response = await axiosInstance.patch(`student/update/${id}`, payload)
        return response.data
    } catch (error) {
       return error.response
    }
}

export const resetPasswordStudent = async (id, paylaod)=>{
    try {
        const response = await axiosInstance.patch(`student/reset-password/${id}`, paylaod)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const removeStuent = async (paylaod)=>{
    try {
        const response = await axiosInstance.post(`student/delete`, paylaod)
        return response.data
    } catch (error) {
        return error.response.data
    }
}