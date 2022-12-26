import React from "react";
import Button from "../Button"
import Description from "./Rightsidebar/RightbarComponet/description";


const Profilepicture =({fname,lname,picture,desc})=>{
    return   <div className="flex-none px-[20px] justify-center flex-initail w-[30%]">    
    <div className="space-y-5 item ">
    <img src={picture} className="object-cover  rounded-full w-64 h-64 mx-auto"/>
    <div className="px-10  space-x-3 flex justify-center">
    <h1 className="text-2xl font-medium ">{fname}</h1>
    <h1 className="text-2xl font-medium ">{lname}</h1>
    <button className=" bg-blue-800 font-medium rounded-full px-2 py-2">
        <img src="https://img.icons8.com/material-outlined/18/ffffff/edit-image.png" alt="icon edite"/>
    </button>
    </div>
    <div>
    <Button style={"text-blue-800 font-medium flex bg-blue-200 px-10 hover:text-yellow-400"} text="+ Add Contact"></Button>
    </div>
  
    </div>
    </div>
}


export default Profilepicture