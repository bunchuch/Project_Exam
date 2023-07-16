
import React, {  useEffect, useState } from "react"
import Container from "../components/Container"
import Timer from "../components/Timer"
import { useDispatch, useSelector } from "react-redux"
import Welcome from "./component/Welcome"
import { QuizCard } from "./component/QuizCard"
import { examstyle } from "../style/style"
import { getQuestionAsync} from "../redux/apicall"
import { useParams } from "react-router-dom"
import { Loader } from "../components/load/Loader"



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
    <div className=" relative top-[4rem]">
    {

      loadding ? (<>
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