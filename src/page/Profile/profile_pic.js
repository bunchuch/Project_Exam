import React from "react";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon";
import {BiEdit} from "react-icons/bi"



const Profilepicture =({fname,lname,picture,desc})=>{
    return   <div className=" flex justify-start md:flex-none px-[20px] md:justify-center flex-initail w-full  md:w-[30%]">    
    <div className="md:space-y-5 flex md:flex-col  ">
        <div className="flex md:flex-col items-center">
        <img src={picture} className="object-cover shadow md:shadow-lg w-[5rem] h-[5rem] rounded-full  md:w-52 md:h-52 lg:w-64  lg:h-64 mx-auto"/>
    <div className="md:px-10 px-4 md:mt-4   md:space-x-3 flex md:justify-center">
    <h1 className=" text-xl md:text-2xl font-medium ">{fname}</h1>
    <h1 className="text-xl md:text-2xl font-medium ">{lname}</h1>
    <button className="font-medium rounded-full px-2 py-2">
   <Icon name={<BiEdit/>} Size=""></Icon>
    </button>
        </div>
    
    </div>
    <div className="">
    <Button style={"text-blue-800 hidden md:block   font-medium flex  px-10 hover:text-yellow-400"} text="+ Add Contact"></Button>
    </div>
  
    </div>
    </div>
}


export default Profilepicture