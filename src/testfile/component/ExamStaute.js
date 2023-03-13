import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import Icon from "../../components/Icon";



export default function ExamStatus ({data,showQuestion,backArrow,title}){
  
  const location = useLocation()
  const isAnswer = (question) =>{
    return question.clude.some(x => x.selected) ? true : false
  }

    return (
        <>
        <div onClick={backArrow} className={ showQuestion ? `md:w-[7.5rem] h-6 cursor-pointer "+
        " hover:underline text-purple-800  px-2 space-x-2 md:h-7 "+
        "items-center rounded flex justify-between active:bg-purple-100` : 'hidden' }>
          <Icon name={<BiArrowBack/>} ></Icon>
          <div className="hidden font-ubuntu font-medium md:block uppercase">{title}</div>
         </div>
  <div className={showQuestion ? "py-4 md:px-2 px-4 overflow-auto" : "w-full hidden"}>
    <ul class="inline-flex space-x-2 md:space-x-4 ">
      {
        showQuestion ?  data.map((item,index)=>
        <li key={index+1} >
      <a key={index+1} href="#" className={` md:py-2 py-1.5 px-2 md:px-3.5 
      rounded ${ isAnswer(item) ? "bg-green-100 border-purple-300 text-purple-900 border"
       :  "bg-purple-100 border-purple-300 text-purple-900 border" }  hover:bg-gray-100
        hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
         dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>{index+1}</a>
    </li>
        
        )  : <></>
      }
     
    </ul>
  </div>
        
        </>
    )
}