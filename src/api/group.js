import axiosInstance from ".";

export const getGroup = async ()=>{
    try {
        const response = await axiosInstance.get('group')
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const getGroupById = async (paylaod)=>{
    try {
        const response  = await axiosInstance.post(`group`, paylaod)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const createGroup = async (paylaod) =>{
    try {
        const response = await axiosInstance.post('group/create', paylaod)
        return response.data

    } catch (error) {
        return error.response
    }
}

export const updateGroup = async (payload, id)=>{
    try {
        const response = await axiosInstance.patch(`group/update/${id}`, payload)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const deleteGroup = async (id)=>{
    try {
        const response = await axiosInstance.delete(`group/delete/${id}`)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const removeExamGroup = async (payload) =>{
    try {
        const response = await axiosInstance.post(`exam/removeexam`, payload)
        return response.data
    } catch (error) {
        return error.response.data
    }
}