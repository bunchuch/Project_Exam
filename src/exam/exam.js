
import React, {  useEffect, useState } from "react"
import Container from "../components/Container"
import { useDispatch, useSelector } from "react-redux"
import Welcome from "./component/Welcome"
import { QuizCard } from "./component/QuizCard"
import { getQuestionAsync} from "../redux/apicall"
import { useParams } from "react-router-dom"
import { Loader } from "../components/load/Loader"
import "../style/style.css"



export default function TestFile (){

const dispatch = useDispatch()
const loadding = useSelector((state)=> state.quizs.loadding)
const {name} = useParams()
const quiz = useSelector((state)=> state.quizs)




useEffect(() => {
    try{
        dispatch(getQuestionAsync())
    }catch(e){
        alert("Error")
    }
 
}, [dispatch]);


return <> 
  <Container>
 
    <div className="h-screen">
    {

      loadding ? (<>  
      <div className="exam-section-bg p-0 static h-[10rem] md:h-[15rem] text-white  shadow-md
       font-mono">
        <div className="w-full tracking-wider z-0 2xl:container inset-0 top-9 py-5 px-4 md:px-2
          relative container mx-auto ">
          <div className="
           mt-4">
            <div className="">
            <h1 className="text-[30px] font-sans font-semibold shadow-gray-200 ">Welcom to Question </h1>
            <p className="font-sans leading-8 hidden md:block tracking-wide">Please try to selected the question be <br></br> careful before submit the task.</p>
            </div>
         
          </div>
    
        </div>

      </div>
<div className={examstyle.quiz.main}>
  {
    quiz.pending ? <div><Loader/></div> : 
    <>{ quiz.task.length === 0 && quiz.task === null ? <></>
    :<div className={examstyle.quiz.quizboxgrid}>
      {
      quiz.task.map((value)=><div>
        <QuizCard
        desc={value.type}
        title={value.name}
        progressPercentage={value.progress}
        number={value.question.length}
        link={`/exam/${value.name}`}
        > 
      
        </QuizCard>    
</div>)
    }
    </div> 

    }</>
  }
  </div>
      
      </>) : (<Welcome/>)

    }
  
 </div>
  </Container>
 
</>
}


const examstyle = {
  "quiz" : {
      "main" : "py-5 mx-auto container relative   flex "
      +" items-center justify-between dark:border-gray-700",
      "main2" : " bg-purple-50 sticky top-0 py-2 mx-auto max-w-6xl 2xl:py-5 md:px-0 md:py-2 px-4 flex "
      +" items-center justify-between dark:border-gray-700",
      "quizboxdiv" : "max-w-6xl md:mt-7 mx-auto w-full",
      "quizboxgrid" : "grid w-full gap-2 2xl:gap-4 p-2 xl:p-0 md:grid-cols-3 2xl:grid-cols-3 grid-cols-2 ",
  },
  "task" : {
      "main" : " container mx-auto px-2 md:px-0",
      "examheader" : "py-2 mx-auto max-w-6xl 2xl:py-5 md:px-0 pt-[2rem] flex "
      +" items-center justify-between dark:border-gray-700",
      "taskbox" : "bg-white  text-slate-900 mt-3 -z-10 shadow-sm md:py-6 shadow-gray-500/10 "
      +" border-[1px] border-gray-200 rounded-md tracking-wide lg:mt-3 md:px-6 px-2 py-4 space-y-2 w-full h-[50%]",
      "questiondiv" : "flex space-x-2 mt-5 mx-5",
      "questionText" : "text-md trackgin-wide font-medium md:text-[18px]",
      "btnstylediv"  : "flex flex-row space-x-2 md:items-center justify-between md:justify-end py-2 mt-[10px]",
      "spanbtn" : "relative flex items-center space-x-2",

  }
}