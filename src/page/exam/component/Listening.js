import GroupInput from "../../../components/GroupInput";
import Audio from "../../../components/Audio";
import Icon from "../../../components/Icon";
import { BiAlarmSnooze, BiBookAlt, BiEditAlt, BiUserVoice } from "react-icons/bi";
import Instruction from "../../../components/Instruction";
import { Question, Listening, Readings } from "../../../data/data"
import FillBlanks from "./FillBlank/FillBlank";
import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";
import { useState } from "react";
import Badges from "../../../components/Badges";
import { questionAction } from "../../../redux/questionSlice";
import Stepper from "../../../components/Stepper";
import { useParams } from "react-router-dom";







const styleListenning = {
   "main": "bg-white border rounded-[4px] tracking-wide",
   "divtag1": "mx-2 px-4 py-4 space-y-6 ",
   "p-tag-style": "font-medium text-[14px]",
   "divtag2": "space-y-2",

}




export default function Lisenting({ question }) {


const {type} = useParams()
const [desc,setdesc] = useState()

const Lis = useSelector((state)=> state.question)
console.log(Lis)
const dispatch = useDispatch()
console.log(dispatch(questionAction.getItem))

   let answer = false;
   let Type = "checkbox"
   const [answerList ,setAnswerList] = useState([])
   const [nextBtn ,setnextBtn] = useState(false)
   const [getType, setType] = useState(Listening["multiple chocice"])
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



const findType = ({types}) => {
 if(types === "reading"){
   return {...Readings}
 }
 if(type === "listening")
 return {...Listening}
}

console.log(type)
console.log(findType(type))

   return <div className="">
      <Instruction
         header={type.toUpperCase()}
      />
      <QuestionCard type={type}  question={Readings["multiple chocice"]} onChange={handleOnchange} />
      <div className="flex flex-row
       space-x-2 md:items-center justify-between md:justify-start mt-[10px]">
         <button onClick={handleOnsubmit} className="bg-purple-900 px-4
          py-2 rounded-[4px] text-[14px] 
         font-medium text-white active:bg-purple-700">Answer</button>
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
}