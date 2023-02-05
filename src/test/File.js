import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionAsync, getQuestionNameAsync } from "../redux/apicall";
import { Link, Outlet, json, useParams } from "react-router-dom";
import {Loader} from  "../components/load/Loader"
import { Render } from "./Render";
import { QuizCard } from "../page/exam/component/QuizCard";
import Container  from "../components/Container";
import Timer from "../components/Timer";
import { TimerAction } from "../redux/TimerSlice";
import { Pagination } from "antd";
import { FaSadCry } from "react-icons/fa";




export const File = () =>{
     
  const dispatch = useDispatch()
  const disableTimer = useSelector((state)=> state.Time.disable)
  const[posts, setPosts] = useState([])
  const[total, setTotal] = useState('')
  const[page ,setPage] = useState(0)
  const [postPerpage ,setPostperPage] = useState(1) 


  const disable = dispatch(TimerAction.disable({minutes :0}))
      
console.log(disable)
console.log(disableTimer)


  useEffect(()=>{
    const loader = async ()=>{
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
     setPosts(res.data)
     setTotal(res.data.length - 1)
    }

    loader()
  }, [])


  const indexOfLastPage = page + postPerpage
  const indexOfFirstPage = indexOfLastPage - postPerpage
  const currentPost = posts.slice(indexOfFirstPage , indexOfLastPage)

  const handleChange =  (value) =>{
   <a href="/file/2"></a>
  }

  const onShowSizeChange = (current , size)=>{

  }



    return <>
    <Timer initialMinute={2} initialSeconds={0}></Timer> 
     <button 
     disabled={disableTimer} 
     className={`${disableTimer ? "bg-blue-900" : "bg-red-400"} px-3
      hover:bg-slate-600 active:bg-purple-600 py-4 text-xl 
       m-11 rounded-lg text-white`}>click</button>

<Loader></Loader>

<div className="container mx-auto">
  <div className="flex justify-center">
  <Pagination
        onChange={handleChange}
        pageSize={1}
        total={total}
        showSizeChanger= {false}
        current={page}
       ></Pagination>
  </div>

 
  <Outlet/>
  
       {/* {currentPost.map((value)=> <p className="bg-purple-50 p-4 rounded-md border">{value.title}</p>
       
       
       
       )} */}
  
</div>
       
    </>


}

