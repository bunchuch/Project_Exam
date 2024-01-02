const {default : axiosInstance} = require('.')



export const regiseterUser = async (payload) =>{
    try {
        const respone = await axiosInstance.post('user/register', payload)
        return respone.data
    } catch (error) {
        return error.response.data
    }
}


export const login = async (payload)=>{
    try {
        const respone = await axiosInstance.post('user/login', payload)
        return respone.data
    } catch (error) {
            return error.response
    }
}

export const resetPassword = async (payload , id)=>{
    try {
        const response = await axiosInstance.patch(`user/reset-password/${id}`, payload)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const userGet = async () => {
    try {
        const respone = await axiosInstance.get('user')
        return respone.data
    } catch (error) {
        return error.response.data
    }
}

export const getUserByName = async (payload)=>{
    try {
        const response = await axiosInstance.post(`user/username`, payload)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const userInfo = async (id) =>{
    try {
        const respone = await axiosInstance.get(`user/${id}`)
        return respone.data
    } catch (error) {
        return error.response.data
    }
}

export const updateUser = async (paylaod ,id)=>{
    try {
        const respone = await axiosInstance.patch(`user/update/${id}`, paylaod)
        return respone.data
    } catch (error) {
        return error.response.data
    }
}

export const deleteUser = async (id) =>{
    try {
        const respone = await axiosInstance.delete(`user/${id}`)
        return respone.data
    } catch (error) {
        return error.response.data
    }
}

