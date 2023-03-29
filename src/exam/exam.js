
import React, {  useState } from "react"
import {BiLeftArrowAlt,  BiRightArrowAlt } from "react-icons/bi"
import Container from "../components/Container"
import Icon from "../components/Icon"
import Timer from "../components/Timer"
import { useDispatch, useSelector } from "react-redux"
import { questionAction } from "../redux/questionSlice"
import ExamStatus from "./component/ExamStaute"
import Welcome from "./component/Welcome"
import Header from "./component/Header"
import { useParams } from "react-router-dom"
import Writing from "../components/Writing"
import FillBlanks from "../components/FillBlank"
import { QuizCard } from "./component/QuizCard"
import { Mqc } from "./component/Mqc"
import {quiz} from "../data/quiz"
import { buttonstyle } from "../style/style"
import { ShowScore } from "./component/ShowSocre"
import { examstyle } from "../style/style"
import Instruction from "../components/Instruction"

export default function TestFile (){
const {categories} = useParams()
const [showQuestion,setShowQuestion] = useState(false)
const [currentQuestion, setCurrentQuestion] = useState(0);
const questions = useSelector((state)=> state.question.item)
const dispatch = useDispatch()
const loadding = useSelector((state)=> state.question.loadding)
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(false);
const [previous, setPrevious] = useState(false);
const [ramdonAnswer,setRadomAnswer] = useState(0)
const [getType ,setType] = useState(null)
const [questionType ,setQuestionType] = useState(null)



const handleAnswerOptionClick = (isCorrect) => {
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setPrevious(true)
    setCurrentQuestion(nextQuestion);
  }
  //return  a next question
  
}


const handleAnswerOptionClickPrev = (isCorrect) => {
  const nextQuestion = currentQuestion - 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
    
  }
  if( nextQuestion < 1){
    setPrevious(false)
  }
 
}


const handleAnswer=(question , i)=>{
  let quiz = JSON.parse(JSON.stringify(questions))
  let quizCopy = [...quiz]
 let q = quizCopy.find(x => x.qid === question.qid)
 if(q.qid === 1){

console.log( q.clude.forEach(el => {
  el.selected = false
}))
 }
 
console.log(q.clude.find( x => x.id === i.id ).selected = true)
}


  return(
    <Container style={showQuestion}  >
      <div>
      {
  loadding ? (
    <div> 
      {/* header of exam */}
<div className={examstyle.quiz.main}>
  {showQuestion ? <>
  <ExamStatus currentQuestion={questions[currentQuestion]}
  title={categories} backArrow={()=> setTimeout(()=>{
    setCurrentQuestion(0)
    setShowQuestion(false)
},[200])} showQuestion={showQuestion} data={questions}/>
  </> : null}

  <div className={ showQuestion ? "flex md:gap-2" : " gap-1 flex md:gap-2 justify-end w-full"}>
        <Timer initialMinute = {45} nitialSeconds={23}></Timer>    
  </div>
</div>
 {/* header of exam */}
      {
   showQuestion ? (<>
   <div className={examstyle.task.main}>
   <Instruction headers={questionType}></Instruction>
    <Header categorie={questionType}  item={questions[currentQuestion].file}/>
   
    <div className={examstyle.task.taskbox}>
      {
        showScore ? (<ShowScore event={()=> {setShowQuestion(false)}}/>):(
          <>
           { categories === "Writing" && (<>
        <Writing/>
        </>) } 
        {categories !== "Writing" && (<>
          <div className="flex space-x-2 mt-5 mx-5" >
             <h1 className ="text-md trackgin-wide 
             font-medium md:text-[18px]">{currentQuestion + 1}.</h1>
               <div className="text-gray-800
              font-medium md:text-[18px] ">{getType === "MQC" 
              ? questions[currentQuestion].question : null}</div>
              </div>
             {
              getType === "Blank" && (<FillBlanks
               sentence={questions[currentQuestion].question}/>)
             }
             {
              getType === "MQC" && (<>
               <div className="space-y-4">
              <Mqc qustion={questions[currentQuestion].clude}/>
                </div>
              </>)
             }
        </>)} 

          </>
        ) 
      }
    </div>{
    categories !== "Writing" ? (
   <div className={examstyle.task.btnstylediv}>
             {   previous ? (  <a onClick={()=>{ handleAnswerOptionClickPrev()}}
              className={buttonstyle.prevBtn}>
                <span className={examstyle.task.spanbtn}>
                <Icon Size="1.2rem" name={<BiLeftArrowAlt/>} />
                  <p>Previous</p>
                </span>
                </a>):(<></>)
              }
              <a onClick={()=>{ handleAnswerOptionClick() }}   
              href="#_" className={buttonstyle.nextBtn}>
            <span className={examstyle.task.spanbtn}>
              <p>Next</p>
             <Icon Size="1.2rem" name={<BiRightArrowAlt/>} />
             </span>
              </a>
        </div>):(null)
    }
   </div>
   </>):(
   <div className={examstyle.quiz.quizboxdiv}>
     <div id="main" className={examstyle.quiz.quizboxgrid}>

{
quiz.map((value)=><QuizCard
progressPercentage={value.progress}
number={value.question.length}
link={value.name}
title={value.name}
desc={value.type}
event={()=> {
  setShowQuestion(true)
  setQuestionType(value.name)
  setType(value.type)
  dispatch(questionAction.getQuestions(value.question))           
}}

>
</QuizCard>)
}
</div>
    
    </div>
  )
      }
    </div>
    
  ):(
<Welcome/>
  )
    }
   </div>
    </Container>
  )
}