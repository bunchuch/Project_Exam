import { CreateApi , createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import  axiosInstance ,{axiosBaseQuery}  from ".";



export const api = createApi({
    reducerPath : 'api',
    baseQuery : axiosBaseQuery(),
    tagTypes : ['user', 'exam', 'question'],
    endpoints : ()=> ({})
})
