import React, { useState } from "react";
import { BiBookAlt, BiHappyAlt,BiX, BiEditAlt,BiCheck } from "react-icons/bi";
import { IconContext } from "react-icons/lib";


import GroupInput from "../../../components/GroupInput";
import Icon from "../../../components/Icon";
import Audio from "../../../components/Audio";
import { Outlet } from "react-router-dom";
import Listening from "./Listening" 



 export default function TaskArea ({number,question,type}){
  
   let answer = false; 
   let Type ="radio"


    return <div className=" md:mt-2 rounded-[4px]   md:py-2 w-full h-auto space-y-4">
    
<Listening/>
     
      </div>
      
   
   
 } 