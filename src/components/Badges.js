import React from "react";



export default function Badges ({text,background}){
    return <span className={background ?"bg-purple-200 mr-2  py-1.5 px-2.5 text-xs rounded-[4px] font-medium text-purple-800" : 
    " text-purple-800 text-xs font-medium  dark:bg-purple-900 dark:text-purple-300"}>{text}</span>
}