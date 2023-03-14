import {createApi, fetchBaseQuery} from '@reudxjs/toolkit/query/react'

export const examApi = createApi({
    reducerPath : 'productsApi',
    baseQuery : fetchBaseQuery({baseUrl: ""}),
    endpoints: (builder) =>({
        getAllExam:builder.query({
            query:()=> "exam",
        }),
        getExam : builder.query({
            query:(exam)=> `exam/show/${exam}`,
        })
    })
    
})


export const {useGetAllExamQuery,useGetExamQuery} = examApi