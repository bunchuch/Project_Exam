import React from "react";
import { styleGroupInput } from "../style/style";






export default function GroupInput ({id,Text, type ,event,name,value,checked })  {
    return <div className={styleGroupInput.main}>
      {
         type ? "checkbox" && (
            <label className="flex space-x-2 cursor-pointer">
            <input checked={checked} id={id}  type={type}  value={value} onChange={event} 
          className={styleGroupInput["input-style"]}/>
           <div className=""> <p className={styleGroupInput["label-style"]}>{Text}</p></div>
       
            </label>
         ):( <button onClick={event} className="border-[1px] text-start
          border-gray-200 hover:bg-gray-100 bg-gray-50 py-1.5 px-2 rounded-lg">
            <p className="text-gray-800 text-[14px]">
            {Text}
            </p>
           </button>)
      }
       
       
          
      
    </div>
 }