import React from "react";
import SelectOption from "../selectOption";


const HeaderComponet = ({title,icon})=>{
    return <>
     <button className="flex space-x-2 items-center bg-blue-200 text-blue-900 rounded-[120px] px-3 py-1">
    <img src={icon} alt="backarrow"/>
       <h1 className="text-[14px] font-medium">{title}</h1>
    </button>
    </>
    
}


const ExmaHeader = ({title, grade, type}) =>{
    return  <div className="flex space-x-2  items-center
     bg-white rounded-[5px] py-3 ">
    {/* title */}
    <HeaderComponet title={grade} icon ="https://img.icons8.com/material/18/2D23A4/classroom--v1.png"/>
    <HeaderComponet title={title} icon="https://img.icons8.com/windows/18/2D23A4/circled-left-2.png"/>
    <HeaderComponet title={type} icon="https://img.icons8.com/windows/18/2D23A4/circled-left-2.png"/>
    <SelectOption></SelectOption>
     {/* title */}
    {/* processbar */}
   
</div>
}


export default ExmaHeader