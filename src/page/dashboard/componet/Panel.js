import React, { useContext } from "react"
import { Outlet } from "react-router-dom"
import { DashboardContext } from "./LeftSideBar"


export default function Panel () {
 
    const respone = useContext(DashboardContext)
    const noramlStyle = "w-full h-full relative overflow-y-auto  bg-white p-4  "
    const panelStyle =  "mx-auto mt-[2rem]  rounded-xl relative p-5 mx-auto"
    return <div className={`${respone ? "basis-[95%] 2xl:basis-[100rem] " : "basis-[95%] 2xl:basis-[100%] "}` + noramlStyle} >
    <div className={ `${respone ? " md:max-w-5xl 2xl:max-w-[70rem] mx-auto " 
    : "md:max-w-7xl 2xl:max-w-[100rem] max-auto"}` + panelStyle}>
         <Outlet/>
    </div>

</div>
}