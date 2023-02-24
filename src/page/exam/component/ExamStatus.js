import React, { useEffect, useState, useTransition } from "react";
import { Link, useParams } from "react-router-dom";
import { BiInfoCircle, BiTime,BiX,BiMessageCheck, BiBadge } from "react-icons/bi";
import Icon from "../../../components/Icon";
import Timer from "../../../components/Timer";
import { styleExamStatus } from "../../../style/style";
import Badges from "../../../components/Badges"


function ListBox({title,componet,style}){
  return <div className="">
    <div className="md:block hidden py-1">
   <h1 className="font-medium text-[14px] text-gray-800">{title}</h1>
    </div>
  
  {componet}
  </div>
}

export default function ExamStatus ({data,score,type,selected}){
  const [hidden,setHidden] =
   useState('relative bg-white py-2')
const [fixed, setFixed] = useState(true)
const [changColor,setColor] = useState(false)
const {categories} = useParams()

const hide = ()=>{
  if(!hidden){
    setHidden(true)
  }else{
    setHidden(false)
  }
}

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
    windowWight < 764  ? setIconSize('2rem') 
    : setIconSize('2.5rem')
    windowWight < 764 ? setHidden("relative") : setHidden("text-gray-800 bg-white rounded-[4px] px-3 py-4 font-base text-sm shadow-sm")
  }
}

const changeColor = (key1,key2)=>{
    if(key1 == key2){

    }
}

return <div className={`${fixed ? " z-10 lg:fixed lg:w-[300px] -top-0 " 
: "lg:my-6 my-0 xl:mt-[2rem]  space-y-0 md:space-y-2"} xl:mt-[3.5rem] lg:mt-[3.5rem] ` }>

{
   data ?  (
    <>
    <ListBox  componet={
         <div className="flex rounded-lg md:block md:shadow-sm md:shadow-gray-500/10 bg-white">
       <div className="md:order-first md:w-full bg-orange-400 md:text-slate-900 md:rounded-t-lg
         md:bg-purple-900 order-last  ">
    <div className=" md:py-2  flex items-center md:shadow-purple-500/10 md:shadow-sm rounded-lg ">
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
<div className="w-full  md:order-last order-1 md:py-0 bg-white
 overflow-x-auto md:overflow-hidden rounded-none md:rounded-lg">
<ul className={styleExamStatus["ul-tag"]}>
 {
  //find type of the question and change all state....
   data.map((value,index,length)=><li id={index+1}>
    <div   className={ selected === index+1 && type === categories ? "bg-green-500 md:py-4 py-2"+
    " hover:bg-yellow-100 border-[1px] rounded-sm px-4 flex justify-center text-white"
    : "md:py-4 py-2 px-4 flex justify-center "+
     "bg-gray-50 hover:bg-yellow-100 border-[1px] rounded-sm"}>
   {index+1}
    </div>
   </li>
   )
  
 }

</ul>
</div>
</div>
   }/>

   <ListBox componet={
   <div id="alert-1" className={ hidden ? "m-2 md:m-0 p-4 mb-4 hidden "+
   "text-purple-800 rounded-lg bg-white shadow-cyan-500/10 shadow-sm dark:bg-gray-800 dark:text-blue-400" 
   : "hidden m-2 md:m-0 p-4 mb-4 "+
   "text-purple-800 rounded-lg bg-white shadow-cyan-500/10 shadow-sm dark:bg-gray-800 dark:text-blue-400"} role="alert">
  <div aria-hidden="true" className="flex-shrink-0 w-5 h-5">
    <Icon name={<BiMessageCheck/>} color="purple" Size="1.3rem"></Icon>
  </div>
  <div className="ml-3 text-sm font-medium">
  <p>Score {selected}</p>
  <ul className=" md:static lg:grid flex lg:grid-cols-2 gap-2 ">
    <li className="flex space-x-1 items-center">
    <Badges background={true} text="Listening"></Badges>
    <p>0</p>
    </li>
    <li className="flex space-x-1 items-center">
    <Badges background={true} text="Reading"></Badges>
    {
      categories === "reading" && (<p>{score}</p>)
    }
    </li>
    <li className="flex space-x-1 items-center">
    <Badges background={true} text="Grammar"></Badges>
    {
      categories === "grammar" && (<p>{score}</p>)
    }
    </li>
    <li className="flex space-x-1 items-center">
    <Badges background={true} text="Vocbulary"></Badges>
    <p>0</p>
    </li>
    
   
  </ul>
</div>
  </div>
   }/>

<ListBox componet={
<div id="alert-1" className={ hidden ? "flex m-2 md:m-0 p-4 mb-4 "+
 "text-purple-800 rounded-lg bg-white border-[1px] shadow-cyan-500/10 shadow-sm dark:bg-gray-800 dark:text-blue-400" 
 : "hidden m-2 md:m-0 p-4 mb-4 "+
 "text-purple-800 rounded-lg bg-white shadow-cyan-500/10 shadow-sm dark:bg-gray-800 dark:text-blue-400"} role="alert">
<div aria-hidden="true" className="flex-shrink-0 w-5 h-5">
  <Icon name={<BiInfoCircle/>} color="purple" Size="1.3rem"></Icon>
</div>
<span className="sr-only">Info</span>
<div className="ml-3 text-sm ">
  Please Make your task or Answer are do Correctly don't submit anything before  
  the invigilator calls “TIMEIS OVER.” and Do not disturb others, If you have finished the exam in time and wait.
</div>
  <button type="button"
  onClick={hide}
   className="ml-auto md:hidden -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 
   focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400
    dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
    <span className="sr-only">Close</span>
    <div aria-hidden="true" className="flex-shrink-0 w-5 h-5">
  <Icon name={<BiX/>} color="purple" Size="1.5rem"></Icon>
</div>
</button>
</div>
  

}/>
    </>
  ):(
    <></>
  )
}
      
   

</div>
}

