import React from "react";
import Icon from "../../../../components/Icon";
import { BiBookReader } from "react-icons/bi";

const PersonalInfo =({icon,title,desc})=>{
  
    return   <div className ="flex md:flex-col px-4  my-2 items-center md:items-start md:border-[1px] bg-white rounded-[4px] md:px-5 md:py-2 ">
    <h1 className="text-[14px] font-medium  md:text-[18px]  order-2">{title}</h1>
    <h2 className=" text-[14px] font-medium  md:text-[16px] ml-3 md:ml-0 order-last space-x-1">{desc}</h2>
    <div className="flex justify-start md:justify-end order-1 md:order-last mr-2 md:bg-blue-200 md:rounded-full md:w-14 md:h-14">
 <Icon name={icon} Size="2rem"/>
    </div>
    
    </div>
    

}



export default PersonalInfo