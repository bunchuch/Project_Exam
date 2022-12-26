import React from "react";
import { Link } from "react-router-dom";



const BtnHeader = ({text,icon,link}) =>{
    return <>
     <a href="#" className="  hover:text-blue-700 py-2  hover:bg-gray-200 active:bg-gray-300  px-10  ">
        <div className="flex space-x-2">
        <img src={icon} alt=""/>
        <h1 className="text-[14px]">
     <Link to={link}>{text}</Link></h1>
        </div>
        </a>
    </>
}

export default function Headertag({ }) {
    return (<div className="flex justify-center items-center
           text-center bg-white border-b-[1px] py-2 px-5 gap-2  ">
       
      <BtnHeader link="/overview" text="Overview"
       icon="https://img.icons8.com/metro/18/2944AB/overview-pages-2.png"></BtnHeader>
      <BtnHeader link="/class" text="class"
       icon="https://img.icons8.com/material/18/2944AB/classroom--v1.png"></BtnHeader>
      <BtnHeader link="/exam"text="Examination"
       icon="https://img.icons8.com/material/18/2944AB/test.png"></BtnHeader>
    </div>);
}
