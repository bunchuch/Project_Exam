import React, { useEffect, useState } from "react";
import Instruction from "../../../components/Instruction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams ,Link} from "react-router-dom";
import { toggleCompleteAsync, getQuestionNameAsync, } from "../../../redux/apicall";
import ExamStatus from "./ExamStaute";
import Container from "../../../components/Container";
import { Loader } from "../../../components/load/Loader";
import QuestionBox from "./QuestionBox";



export const QuestionRender = ({showScore}) => {
  const {name , qv } = useParams()
  const test = useParams()
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const quizId = useSelector((state)=> state.quizs)
  const [currentQuestion ,setCurrentQuestion] = useState(0)
  const [previous, setPrevious] = useState(false);
  const [show,setShow] = useState(false)
  const [load, setLoad] = useState(false);
  const [id , setId] = useState(qv)
  const [checked ,setChecked] = useState(false)


var qid= parseInt(qv)
var page = quizId.page

useEffect(()=>{
  dispatch(getQuestionNameAsync({name}))
}, [dispatch])


const handleAnswerNext = () => {
  const nextQuestion = currentQuestion +1
  if(nextQuestion < quizId.questions.question.length){
    setId(nextQuestion +1)
    setPrevious(true)
    setCurrentQuestion(nextQuestion)
  }else{
    setShow(true)
  }

}

  const handleAnswerOptionClickPrev = () => {
    const nextQuestion = currentQuestion - 1;
    if (nextQuestion < quizId.questions.question.length) {
      setTimeout(()=>{
        setLoad(true)
        setCurrentQuestion(nextQuestion)
        setTimeout(()=>{setLoad(false)},[600])
      },790)
     
    }
    if( nextQuestion < 1){
      setPrevious(false)
    }
   
  }

  const hanndleChecek = (id ,completed) => {
    alert("Hi")
    console.log(id ,completed)
    const quizTest = quizId.questions.question[currentQuestion].clude.find((x)=> x.id === id)
    if(quizTest.id === id){
      var selecteds = JSON.stringify(quizTest.selected)
    }

    
   
  }

  

//   return

return <div className="container mx-auto p-2">
<h1>Hi</h1>
</div>


}


const examstyle = {
  "task" : {
      "main" : " container md:mx-auto md:px-0 2xl:mt-5 relative h-[70%] w-full 2xl:py-3  md:py-5  px-2",
      "examheader" : "py-2 mx-auto container mx-auto 2xl:py-5 md:px-0 pt-[2rem]  flex relative top-[2rem] 2xl:top-[3rem]"
      +" items-center justify-between dark:border-gray-700",
      "taskbox" : "text-slate-900  px-3 reltive ",
      "btnstylediv"  : "flex flex-row space-x-2 md:items-center justify-between md:justify-end py-2 ",
      "spanbtn" : "relative flex items-center space-x-2",

  }
}


const buttonstyle = {
  "nextBtn" : "rounded-xl font-mono text-[18px] relative inline-flex group items-center truncate "+
  " justify-center px-4 w-32 py-2 m-1 cursor-pointer bg-purple-800 text-white active:bg-purple-600 active:shadow-none",
  "prevBtn" : "rounded-xl text-[18px] font-mono relative inline-flex group items-center truncate "+
  " justify-center px-4 w-32 py-2 m-1 cursor-pointer bg-purple-100 text-purple-800 active:bg-purple-50 active:shadow-none",
  "grenBtn" : "rounded relative inline-flex group items-center truncate  "
  +"  justify-center px-4 w-32 py-2 m-1 cursor-pointer bg-purple-100 text-purple-800 active:bg-purple-50 active:shadow-none",
}
