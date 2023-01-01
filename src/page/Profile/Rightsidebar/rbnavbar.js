import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import {BiDialpadAlt, BiFontColor, BiHomeSmile} from "react-icons/bi"



const BtnHeader = ({text,icon,link}) =>{
    return <>
     <a href="#" className="  hover:text-blue-700 py-2  hover:bg-gray-200 active:bg-gray-300  md:px-10  ">
        <div className="flex space-x-2">
       <Icon name={icon} Size="1.2rem"/>
        <h1 className="text-[14px]">
     <Link to={link}>{text}</Link></h1>
        </div>
        </a>
    </>
}

export default function Headertag({ }) {
    return (<div className="flex justify-between md:justify-center items-center 
           text-center bg-white border-b-[1px] py-2 md:px-5   ">
      <BtnHeader link="/overview" text="Overview"
       icon={<BiDialpadAlt/>}></BtnHeader>
      <BtnHeader link="/class" text="class"
       icon={<BiHomeSmile/>}></BtnHeader>
      <BtnHeader link="/exam"text="Examination"
       icon={<BiFontColor/>}></BtnHeader>
    </div>);
}
