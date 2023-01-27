import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import Icon from "../../../components/Icon";
import Timer from "../../../testfile/Timer";
import { styleExamStatus } from "../../../style/style";
import Badges from "../../../components/Badges";
import { TbTable } from "react-icons/tb";




const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]



function ListBox({title,componet,style}){
  return <div className="">
    <div className="py-2 md:block hidden">
   <h1 className="font-medium text-[12px] text-gray-800">{title}</h1>
    </div>
  
  {componet}
  </div>
}

export default function ExamStatus ({data}){
  const [hidden,setHidden] =
   useState('relative bg-white py-2')
const [iconSize, setIconSize] = useState("2.5rem")
useEffect(()=>{
  window.addEventListener('resize',resizeBy)
 
  return ()=>{
    window.removeEventListener('resize',resizeBy)
 
  }
},[])



const resizeBy = ()=>{
  if(window !== undefined){
    let windowWight = window.innerWidth
    windowWight < 764  ? setIconSize('2rem') : setIconSize('2.5rem')
    windowWight < 764 ? setHidden("relative") : setHidden("text-gray-800 bg-white rounded-[4px] px-3 py-4 font-base text-sm shadow-sm")
  }
}



return <div className="lg:my-10 space-y-3 md:space-x-0 ">
{/* 
   Timer Loading */}
   <ListBox title="Timer" componet={
    <div className=" justify-center py-2 shadow-purple-500/10 shadow-sm items-center rounded-[4px] bg-white flex ">
      <div className="bg-white w-full flex justify-center items-center space-x-2">
      <Icon name={<BiTime/>} Size={iconSize}/>
      <div>
        <h2 className="font-medium text-[14px]">Time Left</h2>
         </div>
      </div>
 <div className="m-0 flex justify-center p-0 w-full">
 <Timer time= {45}></Timer>
  </div>

  </div>
   }/>

{/* Exam status or process */}

<ListBox title="Exam status" componet={
  <ul className={styleExamStatus["ul-tag"]}>
   {
     number.map((value)=><li key={value} className="my-2">
      <div className="md:w-10 py-2 flex justify-center bg-gray-50 border-[1px] rounded-sm">
      <a href="#" className={styleExamStatus["a-tag"]}>{value}</a>
      </div>
   
     </li>
     )
   }
 
 </ul>
}/>



{/* Rule of Exam */}
<ListBox title="Description" componet={
  <article className={hidden}>
        
       <div className="md:hidden block absolute right-0 top-0 px-2 bottom-0  ">
  <button className="bg-gray-300 px-2 rounded-full" onClick={()=>{
    setHidden('hidden')
  }} >X</button>
</div>    
        <p className="px-2 text-gray-800 space-y-1 text-[14px] my-4 ">
           Make sure you are completed all the answer before click on submit button
          
        </p>
 
</article>

}/>


</div>
}

