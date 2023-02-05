import React, {useState, useContext, createContext} from "react";
import {BiClipboard, BiFace, BiGrid, BiMenu,  BiRightIndent,  BiTestTube,  BiUserCheck, BiUserCircle} from "react-icons/bi"
import Icon from "../../../components/Icon";
import { Link } from "react-router-dom";
import { CiCalculator1, CiGrid2H, CiPenpot, CiRuler, CiUser,CiMenuBurger, CiBoxList } from "react-icons/ci";


const LeftSideBarList = [
    {name : "Dashboard", icon: <CiGrid2H/>, Link: " "},
    // {name: "Teacher", icon : <BiUserCircle/>, Link: "Teacher"},
    {name: "Student" , icon:<CiPenpot/>, Link: "Student"},
    {name:"User", icon: <CiUser/>, Link:"User"},
    {name:"Exam",icon:<CiRuler/>, Link: "Exam"},
    {name:"Report", icon : <CiCalculator1/>, Link : "Report"}]


export const DashboardContext = createContext()


export default function LeftSideBar ({item}) {
    

    const [sideBar , setSetBar] = useState(true)

    const sideReponse = () =>{
        setSetBar(!sideBar)
    }
    const normal = "w-full bg-slate-800 overflow-auto h-full z-10  p-4 "

      return <>
      <DashboardContext.Provider value={sideReponse}>
        <div className={  `${ sideBar ? `basis-[20%] 2xl:basis-[15%] relative h-full`
        : `md:basis-[5%] 2xl:basis-[3.5%] basis-[10%] relative h-full`} `+ normal}>
        <div className={  `${sideBar ? ` rounded-xl  shadow-sm items-center justify-between` : " "} 
        +  flex items-center px-2 rounded-md ` }>
            <button onClick={()=>sideReponse()}>
            <div className="w-7 h-7 ">
            <Icon color="white" name={ <CiBoxList/>}></Icon>
        </div>
            </button>
          <img className={sideBar ? "object-fill w-8 h-8 mx-5" 
          : "hidden"}  src="./asset/Puc_logo.png"/> </div>
        <ul className="space-y-4  mt-[1.5rem]">
       
        {
            LeftSideBarList.map((item , key)=>  <li>
                <Link to={`/dashboard/${item.Link}`}>
            <a href="" className="flex items-center p-2 
            rounded-lg text-white
             hover:bg-variation-400 5group">
                <div  className="w-6 h-6">
                <Icon color="white" name={item.icon} ></Icon>
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