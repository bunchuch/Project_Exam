import React from "react";
import Icon from "../Icon";
import {FcAdvertising} from "react-icons/fc"
export default function Tooltip ({children,tooltip ,right,top,bottom}) {
    return (
        <div className="group relative ">
        {children}
        <span className={`absolute items-center top-10 flex space-x-1 ${ right ? "right-3 w-full" : " "} ${top ? "top-4": " "} scale-0 transition-all rounded-full
         bg-white font-roboto p-2 text-xs text-slate-900 border group-hover:scale-100`}><Icon Size="1.2rem" name ={<FcAdvertising/>}></Icon>
         <p>{tooltip}</p></span>
      </div>


    )
}