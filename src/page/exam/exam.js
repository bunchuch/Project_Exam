
import React, {  useEffect, useState } from "react"
import Container from "../../components/Container"
import { useDispatch, useSelector } from "react-redux"
import Welcome from "./component/Welcome"
import { QuizCard } from "./component/QuizCard"
import { getQuestionAsync} from "../../redux/apicall"
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Timer from "../../components/Timer"
import Aos from "aos"
import 'aos/dist/aos.css'


export default function TestFile (){

const dispatch = useDispatch()
const loadding = useSelector((state)=> state.quizs.loadding)
const {name} = useParams()
const quiz = useSelector((state)=> state.quizs)

useEffect(()=>{
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
   <div className="container mx-auto  relative top-0 md:top-8 2xl:top-[4rem]  py-2 md:py-5 ">
  <div data-aos="zoom-in" className="grid md:grid-cols-3 grid-cols-2 lg:gap-4 gap-2 md:mx-0 mx-3 md:mt-0 mt-1 ">
    <QuizCard title={"Listenning"} desc={"Blank"} number={20} ></QuizCard>
    <QuizCard title={"Writing"} desc={"Blank"} number={1} ></QuizCard>
    <QuizCard title={"Grammer"} link={"Writing"} desc={"Blank"} number={15} ></QuizCard>
    <QuizCard title={"Vocabulary"} desc={"Blank"} number={5} ></QuizCard>
    <QuizCard title={"Reading"} desc={"Blank"} number={5} ></QuizCard>
    <QuizCard title={"General"} desc={"Blank"} number={10} ></QuizCard>
  </div>
    </div>     

 
</>

  ): (<Welcome/>)

    } 
 </div>


 
</>
}


