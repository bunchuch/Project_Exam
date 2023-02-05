import React from "react";







export const Input =  ({id,Text, type ,event,name,value,checked }) => {
    return <div className={styleGroupInput.main}>
      {         
          <div className="flex justify-center items-center ">
          <input id="default-checkbox" type={type === "checkbox" ? "checkbox" : "radio"}
           value={value}
           checked={checked}
           onChange={event}
            className={styleGroupInput.inputStyle}/>
          <label htmlFor=""  className="mx-5 font-sans tracking-wider text-[16px] text-gray-800">{Text}</label>
      </div>       
      }    
    </div>
 }

 const styleGroupInput = {
  "main": "flex items-center space-x-5 cursor-pointer w-full bg-gray-50 my-3 relative p-5 overflow-y-auto rounded-xl shadow-md shadow-gray-200/10",
  "inputStyle": "w-5 h-5 accent-purple-800 text-purple-700 bg-gray-100 border-gray-300 rounded"
  +"focus:ring-purple-700 focus:ring-2",
  "label-style": " ml-2  md:text-[16px] text-[14px] text-gray-900 indent-4 hover:text-gray-500",
}