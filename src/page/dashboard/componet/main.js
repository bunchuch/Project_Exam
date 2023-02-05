import React, { useState } from "react";
import { BiAbacus, BiArrowFromBottom, BiArrowFromTop, BiFace, BiUser,BiUsers, BiUserCircle, BiGroup, BiCoin, BiCoinStack } from "react-icons/bi";
import Icon  from "../../../components/Icon";
import Chart from "chart.js/auto";
import {Lines} from "../componet/chart/line"




function DashboardCard ({amount , title ,icon}) {
    
    const checkIcon = (title)=>{
        if (title === "Student") {
            return <BiFace/>
        }else if (title === "Teacher"){
            return <BiUserCircle/>
        }else if (title === "Employee"){
            return <BiGroup/>
        }else if (title === "Income"){
            return <BiCoinStack/>
        }
    }


    return <>
    <div className="bg-white p-4 shadow-md border-[1px] border-gray-200 rounded-md shadow-gray-50 hover:bg-purple-100">
        <div className="flex flex-col gap-2 ">
        <Icon Size={"2.5rem"} name={ checkIcon(title)}></Icon>
        <p className="text-[15px]">{amount}</p>
        </div>
        <h1 className="font-semibold text-[16px]">{title}</h1>
        <div className="flex float-right items-center bg-green-200 rounded px-2 py-1 text-sm font-semibold"> 
        <p>4.5%</p>
        <Icon color="#29d972" Size={"1rem"} name={<BiArrowFromBottom/>}></Icon>
        </div>
    </div>
    </>
}


export function Main () {

const options = {
    title:{
        display:true,
        text: "Chart Title"
    },
    scales : {
        yAxes : [
            {
                ticks : {
                    suggesteMin:0,
                    suggesteMax : 100,
                }
            }
        ]
    }
}

    return<div className="">
        <h1 className="text-2xl font-semibold pb-3 text-purple-900">Welcome Dara to! Dashboard</h1>
<div className="grid lg:grid-cols-4 gap-2 py-2">
     <DashboardCard amount={1000} title={"Student"}/>
     <DashboardCard amount={25} title="Teacher"/>
     <DashboardCard amount={23} title="Employee"/>
     <DashboardCard amount={2000} title="Income"/>
    </div>
    <div className="grid lg:grid-cols-3 gap-2 ">
    <div className=" bg-white rounded-md p-4 col-span-2 border-[1px] border-gray-200">
        <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Analysist</h1> 
        <select className="bg-gray-100 px-2 py-1 rounded-md border-[1xp]" name="report-select" for="report">
            <option value="Year">year</option>
            <option value="month">month</option>
            <option value="week">week</option>
        </select>
        </div>
   <div className="mt-5">
   <Lines/> 
   </div>
  
    </div>
    <div className="bg-white rounded-md border-[1px] p-4">
        <h1 className="text-lg font-bold">Activity</h1>
    </div>
    
    </div>
  
   
    
    
    </div>
}