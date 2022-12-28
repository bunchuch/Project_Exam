import React from "react";


const Archivement = ({summary,title})=>{
    return    <div className="px-4 py-2 md:mb-0 mb-4 rounded-[4px] border-[1px] bg-white space-y-3 ">
        <div  className="flex flex-col md:flex-row  items-center space-x-4 space-y-4 py-2">
            <img src= "https://img.icons8.com/external-anggara-flat-anggara-putra/24/null/external-award-office-anggara-flat-anggara-putra.png" alt="icon"/>
            <h1 className="text-[16px] text-center font-medium">
               {title}</h1>
        </div> 
        <div className="px-4 text-center">
        <p className="text-[14px]">
       {summary}
        </p>
                </div>
  
</div>
}


export default Archivement