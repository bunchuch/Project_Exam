import React, { useState } from "react";
import { BiBookAlt, BiHappyAlt,BiX, BiEditAlt,BiCheck } from "react-icons/bi";
import { IconContext } from "react-icons/lib";



import GroupInput from "../../../components/GroupInput";
import Icon from "../../../components/Icon";
import Audio from "../../../components/Audio";



const CorrectStatus =({answer})=>{

const [change, setChange] = useState({
   style : "md:border-[1px] space-x-1 rounded-full flex md:py-1.5 px-2 md:bg-green-500 md:text-white",
   text : "Correct",
   icon : <IconContext.Provider value= {{color:"#ffff",Size:"1.2rem"}}><BiCheck/>  </IconContext.Provider>
})
   return <> <div className={change.style}>
         {change.icon}
            <p className="text-[11px] ">{change.text}</p>
            </div>
   
   
   </>
}

const WrongStatus = ()=>{
   const [change, setChange] = useState({
      style : "md:border-[1px] space-x-1 rounded-full flex md:py-1.5 px-2 md:bg-red-500 md:text-white",
      text : "Wrong",
      icon : <IconContext.Provider value= {{color:"#ffff",Size:"1.2rem"}}><BiX/>  </IconContext.Provider>
   })
   return <>
   <div className={change.style}>
         {change.icon}
            <p className="text-[11px] ">{change.text}</p>
            </div>
   </>
}


const handleOnAnswer  = (event)=>{
   let answer = true
  if(answer){
   return <CorrectStatus/>
  }

  return <WrongStatus/>
}

 export default function QuestionBox ({number,question,type}){
   let answer = false; 
   let Type ="radio"


    return <div className=" md:mt-2 rounded-[4px]   md:py-4 w-full h-auto space-y-4">
      <div className="hidden md:flex space-x-1 items-center">
        <Icon Size="1.2rem" name={<BiBookAlt></BiBookAlt>}></Icon>
      <article className=" md:flex items-center space-x-2 tracking-wide ">
       <h1 className="font-semibold leading-none text-sm ">  {"Lisenting"}</h1>
         <p className="text-[10px] md:text-sm text-gray-800">recommand for use headephone or hearphone for best expreicese</p>
      </article>
      </div>
      <Audio audio={"https://www.123listening.com/freeaudio/adjectives1-1.mp3"}/>
     {/* use map function mapping data from api */}
   <div className="bg-white border rounded-[4px] tracking-wide">
      <div className="mx-2  px-4 py-4 space-y-6 ">
         <p className="font-medium text-[14px]">Try to complete Answer blow / {"Lisenting"} 
         / {"Multiple Choice"} / {" 5 point"}</p>
         <div className="space-y-2">
         <h1 className ="text-md trackgin-wide font-medium ">Question {"number"}</h1>
         <p className="text-[14px] text-gray-800">Which Countries will join the EU in january 2007?</p>
      </div>

      <div className="inline-flex flex-col ">
         {
          Type == "checkbox" && (<>
       <GroupInput type="checkbox" Text="Bulgaria" onchange=""/>
       <GroupInput type="checkbox" Text="Poland" oncahnge=""/>
       <GroupInput type="checkbox" Text="Turkey" onchage=""/>
       <GroupInput type="checkbox" Text="Romaia" onchage=""/>
          </>) 
         }
         {
            Type == "radio" && (
               <>
                 <GroupInput type="radio" Text="Bulgaria" onchange=""/>
                <GroupInput type="radio" Text="Poland" oncahnge=""/>
               <GroupInput type="radio" Text="Turkey" onchage=""/>
               <GroupInput type="radio" Text="Romaia" onchage=""/>
               </>
            )
         }
     
      </div>
      <div className="flex flex-col md:flex-row
       justify-between md:items-center mt-[10px]">
      <div className="inline-flex mt-10 md:mt-0 space-x-2 order-last md:-order-last  rounded-md">
       
      {
         answer ? <CorrectStatus/> : <WrongStatus/>
      }
         
       
            <div className="md:border-[1px] space-x-1 md:rounded-full flex md:px-2 md:py-1.5">
            <Icon Size="1.2rem" name ={<BiEditAlt/>}></Icon>
            <p className="text-[12px] text-gray-500 ">Orangize by PUC takmaun</p>
            </div>
         </div>
         <button onClick={handleOnAnswer} className="bg-blue-800 px-4 py-2 rounded-[4px] text-[14px] 
         font-medium text-white">Answer</button>
         </div>
      </div>
      
   </div>
    </div>
 } 