import React, { useState } from "react";
import { BiBookAlt, BiHappyAlt, BiEditAlt,BiCheck } from "react-icons/bi";
import Checkbox from "../../Checkbox";
import Icon from "../../Icon";

 export default function QuestionBox (){
const handleOnAnswer  = (event)=>{
   alert("Submit succesfully")
}

    return <div className=" md:mt-2 rounded-[4px]   md:py-4 w-full h-auto space-y-4">
      <div className="hidden md:flex space-x-1 items-center">
        <Icon Size="1.2rem" name={<BiBookAlt></BiBookAlt>}></Icon>
      <article className=" md:flex items-center space-x-2 tracking-wide ">
       <h1 className="font-semibold leading-none text-sm ">  {"Lisenting"}</h1>
         <p className="text-[10px] md:text-sm text-gray-800">recommand for use headephone or hearphone for best expreicese</p>
      </article>
      </div>
     {/* use map function mapping data from api */}
   <div className="bg-white border rounded-[4px] tracking-wider">
      <div className="mx-2  px-4 py-4 space-y-6 ">
         <p className="font-medium text-[14px]">Try to complete Answer blow / {"Lisenting"} 
         / {"Multiple Choice"} / {" 5 point"}</p>
         <div className="space-y-2">
         <h1 className ="text-xl trackgin-wide font-medium ">Question {"number"}</h1>
         <p className="text-md text-gray-800">Which Countries will join the EU in january 2007?</p>
      </div>
      <div className="inline-flex flex-col ">
       <Checkbox Text="Bulgaria" onchange=""/>
       <Checkbox Text="Poland" oncahnge=""/>
       <Checkbox Text="Turkey" onchage=""/>
       <Checkbox Text="Romaia" onchage=""/>
      </div>
      <div className="flex flex-col md:flex-row
       justify-between md:items-center mt-[10px]">
      <div className="inline-flex mt-10 md:mt-0 space-x-2 order-last md:-order-last  rounded-md">
         <div className="md:border-[1px] md:rounded-full space-x-1 flex md:py-1.5 md:px-2">
         <Icon Size="1.2rem" name ={<BiHappyAlt/>}></Icon>
            <p className="text-[12px] text-gray-500"></p>
         </div>
         <div className="md:border-[1px] space-x-1 rounded-full flex md:py-1.5 
         px-2 md:bg-green-500 md:text-white">
            <Icon Size="1.2rem" name ={<BiCheck/>}></Icon>
            <p className="text-[12px] ">Correct</p>
            </div>
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