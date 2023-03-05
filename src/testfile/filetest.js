
import React, { Children, useEffect, useState } from "react"
import {  BiFile, BiLayer } from "react-icons/bi"
import {FaRegQuestionCircle} from "react-icons/fa"
import Container from "../components/Container"
import Icon from "../components/Icon"
import Timer from "../components/Timer"
import GroupInput from "../components/GroupInput"
import { useDispatch, useSelector } from "react-redux"
import { questionAction } from "../redux/questionSlice"
import { Grammar, Listening, Readings } from "../data/data"
import Modal from "../components/Modal"
import ExamStatus from "./component/ExamStaute"
import Welcome from "./component/Welcome"
import Header from "./component/Header"
import { Link } from "react-router-dom"




function Card ({title,desc,icons,children,background,event,number}){
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
       space-y-3 md:space-y-0 flex-col justify-between mt-3 text-gray-700 dark:text-gray-200">
        <div className="flex items-center">
        <div className="w-6 h-6">
          <Icon color="purple"  name={<BiFile/>} ></Icon>
         </div>
          <h1 class="px-2 font-medium text-[14px]">{desc}</h1>
        </div>

        <Link to={"#"}>
      <a  onClick={event}
        href="#_" className="px-4 text-blue-800 hover:underline bg-blue-50 rounded-[20px] before:text-blue-400
         after:text-blue-400 active:undeline active:after:text-red-400 py-1.5 text-center  font-medium  hover:bg-blue-100
          hover:text-blue-600
         text-sm">
Start 
</a>
</Link>
     </div>

      <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
         
      </div>
  </div>
  <div className ={`w-full h-[4px] ${ title === 'Reading' &&  `bg-purple-600`}
   ${ title === 'Writing' &&  `bg-red-500 `}
   ${ title === 'Grammar' &&  `bg-green-500`}
   ${ title === 'Vocabulary' &&  `bg-yellow-400`}
   ${ title === 'Listening' &&  `bg-blue-600`}
  
  `}></div>
</div>
}


function Welcom ({children}){
  return<>
  <h1>
    Welcome to exam
  </h1>
  <div>
  {children}
  </div>
 
  </> 
}



export default function TestFile (){
const [showExam,setCategorire] = useState(false)
const [showQuestion,setShowQuestion] = useState(false)
const [currentQuestion, setCurrentQuestion] = useState(0);
const questions = useSelector((state)=> state.question.item)
const dispatch = useDispatch()
const loadding = useSelector((state)=> state.question.loadding)
console.log(questions)
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
  const [previous, setPrevious] = useState(false);



const handleAnswerOptionClick = (isCorrect) => {
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setPrevious(true)
    setCurrentQuestion(nextQuestion);
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


  return(
    <Container>
      <div>
      {
  loadding ? (
    <div> 
      {/* header of exam */}
<div class="mx-auto max-w-6xl 2xl:py-5 md:px-0 md:py-3 px-4 flex
 items-center justify-between dark:border-gray-700">
<ExamStatus backArrow={()=>setShowQuestion(false)} showQuestion={showQuestion} data={questions}/>
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
   showQuestion ? (<>
   <div className="max-w-6xl mx-auto md:p-0 p-5">
    <Header item={questions[currentQuestion].audio}/>
    {/* question */}
    <div className="bg-white
    mt-3
     -z-10 shadow-sm md:py-6
      shadow-gray-500/10 border-[1px]
       border-gray-200 rounded
        tracking-wide lg:mt-3 
    md:px-6 px-2 py-4 space-y-2">
  <div className="flex space-x-2 mt-5 mx-5" >
             <h1 className ="text-md trackgin-wide font-medium md:text-[18px]">{currentQuestion + 1}.</h1>
             <div className="text-gray-800 font-medium md:text-[18px]">{questions[currentQuestion].question}</div>
            </div>
            {
              // multiple choice
                <div className="mt-5 py-3 space-y-4 px-6">
                {
                    questions[currentQuestion].clude.map((i)=><>
                  <GroupInput type="checkbox" Text={i.choice}/>
                    
                    </>)
                }
                </div>
                // multiple choice



            }
           
           
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
             justify-center px-4 w-32 py-2 m-1 cursor-pointer border-b-4 border-l-2
              active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr
               from-purple-600 to-purple-500 border-purple-700 text-white">
          <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full 
            group-hover:w-32 md:group-hover:h-32 opacity-10"></span>
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
             justify-center px-4 w-32 py-2 m-1 cursor-pointer border-b-4 border-l-2
              active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr
               from-purple-600 to-purple-500 border-purple-700 text-white">
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full 
group-hover:w-32 md:group-hover:h-32 opacity-10"></span>
<span class="relative">Next</span>
          </a>
     {/* next button        */}  
    </div>
   </div>
   
   </>):(
   
   <div className="max-w-6xl md:mt-7 mx-auto">
     <div id="main" className="grid w-full gap-2 p-2 md:p-0
 md:grid-cols-3 grid-cols-2">
<Card number={questions.length} 
      desc="Mulitiple Choice"
event={()=>{
  setShowQuestion(true)
  dispatch(questionAction.getQuestions(Listening["multiple chocice"]))  
}
  } title="Listening" ></Card>
<Card event={()=>{
  setShowQuestion(true)
  dispatch(questionAction.getQuestions(Readings["multiple chocice"]))
}}   desc="Mulitiple Choice" title="Reading"></Card>
<Card event={()=>{
  setShowQuestion(true)
  dispatch(questionAction.getQuestions(Grammar["multiple chocice"]))
}}    desc="Mulitiple Choice" title="Grammar"></Card>
<Card   desc="Fill in Blank" title="Vocabulary"></Card>
<Card     desc="Mulitiple Choice" title="Writing"></Card>
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