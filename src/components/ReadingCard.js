
import React, { useState, useTransition } from "react";
import { BiChevronDown,BiChevronUp, BiFullscreen } from "react-icons/bi";
import Tooltip from "./Button/Tooltip";
import Icon from "./Icon";
import Modal from "./Modal";
import {SmallSpinner} from "./load/SmallSpinner"

export function ReadingCard ({header,sentence,type}){
 const [open, setOpen] = useState(false)
 const [style,setStyle] = useState("")
 const [fullScreen ,setFullScreen] = useState(false)
const handleOnclick = () =>{
  setOpen(!open)
  setStyle('relative transition duration-150 ease-in-out order-first')

}


    return  <>
   {
    sentence ? <>
<Modal info={true} size="large" showModals={true} text={"Press to open file "}>
  <h1 className=" rounded-md px-2  font-semibold py-1.5
    tex-center text-purple-800">🧾 Reading</h1>
  <img className="object-cover " src={sentence}/>
</Modal>
    </> : <SmallSpinner/>
   }





 
    </>
} 