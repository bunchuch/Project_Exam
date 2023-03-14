import React, { useEffect, useState, useTransition } from "react"
import { BiFile, BiHighlight } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, } from "react-router-dom"
import Container from "../../components/Container"
import GroupInput from "../../components/GroupInput"
import Icon from "../../components/Icon"
import { questionAction } from "../../redux/questionSlice"
import ExamStatus from "./component/ExamStatus"
import HeaderBar from "./component/HeaderBar"
import TaskArea from "./component/TaskArea"



function get_random(list) {
   return list[Math.floor((Math.random() * list.length))];
}
const examRoule = [
    "Make sure that you are prepared for the exam",
  "You will not be allowed to leave the exam room during the exam.",
    " An exam is a race against time, try to be quick, but careful",
   "If you have any difficulty with the exam, raise your hand and wait for the invigilator to respond",
   "Only the equipment which is necessary for the exam should be kept on the desk.",
   "Keep silent during exams.",
    " Be careful that you mark multiple choice answers properly. Incorrect entries may lose you marks.",
    "If you have time when you finish the exam, check your answers.",
    "If you have finished the exam in time and wait. Do not disturb others",
    "When the exam ends the invigilator calls “TIMEIS OVER. Submit Your Task or Exam”. Please Submit all your Answer immediately and wait.",
   " Leave the class quietly and do not loiter in front of the class",


]


function Exam({ data }) {
   const [hide, setHide] = useState("-order-1 md:order-last md:mt-12 md:mx-2  md:w-[20rem]")
   const [isState, setState] = useState(false)
   const [ableBtn,setAbleBtn] = useState(false)
   const [open, setOpen] = useState(true)
   const [mm,setMM] = useState("")
   const naviagtor = useNavigate()
   const handleClickHide = () => {
      naviagtor(`/exam/listening`)
      setState(true)
   }
   const onClickChange = (e) => {
      const event = e.target.cheked
   
      console.log(event)
    if(!ableBtn){
      setAbleBtn(true)
    }else{
      setAbleBtn(false)
    
    }
      
 }


   return  <div className="bg-white min-h-screen
    box-border font-inter tracking-normal relative">

   {
      isState ?  (
         <TaskArea 
          />
       
      ):(
         //welcome exam componet
         <section className=" max-w-2xl mx-6 p-4 md:mx-auto bg-white border border-gray-200 dark:bg-gray-800 
         left-0 right-0 top absolute top-10 dark:border-gray-700 rounded-lg">
            <div className="flex py-2 items-center ">
            <Icon name={<BiFile/>} Size="1.5rem" color="purple"/>
            <h2 className="font-semibold mx-2 text-gray-800 dark:text-white">Welcom to examination</h2>
            </div>
            <span>
         <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
         Failure to obey any of the following rules may result in your exam being removed and disciplinary <br></br>
         <button>
            <h1 className="font-semibold text-gray-800 mt-4 md:text-purple-800 underline ">Action taken against you</h1>
            </button>
            <span>
         <ol className="pl-5 grid border-[1px] border-dashed border-gray-400
          md:border-none rounded-lg gap-2 mt-2 overflow-y-auto md:bg-purple-50  md:h-72 h-52 md  list-decimal list-inside">
         {
           <> {examRoule.map((i,index)=><li key={index} className=" rounded-lg px-2 text-purple-900 py-2">{i}</li>)}</>
        
         }
         </ol>
         </span>      
             </p>
             </span>
             <hr className="my-5 hidden border-gray-400 dark:border-gray-700" />
         <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
             <button className="text-[14px] transition-colors font-medium text-blue-800 duration-300
              dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
              <GroupInput event={onClickChange} type="checkbox"
               Text="I comfirm that 
              i have read Policy and 
              term of the examination "></GroupInput>
             </button>
     
     {
      ableBtn ? (
         <button onClick={handleClickHide} className="scale-100
          text-xs bg-purple-800
             font-medium rounded-md hover:bg-gray-700
              text-white text-[12px] md:text-[14px] px-4 py-2.5
               duration-300 transition-colors focus:outline-none">
                Let's Go!
            </button>
      ) : (
         null
      )
     }
         
           
         </div>
     </section>
   
      )
   }
   </Container>
   </>
   
   
   
   
  
}




export default Exam