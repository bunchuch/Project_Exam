import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import Icon from "../../../components/Icon";
import Timer from "../../../testfile/Timer";
import ExamStatusContext from "./ExStatusContext";
import { styleExamStatus } from "../../../style/style";




const number = [1,2,3,4,5,6,7,9]



function ListBox({title,componet,style}){
  return <div className={style}>
 <h1 className={styleExamStatus["header-title"]}>{title}</h1>
  {componet}
  </div>
}

export default function ExamStatus ({data}){
const list = useContext(ExamStatusContext)
  console.log(list)
  const [hidden,setHidden] =
   useState('border-[1px] border-blue-500 text-gray-800 border-dashed mt-4 bg-blue-100  rounded-[4px] px-3 py-4 font-base text-sm relative')


  useEffect(()=>{
    if(window.innerWidth > 700){
      setHidden('block border-[1px] border-blue-500 text-gray-800 border-dashed mt-4 bg-blue-100 rounded-[4px] px-3 py-4 font-base text-sm relative')
    }
  })
return <div className={styleExamStatus.main}>
{/* 
   Timer Loading */}
   <ListBox title="Timer" componet={
    <div className="flex items-center justify-center
    border-dashed border-[1px] bg-white border-gray-400 rounded-[4px]">
  <Timer time= {45}></Timer>
  <Icon name={<BiTime/>} Size="1.5rem"/>
  </div>
   }/>

{/* Exam status or process */}

<ListBox title="Exam status" componet={
  <ul className={styleExamStatus["ul-tag"]}>
   {
     number.map((value)=><li key={value} className="my-2">
       <a href="#" className={styleExamStatus["a-tag"]}>{value}</a>
     </li>
     )
   }
 
 </ul>
}/>



{/* Rule of Exam */}
<ListBox title="Rule of Examination" componet={
  <article className={hidden}>
       
       <div className="md:hidden block absolute right-0 top-0 px-2 bg-blue-300 ">
  <button onClick={()=>{
    setHidden('hidden')
  }} >X</button>
</div>    
        <ol class="px-2  space-y-1 list-decimal list-inside">
            <li>You might feel like you are being really "organized" o</li>
            <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
            <li>Nesting tons of folders in your source code is also not helpful.</li>
        </ol>
 
</article>

}/>


</div>
}

