import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Icon from "../../components/Icon";

export default function ExamStatus ({data,showQuestion,backArrow}){
    return (
        <>
        <div onClick={backArrow} className={ showQuestion ? `w-6 h-6 active:bg-blue-100` : 'hidden' }>
          <Icon name={<BiArrowBack/>} ></Icon>
         </div>
  <div className={showQuestion ? "py-4 md:px-2 px-4 overflow-auto" : "w-full hidden"}>
    <ul class="inline-flex space-x-2 md:space-x-4 ">
      {
     data.map((value,index)=>
        <li key={index+1}>
      <a href="#" className=" md:py-2 py-1.5 px-2 md:px-3.5 rounded bg-purple-100 text-purple-900
        border border-purple-300 hover:bg-gray-100
        hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
         dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{index+1}</a>
    </li>
        
        )
      }  
    </ul>
  </div>
        
        </>
    )
}