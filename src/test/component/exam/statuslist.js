import React from "react";



const Statuslist = ({header,title}) =>{
      return <>
      <div className="mt-[2px] py-[10px] ">
         <h1 className="text-sm font-medium ">
            <a href="#"> {header}</a>

         </h1>
         <div class="grid grid-cols-4 gap-2 text-center py-5 bg-gray-50  px-4 rounded-[5px] font-medium ">
            <div class="px-1 py-1 hover:bg-gray-200 bg-white">{title}</div>
            <div class="px-1 py-1 hover:bg-gray-200 bg-white">{title}</div>
            <div class="px-1 py-1 hover:bg-gray-200 bg-white ">{title}</div>
            <div class="px-1 py-1 hover:bg-gray-200 bg-white">{title}</div>
            <div class="px-1 py-1 hover:bg-gray-200 bg-white">{title}</div>
            <div class="px-2 py-1 hover:bg-gray-200 bg-white">{title}</div>
            <div class="px-1 py-1 hover:bg-gray-200  bg-white ">{title}</div>
            <div class="px-1 py-1 hover:bg-gray-200 bg-white">{title}</div>

         </div>
      </div>

     
    </>
}



export default Statuslist