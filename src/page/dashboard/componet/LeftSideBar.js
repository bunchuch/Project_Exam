import React, {useState, createContext} from "react";
import Icon from "../../../components/Icon";
import { Link, useLocation } from "react-router-dom";
import { 
  CiCircleChevLeft, CiCircleChevRight,CiUser , CiReceipt} from "react-icons/ci";
import { MdOutlineDashboard,  MdOutlineReport } from "react-icons/md";
import {FiLayers} from "react-icons/fi"
import { Tooltip } from "antd";


const LeftSideBarList = [
    {id : 1 ,name : "Dashboard", icon: <MdOutlineDashboard/>, Link: ""},
    {id : 2,name:"Users", icon: <CiUser/>, Link:"User"},
    {id : 3,name:"Groups",icon:<FiLayers/>, Link: "Group"},
    {id : 4 ,name:"Exam",icon:<CiReceipt/>, Link: "Exam"},
    {id : 5,name:"Report", icon : <MdOutlineReport/>, Link : "Report"}]


export const DashboardContext = createContext()


export default function LeftSideBar ({item}) {
    
    const [sideBar , setSetBar] = useState(true)
    const [durations ,setDurations] = useState()
    const names  = useLocation()
    let str = names.pathname
    let splitStr = str.split('/')
    let extractedWord = splitStr[2]
    const sideReponse = () =>{
        setSetBar(!sideBar)
        setDurations(document.getElementById(''))
    }
    const normal = "w-full flex flex-col "
    +" justify-between bg-neutural-50  overflow-auto h-full"

      return <>
      <DashboardContext.Provider value={sideReponse}>
        <div style={{
          durations : '3s'
        }} className={  `${ sideBar ? `basis-[20%] 2xl:basis-[15%] relative h-full`
        : `md:basis-[5%] 2xl:basis-[3.5%] basis-[10%] relative h-full`} `+ normal}>
        <ul className="mt-[3.5rem]">
       
        {
            LeftSideBarList.map((item , key)=> <li className="py-4" key={key}>
                <Link to={`/dashboard/${item.Link}`}>
            <a href="" className={`inline-flex items-center w-full  hover:bg-neutral-200
             text-[#0f3460] ${item.Link === extractedWord ? 'bg-neutral-200 border-r-[4px] border-variation-500'
              : null} py-2 px-4`}>
             <div className = {`${item.Link == extractedWord ?  
             "" : ""} flex w-full items-center`}>
              <div className="w-8 h-8 p-2 
              bg-gradient-to-br from-white to-gray-300 rounded-full">
              {
                sideBar ? 
                <Icon color="#0f3460" name={item.icon} ></Icon>
               :  <Tooltip placement="right" title={item.name}>
                <Icon color="#0f3460" name={item.icon} ></Icon>
                </Tooltip>
              }
              </div>
                  <span className={ `${sideBar ? "block ml-3 mx-3" : "hidden" }`}>
                    {item.name}</span>
                   
                  
                    </div>
            </a>
            </Link>
        </li> 
            )
        }
       
      </ul>
      <div>
      <div className={  `${sideBar ? ` bg-white py-2
        items-center justify-center` : " "} 
        +  flex items-center px-2 bg-white justify-center py-2` }>
        
          <button onClick={()=>sideReponse()}>
            <div className="w-6 h-6 ">
              {
                sideBar ? <Icon color="#0f3460" name={<CiCircleChevLeft/>}></Icon>  
                :  <Icon color="#0f3460" name={<CiCircleChevRight/>}></Icon>
              }
        </div>
            </button> 
         </div>
         </div>
        </div>
      </DashboardContext.Provider>
      </>
}