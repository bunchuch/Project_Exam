import React, {useState, useContext, createContext} from "react";
import {BiClipboard, BiFace, BiGrid, BiMenu,  BiRightIndent,  BiTestTube,  BiUserCheck, BiUserCircle} from "react-icons/bi"
import Icon from "../../../components/Icon";
import { Link } from "react-router-dom";


const LeftSideBarList = [
    {name : "Dashboard", icon: <BiGrid/>, Link: " "},
    {name: "Teacher", icon : <BiUserCircle/>, Link: "Teacher"},
    {name: "Student" , icon:<BiFace/>, Link: "Student"},
    {name:"User", icon: <BiUserCheck/>, Link:"User"},
    {name:"Exam",icon:<BiTestTube/>, Link: "Exam"},
    {name:"Report", icon : <BiClipboard/>, Link : "Report"}]


    export const DashboardContext = createContext()


export default function LeftSideBar ({item}) {
    

    const [sideBar , setSetBar] = useState(true)

    const sideReponse = () =>{
        setSetBar(!sideBar)
    }
    const normal = "w-full bg-white overflow-auto h-full z-10  p-4 "

      return <>
      <DashboardContext.Provider value={sideReponse}>
        <div className={  `${ sideBar ? `basis-[20%] 2xl:basis-[15%] relative h-full`: `md:basis-[5%] 2xl:basis-[4%] basis-[10%] relative h-full`} `+ normal}>
        <div className={  `${sideBar ? ` rounded-xl  shadow-sm items-center justify-between` : " "} 
        +  flex items-center px-2 rounded-md ` }>
            <button onClick={()=>sideReponse()}>
            <div className="w-7 h-7 ">
            <Icon name={ <BiMenu/>}></Icon>
        </div>
            </button>
          <img className={sideBar ? "object-fill w-8 h-8 mx-5" : "hidden"}  src="./PUC_Logo.png"></img>
        </div>
        <ul className="space-y-4 font-medium mt-[1.5rem]">
       
        {
            LeftSideBarList.map((item , key)=>  <li>
                <Link to={`/dashboard/${item.Link}`}>
            <a href="" className="flex items-center p-2 
            rounded-lg dark:text-white
             text-slate-900 hover:bg-gray-500 dark:hover:bg-gray-700 group">
                <div  className="w-6 h-6">
                <Icon name={item.icon} ></Icon>
                </div>
                  <span className={ `${sideBar ? "block ml-3" : "hidden" }`}>
                    {item.name}</span>
            </a>
            </Link>
        </li> 
            )
        }
       
      </ul>     
        </div>
      </DashboardContext.Provider>
      </>
}