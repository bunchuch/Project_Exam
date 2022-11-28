import React from "react";




const BtnHeader = ({text,icon}) =>{
    return <>
     <a href="#" className=" w-full hover:text-blue-700 bg-gray-100 py-2 rounded-md hover:bg-blue-500   ">
        <div className="flex space-x-2 justify-center">
        <img src={icon} alt=""/>
        <h1 className="text-[14px] font-semibold">
        {text}</h1>
        </div>
        </a>
    </>
}

export default function Headertag({ }) {
    return (<div className="flex justify-between items-center
           text-center bg-white border-b-[1px] py-2 px-5 gap-2  ">
       
      <BtnHeader text="Overview" icon="https://img.icons8.com/metro/18/2944AB/overview-pages-2.png"></BtnHeader>
      <BtnHeader text="class" icon="https://img.icons8.com/material/18/2944AB/classroom--v1.png"></BtnHeader>
      <BtnHeader text="Examination" icon="https://img.icons8.com/material/18/2944AB/test.png"></BtnHeader>
    </div>);
}
