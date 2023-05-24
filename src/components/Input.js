import React from "react";
import { styleGroupInput } from "../style/style";






export const Input =  ({id,Text, type ,event,name,value,checked }) => {
    return <div className={styleGroupInput.main}>
      {
         type ? "checkbox" && (
          <div className="flex items-center space-x-5 mb-4">
          <input id="default-checkbox" type="checkbox"
           value={value}
           checked={checked}
            className="w-5 h-5 text-purple-700 bg-gray-100 border-gray-300 rounded
             focus:ring-purple-700 
              focus:ring-2"/>
          <label htmlFor=""  className="ml-2 font-roboto tracking-wider text-[16px] text-gray-800">{Text}</label>
      </div>
            
          
       
           
         ):( <button onClick={event} className="border-[1px] text-start
          border-gray-200 hover:bg-gray-100 bg-gray-50 py-1.5 px-2 rounded-lg">
            <p className="text-gray-800 text-[14px]">
            {Text}
            </p>
           </button>)
      }
       
       
          
      
    </div>
 }