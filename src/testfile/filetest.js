
import React, { Children, useEffect, useState } from "react"
import {  BiFile, BiLayer } from "react-icons/bi"
import {FaRegQuestionCircle} from "react-icons/fa"
import Container from "../components/Container"
import Icon from "../components/Icon"
import Timer from "../components/Timer"
import GroupInput from "../components/GroupInput"
import { useDispatch, useSelector } from "react-redux"
import { questionAction } from "../redux/questionSlice"
import { Grammar, Listening, Readings, Vocabulary, writings } from "../data/data"
import Modal from "../components/Modal"
import ExamStatus from "./component/ExamStaute"
import Welcome from "./component/Welcome"
import Header from "./component/Header"
import { Link, useParams } from "react-router-dom"
import Loader from "../components/Loader"
import Writing from "../components/Writing"
import FillBlanks from "../components/FillBlank"
import { type } from "@testing-library/user-event/dist/type"


function Card ({title,desc,icons,children,background,event,number,link}){
  return <div class="w-full mx-auto overflow-hidden bg-white rounded shadow-lg dark:bg-gray-800">
  

  <div class="md:px-6 px-4 py-4">
      <h1 class="text-xl font-semibold font-ubuntu text-gray-800 dark:text-white">{title}</h1>

      <div className={"flex items-center mt-4 text-gray-700 dark:text-gray-200"}>
         <div className="w-6 h-6">
          <Icon color="purple" name={<FaRegQuestionCircle/>} ></Icon>
         </div>
          <h1 className="px-2 text-sm font-medium">{number}</h1>
      </div>

      <div class="flex md:flex-row md:items-center
       space-y-3 md:space-y-0 flex-col justify-between mt-3
        text-gray-700 dark:text-gray-200">
        <div className="flex items-center">
        <div className="w-6 h-6">
          <Icon color="purple"  name={<BiFile/>} ></Icon>
         </div>
          <h1 class="px-2 font-medium text-[14px]">{desc}</h1>
        </div>

        <Link to={`/exam/${link}`}>
      <a  onClick={event}
        href="#_" className="px-4 text-purple-800 hover:underline
         bg-purple-50 border-purple-500 shadow-md shadow-gray-100 
         rounded before:text-blue-400
         after:text-blue-400 active:undeline active:after:text-red-400 py-1.5 
         text-center  font-medium  hover:bg-blue-100
          hover:text-blue-600
         text-sm">
Start 
</a>
</Link>
     </div>

      <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
         
      </div>
  </div>
     <div className ={`w-full h-[7px] ${ title === 'Reading' &&  `bg-purple-400`}
   ${ title === 'Writing' &&  `bg-red-400 `}
   ${ title === 'Grammar' &&  `bg-green-400`}
   ${ title === 'Vocabulary' &&  `bg-yellow-200`}
   ${ title === 'Listening' &&  `bg-blue-400`}
  
  `}></div>
</div>
}






export default function TestFile (){
const [showExam,setCategorire] = useState(false)
const [showQuestion,setShowQuestion] = useState(false)
const [currentQuestion, setCurrentQuestion] = useState(0);
const getAllQuestion = useSelector((state)=> state.question.item)
const dispatch = useDispatch()
const loadding = useSelector((state)=> state.question.loadding)
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const [previous, setPrevious] = useState(false);

const {categories} = useParams()


 
  const questions = getAllQuestion.question

const handleAnswerOptionClick = (isCorrect) => {
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setPrevious(true)
    setCurrentQuestion(nextQuestion);
  }else{
    
  }
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

console.log(getAllQuestion.name)

  return(
    <Container>
      <div>
      {
  loadding ? (
    <div> 
      {/* header of exam */}
<div className="mx-auto max-w-6xl 2xl:py-5 md:px-0 md:py-3 px-4 flex
 items-center justify-between dark:border-gray-700">
<ExamStatus title={categories} backArrow={()=> setTimeout(()=>{
    setShowQuestion(false)
},[200])} showQuestion={showQuestion} data={questions}/>
  <div className={ showQuestion ? "flex md:gap-2" : " gap-1 flex md:gap-2 justify-end w-full"}>
        <Timer initialMinute = {45} nitialSeconds={23}></Timer>    
 <Modal
 event={()=>console.log("hello w")}
 text="Submit">
  <div className="text-center leading-none tracking-wider space-y-5">
  <h1 className="text-[34px]">🚀</h1>
  <h1 className="text-[26px] text-slate-900  font-ubuntu font-medium">Are you sure ?</h1>
  <p className="text-slate-800 tracking-wider leading-none">Please
   check all of the answer or task before submit</p>
  </div>
 </Modal>
   
  </div>
</div>
 {/* header of exam */}
      {
   showQuestion ? (<>{showScore ? (<></>):(<></>)}
   <div className="max-w-6xl mx-auto md:p-0 p-5">
    <Header categorie={categories}  item={questions[currentQuestion].file}/>
    {/* question */}
    <div className="bg-white
    mt-3
     -z-10 shadow-sm md:py-6
      shadow-gray-500/10 border-[1px]
       border-gray-200 rounded
        tracking-wide lg:mt-3 
    md:px-6 px-2 py-4 space-y-2 w-full h-[50%]">
        { categories === "writing" && (<>
        <Writing/>
        </>) } 
        {categories !== "writing" && (<>
          <div className="flex space-x-2 mt-5 mx-5" >
             <h1 className ="text-md trackgin-wide 
             font-medium md:text-[18px]">{currentQuestion + 1}.</h1>
               <div className="text-gray-800
              font-medium md:text-[18px] ">{getAllQuestion.type === "MQC" 
              ? questions[currentQuestion].question : null}</div>
              </div>
             {
              getAllQuestion.type == "Blank" && (<FillBlanks
               sentence={questions[currentQuestion].question}/>)
             }
             {
              getAllQuestion.type === "MQC" && (<>
               <div className="mt-5 py-3 space-y-4 px-6">
                {
                    questions[currentQuestion].clude.map((i,indexs)=><>
                   
                        <GroupInput  key={indexs*10 / 2} 
                        checked={i.selected} 
                        value={i.choice} name="quiz" id={i.id} 
                        event={()=> handleAnswer(questions[currentQuestion], i)}
                        type="checkbox" Text={i.choice}/>
                      
                    </>)
                }
                </div>
              </>)
             }
           
            {
              // multiple choice
                // multiple choice



            }
        
        </>)}         
           
    </div>
    {/* //next btn */}
    <div className="flex flex-row space-x-2 
    md:items-center justify-between
     md:justify-end py-2 mt-[10px]">
      {/* previous */}
         {
           previous ? (
          <a onClick={()=>{ handleAnswerOptionClickPrev()}}
            className="rounded relative inline-flex group items-center
             justify-center px-4 w-32 py-2 m-1 cursor-pointer bg-purple-100 text-purple-800
              active:bg-purple-50 active:shadow-none ">
            <span class="relative">Previous</span>
            </a>):(<></>)
          }
   {/* previous */}


        {/* next button        */}
          <a
            onClick={()=>{
                  handleAnswerOptionClick()
            }}
            href="#_" className="rounded relative inline-flex group items-center
             justify-center px-4 w-32 py-2 m-1 cursor-pointer bg-purple-800 text-white
              active:bg-purple-600 active:shadow-none">
<span class="relative">Next</span>
          </a>
     {/* next button        */}  
    </div>
   </div>
   
   </>):(
   
   <div className="max-w-6xl md:mt-7 mx-auto">
     <div id="main" className="grid w-full gap-2 p-2 xl:p-0
 md:grid-cols-3 grid-cols-2">
<Card link="listening" 
      desc="Mulitiple Choice"
event={()=>{
  setShowQuestion(true)
  dispatch(questionAction.getQuestions(Listening))  
}
  } title="Listening" ></Card>
<Card event={()=>{
  setShowQuestion(true)
  dispatch(questionAction.getQuestions(Readings))
}} link="reading"   desc="Mulitiple Choice" title="Reading"></Card>
<Card event={()=>{
  setShowQuestion(true)
  dispatch(questionAction.getQuestions(Grammar))
}}  link="grammer"  desc="Mulitiple Choice" title="Grammar"></Card>

<Card event={()=>{
  setShowQuestion(true)
  dispatch(questionAction.getQuestions(Vocabulary))}} 
  link="vocabulary"
  
  desc="Fill in Blank" title="Vocabulary"></Card>
<Card event={()=>{
  setShowQuestion(true)
  dispatch(questionAction.getQuestions(writings))}} 
link={"writing"}   desc="Mulitiple Choice" title="Writing"></Card>
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