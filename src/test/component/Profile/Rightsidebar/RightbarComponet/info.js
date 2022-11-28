import React from "react";


const PersonalInfo =({icon,title,desc})=>{
  
    return   <div className ="border-[1px] bg-white rounded-[5px] px-5 py-4 ">
    <h1 className="text-[24px] font-medium">{title}</h1>
    <h2 className="text-[20px] font-medium">{desc}</h2>
    <div className="flex justify-end mt-10">
    <img src={icon} alt="icon" className="rounded-full bg-gray-100 px-2 py-2" />
    </div>
    
    </div>
    

}



export default PersonalInfo