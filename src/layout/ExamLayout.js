import React, { useState } from "react";
import Container from "../components/Container";
import { Outlet } from "react-router-dom";
import Timer from "../components/Timer";
import Avatar from "../components/Avatar";
import Dropdown from "../components/Dropdown";
import { BiExit } from "react-icons/bi";
import Cookie from "universal-cookie"


export function ExamLayout(){
const cookies = new Cookie()


    const [dropDown ,setDropdown] = useState(false)
  

    const logout = (e) =>{
        cookies.remove("TOKEN",{path : "/"})
        window.location.href= "/login"
    }

    return <Container>
        <div className="h-full absolute w-full  top-0 ">
        <header className="bg-login bg-repeat bg-auto shadow-lg shadow-orange-100/10">
        <div className="relative container mx-auto px-2 md:top-0 
        lg:py-5 py-4 text-slate-900 flex justify-between items-center 
        tracking-wider "> 
        <span>
        <h1 className=
        "text-[14px] md:text-[16px] 2xl:text-[20px] font-roboto font-semibold">Hi Dara 🫠</h1>
          <p className="text-gray-700 md:w-full w-[5rem] 
            truncate  text-[12px] font-roboto ">
            Let's start you exam ! Good Luck ✌️</p>
        </span>
        <div className="flex space-x-1 items-center">
        <Timer initialMinute={10} initialSeconds={0} ></Timer>
            <Dropdown name={<Avatar/>}  list={[{name: "Logout",icon:<BiExit/> , logout: logout }]}></Dropdown>
        
       {/* {
        dropDown ?
        <Dropdown name={['logout']}/> : null
      
       } */}
        
       
        </div>
      
      </div>
        </header>

    <Outlet/>


        </div>
    </Container>




}