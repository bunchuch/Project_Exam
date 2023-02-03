import Instruction from "../../../components/Instruction";
import { Question, Listening, Readings,Grammar,Vocabulary } from "../../../data/data"
import FillBlanks from "./FillBlank/FillBlank";
import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import ExamStatus from "./ExamStatus";
import SmallFooter from "../../../components/Footer/smallFooter";
import { questionAction } from "../../../redux/questionSlice";
import { BiMessageAltError } from "react-icons/bi";






const styleListenning = {
   "main": "bg-white border rounded-[4px] tracking-wide",
   "divtag1": "mx-2 px-4 py-4 space-y-6 ",
   "p-tag-style": "font-medium text-[14px]",
   "divtag2": "space-y-2",

}

export default function TaskArea({ types, question }) {
   const {type} = useParams()
   const [answerList ,setAnswerList] = useState([])
   const [nextBtn ,setnextBtn] = useState(false)
   const [getType, setType] = useState([])
   const dispatch = useDispatch()
   const ques = useSelector((state)=>state.question.item)
   const handleOnchange = (event)=>{
   event.preventDefault()
   const value = event.currentTarget.value
   const name = event.currentTarget.name;
   setAnswerList(values =>( {...values,[name]:value}))
         }
   const handleOnsubmit = (event)=>{
   event.preventDefault()
   console.log(answerList)
   if( answerList.length === 0){
      setnextBtn(false)
   }else{
      setnextBtn(true)
   }
         }

      const handleClicknext = (event) =>{
   setType(Listening["Fill in Blank"])
      }
    
const handleClickHides = ()=>{
  if(type === "reading"){
  return setType(dispatch(questionAction.reading()))
  }
  if(type === "listening"){
   return setType(dispatch(questionAction.listenings()))
  }
  if(type === "grammar"){
   alert("grammer")
  return dispatch(questionAction.grammar())
  }
  if(type === "vocabulary"){
   return dispatch(questionAction.vocabulary())
  }

  return []
}

return   <div className="bg-gray-50
 min-h-screen box-border 
 font-inter tracking-normal relative">
<div className="bg-white">
   <div className="md:max-w[70rem] mx-auto py-2">
      <HeaderBar onClick={handleClickHides} ></HeaderBar>
   </div>
</div>
<div className=" mx-auto p-2 md:max-w-[70rem] sm:max-w-xl">
            <div className="flex lg:flex-row flex-col">
               <div className="w-full order-last md:order-1">
               <div className=" md:mt-2 rounded-[4px] md:py-2 w-full h-auto space-y-4">
      <Instruction
         header={type.toUpperCase()}
      />
  
      <QuestionCard type={type}   question={ques} onChange={handleOnchange} />


      <div className="flex flex-row
       space-x-2 md:items-center justify-between md:justify-start mt-[10px]">
         <button onClick={handleOnsubmit} className="bg-purple-900 px-4
          py-2 rounded-[4px] text-[14px] 
         font-medium text-white hover:bg-gradient-to-r
          hover:from-purple-700 hover:to-purple-800 transition-all ease-out 
          duration-300">Answer</button>
         {
 
        nextBtn?  (
         <button onClick={handleClicknext}  className="bg-purple-200 px-4
         py-2 rounded-[4px] text-[14px] active:bg-blue-200
        font-medium text-purple-900">Next</button>
        ):(
         <></>
        )

         }
         
         </div>

      </div>
               </div>

               <div className="lg:w-[460px]  sticky lg:order-last md:mx-4 ">
                  <ExamStatus data={ques}></ExamStatus>
              </div>
            </div>
            <SmallFooter></SmallFooter>
         
</div>



{/* header */}


{/* selction Status */}

</div>








}