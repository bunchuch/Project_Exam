import React, { useState } from "react";
import Icon  from "../../../components/Icon";
import {Lines} from "../componet/chart/line"
import { Card, Result} from "antd";
import { CiCoinInsert, CiGlass, CiGrid2H, CiGrid2V, CiLocationArrow1,
     CiUser } from "react-icons/ci";
import Header from "../../../components/Header";




function DashboardCard ({amount , title ,icon}) {
    
    const checkIcon = (title)=>{
        if (title === "Student") {
            return <CiUser/>
        }else if (title === "Teacher"){
            return <CiUser/>
        }else if (title === "Employee"){
            return <CiGlass/>
        }else if (title === "Income"){
            return <CiCoinInsert/>
        }
    }


    return <>
    <div className="bg-white p-4 shadow-md border-[1px] border-gray-200 
    rounded-md shadow-gray-50 hover:bg-purple-100">
        <div className="flex flex-col gap-2 ">
        <Icon Size={"2.5rem"} name={ checkIcon(title)}></Icon>
        <p className="text-[15px]">{amount}</p>
        </div>
        <h1 className="font-semibold text-[16px]">{title}</h1>
        <div className="flex float-right items-center bg-green-200
         rounded px-2 py-1 text-sm font-semibold"> 
        <p>4.5%</p>
        <Icon color="#29d972" Size={"1rem"} name={<CiLocationArrow1/>}></Icon>
        </div>
    </div>
    </>
}


export function Main () {
const data = false
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

    return<div> { data ? <>
        <Header icons={<CiGrid2H/>} text="Dashboard"/>
    <div className="grid lg:grid-cols-4 gap-2 py-2">
        <Card title="Usrename"></Card>
        </div> </> : <>
        <Result
    title="page are under maintenance"
  />
        </>}
     
  
   
    
    
    </div>
}