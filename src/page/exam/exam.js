
import React, {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Welcome from "./component/Welcome"
import { QuizCard } from "./component/QuizCard"
import { getQuestionAsync} from "../../redux/apicall"
import { useParams } from "react-router-dom"
import Aos from "aos"
import 'aos/dist/aos.css'
import {Loader} from "../../components/load/Loader"
import axios from "axios"

export default function TestFile (){

const dispatch = useDispatch()
const loadding = useSelector((state)=> state.quizs.loadding)
const {name} = useParams()
const quiz = useSelector((state)=> state.quizs)
const [data ,setData] = useState([])



const onGetExam = async (e)=>{
  axios.get(`${process.env.REACT_APP_API_KEY}exam`).then(res=>{
    console.log(res.data.exams)
    setData(res.data.exams)
  })
}


useEffect(()=>{
  onGetExam()
  Aos.init({duration:500})
},[])


useEffect(() => {
    try{
        dispatch(getQuestionAsync())
    }catch(e){
        alert("Error")
    }
 
}, [dispatch]);


return <>

  
    <div  className="">
    {
      loadding ? (
        <>
   <div className="container mx-auto  
   relative top-0 md:top-8 2xl:top-[4rem]  py-2 md:py-5 ">
  <div data-aos="fade-in" className="grid md:grid-cols-3 grid-cols-2 lg:gap-4 
  gap-2 md:mx-0 mx-3 md:mt-0 mt-1 ">
    {
      data.map((i , k)=>
       <QuizCard key={k} title={i.title} number={i.question.length} 
      progressPercentage={i.progress}
        link={i.title}
        desc={i.type}></QuizCard>)
    }
  </div>
    </div>     

 
</>

  ): (<Welcome/>)

    } 
 </div>


 
</>
}


