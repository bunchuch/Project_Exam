import React, { createContext, useState } from "react";
import { BiBookAlt, BiHappyAlt,BiX, BiEditAlt,BiCheck } from "react-icons/bi";
import { IconContext } from "react-icons/lib";



import GroupInput from "../../../components/GroupInput";
import Icon from "../../../components/Icon";
import Audio from "../../../components/Audio";
import { Outlet, useParams } from "react-router-dom";

const styleQuestionBox = {
  
}

const MyContext = createContext()


function Instruction ({tagname}){

   if(tagname === "listening"){
      return <div className="flex space-x-1 items-center py-4 md:py-0">
      <Icon Size="1.2rem" name={<BiBookAlt></BiBookAlt>}></Icon>
    <article className=" md:flex items-center md:space-x-2 tracking-wide ">
     <h1 className="font-semibold leading-none text-sm ">  {"Lisenting"}</h1>
       <p className="text-[12px] md:text-sm text-gray-800">recommand for use headephone or hearphone for best expreicese</p>
    </article>
    </div>
   }
   
}


 export default function TaskArea(){
   let {listeng}= useParams()

   const [header,setHeader] = useState()

    return <div className=" md:mt-2 rounded-[4px] md:py-4 w-full h-auto space-y-4">
  <Outlet/>
    </div>
 } 


 