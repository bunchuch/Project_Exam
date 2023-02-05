import React, { useEffect, useState } from "react"
import NavbarList from "./NavbarList"
import { useSelector } from "react-redux"
import Dropdown from "../Dropdown"
import {BiHomeAlt,BiGroup,BiGlobe, 
    BiMenu,
     BiQuestionMark,
      BiPencil,
       BiLogOut} from "react-icons/bi"
import {FcAbout, FcAssistant,FcGlobe, FcHome, FcList, FcManager, FcMenu, FcNews, FcRight} from "react-icons/fc"
import {CgProfile} from "react-icons/cg"
import Icon from "../Icon"
import Timer from "../Timer"
import { NavLink } from "react-router-dom"



const Navbar = ({style,setNavbar}) =>{
    const IsLoggIn = useSelector( state=> state.auth.isLoggIn)
    const names = useSelector(state=> state.auth.username)
    const loadding = useSelector((state)=> state.quizs.loadding)
    const list = [{"name":`profile`,"icon":<FcManager/>},{"name":`exam`,"icon":<FcNews/>},
    {"name":"Log out",
    "icon":<FcRight/>,
     "logout" : function(){
        alert('hello wrold')
    },
    
    }]
    const navbarlink = [{name:"Home",link: "home",icon: <FcHome/>},
    {name:"About us" ,link:"about",icon: <FcAbout/>},{name:"Contact us",link:"contact", icon: <FcAssistant/>}]
    
    const smallScreenNavbarLink =  [ {"name":"home","icon":<FcHome/>}, {"name":"about","icon":<FcAbout/>},
    {"name":"contact", "icon":<FcAssistant/>},{"name":'exam', "icon":<FcList/>}]

    const examList = [ {name:"Profile"},{name:"rule"}]

    return <nav className={IsLoggIn ? styleNavbar.authNav:styleNavbar.normalNav}>
    <div className={styleNavbar.containerOfnavbar}>
      {/* logo-banner of navbar */}
    <a href="#" className={styleNavbar.bannerImageOfnavBar}>
    <div className={styleNavbar.conatiner3}>
              <img src= {IsLoggIn ? "./PUC_Logo.png" : "./PUC_Logo.png" }
                className={styleNavbar.logoStyle} alt="logo"/>
                  <span className={IsLoggIn ? styleNavbar.bannerName + "text-white mx-1" :styleNavbar.bannerName }>
                    Puc-Exam</span>
              
               </div>
    </a>
    {/* navbar style-list */}
    <div className={styleNavbar.listStyle}>
      {
        IsLoggIn ?
        <div className="flex space-x-2">
        {loadding ?
       <Timer initialMinute = {10} nitialSeconds={23}></Timer> : null}
       <Dropdown
       name={
           <div className="flex items-center justify-center 
           w-9 h-9 font-bold rounded-full select-none
            text-cyan-800 uppercase bg-blue-200">
           {names.username.slice(0,2)}
       </div>
        }
        list={list}
        >

        </Dropdown>
        </div>
         : <div>
           <div class="relative hidden md:block">
      <div className="md:flex md:flex-row items-center  border-[1px]
         bg-gray-100 text-purple-900 font-mono px-3 rounded-xl py-1.5 hidden">
              <div className="font-medium flex">
             <span className="inline-flex space-x-1"><Icon name={<FcGlobe/>} 
            Size="1.2rem" color="purple"></Icon> <p>En</p></span>
           </div>
        </div>
      </div>
      {/* normal-navbar when width in small screen */}
      <div className="md:hidden inline-flex w-10 h-10 items-center justify-center p-1">
        <Dropdown name={<div>
          <Icon name={<FcMenu/>}></Icon>
        </div>} list={smallScreenNavbarLink}></Dropdown>
    
      </div>
        </div>
      }  
    </div>
    {/* right content of navbar */}
    {
      IsLoggIn ? <></>:<div className={styleNavbar.rigthContentStyle} >
      <ul class="flex flex-col p-4 md:p-0 mt-4 border font-sans
       border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0
        md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navbarlink.map((value)=><NavbarList link={value.link} name={value.name} icon={value.icon}/>)}
      
      </ul>
    </div>
    }
    </div>
  </nav>
}


const styleNavbar = {
    "normalNav" : "bg-white border-gray-200 shadow-sm dark:bg-gray-900 md:py-4 md:px-0 p-4 ",
    "authNav": "fixed z-10 bg-[#142544]  text-white w-full shadow-sm shadow-gray-600/10 py-2 px-2 lg:px-0 md:border-none md:py-2",
    "containerOfnavbar" : "container flex flex-wrap items-center justify-between mx-auto ",
    "bannerImageOfnavBar" : "flex justify-between ", 
    "bannerName" : "self-center text-2xl font-semibold font-mono whitespace-nowrap dark:text-white mx-2",
    "conatiner3" : " flex flex-row justify-between ", 
    "logoStyle" : "object-fill md:w-full md:h-10 h-8 w-full",
    "listStyle"  : "flex md:order-2",
    "rigthContentStyle": "items-center justify-between hidden w-full md:flex md:w-auto md:order-1",
  

}


export default Navbar