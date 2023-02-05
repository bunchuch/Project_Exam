import React, { useEffect, useState, useTransition } from "react";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import Icon from "../../../components/Icon";
import Timer from "../../../components/Timer";
import { styleExamStatus } from "../../../style/style";


const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function ListBox({title,componet,style}){
  return <div className="">
    <div className="md:block hidden py-1">
   <h1 className="font-medium text-[14px] text-gray-800">{title}</h1>
    </div>
  
  {componet}
  </div>
}

export default function ExamStatus ({data}){
  const [hidden,setHidden] =
   useState('relative bg-white py-2')
const [fixed, setFixed] = useState(true)


const [iconSize, setIconSize] = useState("2.5rem")
useEffect(()=>{
  window.addEventListener('resize',resizeBy)
  window.addEventListener('scroll',fixedComponet)
 
  return ()=>{
    window.removeEventListener('resize',resizeBy)
 
  }
},[])

const fixedComponet = () =>{
 if(window.scrollY >= 110 ){
  setFixed(true)
 }else {
  setFixed(false)
 }
}

const resizeBy = ()=>{
  if(window !== undefined){
    let windowWight = window.innerWidth
    windowWight < 764  ? setIconSize('2rem') : setIconSize('2.5rem')
    windowWight < 764 ? setHidden("relative") : setHidden("text-gray-800 bg-white rounded-[4px] px-3 py-4 font-base text-sm shadow-sm")
  }
}



return <div className={ fixed ? "md:top-20 top-[52.5px] z-10 lg:fixed lg:w-[300px] transform transition duration-150 ease-in-out " 
: "lg:my-6 my-0 -top-20 space-y-0 md:space-y-2" }>
{/*  
   Timer Loading */}

      
    <ListBox title="Exam status" componet={
         <div className="flex md:block md:shadow-sm md:shadow-gray-500/10 bg-white">
       <div className="md:order-first md:w-full bg-orange-400 md:text-slate-900 rounded-t-[4px]
         md:bg-purple-500 order-last  ">
    <div className=" md:py-2  flex items-center md:shadow-purple-500/10 md:shadow-sm rounded-t-[4px] ">
      <div className="hidden md:flex w-full justify-center items-center space-x-2">
      <Icon name={<BiTime/>} color="white" Size={iconSize}/>
      <div className="hidden md:block">
        <h2 className="font-medium text-white text-[14px]">Time Left</h2>
         </div>
      </div>
 <div className="mt-1.5 md:mt-0 px-2 flex items-center justify-center  p-0 w-full">
 <Timer initialMinute = {45} nitialSeconds={23}></Timer>
  </div>

  </div>
</div>
<div className="w-full  md:order-last order-1 md:py-0 bg-white overflow-x-auto md:overflow-hidden">
<ul className={styleExamStatus["ul-tag"]}>
 {
   data.map((value,index)=><li key={value} className="">
    <div className="md:py-4 py-2 px-4 flex justify-center bg-gray-50 hover:bg-yellow-100 border-[1px] rounded-sm">
    <a href="#" >{index+1}</a>
    </div>
 
   </li>
   )
 }

</ul>
</div>
</div>
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

