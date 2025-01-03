import React, {useState, createContext} from "react";
import Icon from "../../../components/Icon";
import { Link, useLocation } from "react-router-dom";
import { CiReceipt} from "react-icons/ci";
  import { MdOutlineBugReport } from "react-icons/md";
  import { RiGuideFill } from "react-icons/ri";
import { MdOutlineDashboard} from "react-icons/md";
import {FiLayers, FiUser} from "react-icons/fi"
import { Tooltip } from "antd";
import { GoInfo } from "react-icons/go";

const LeftSideBarList = [
    {id : 1 ,name : "Dashboard", icon: <MdOutlineDashboard/>, Link: ""},
    {id : 2,name:"Users", icon: <FiUser/>, Link:"User"},
    {id : 3,name:"Groups",icon:<FiLayers/>, Link: "Group"},
    {id : 4 ,name:"Exam",icon:<CiReceipt/>, Link: "Exam"},
    {id : 5,name:"Report", icon : <MdOutlineBugReport />, Link : "Report"},
    {id : 6,name:"About", icon : <GoInfo/>, Link : "About"},
    {id : 7,name:"Help", icon : <RiGuideFill/>, Link : "Help"},
   ]


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
    const normal = "w-full fixed flex flex-col "
    +"  overflow-auto h-full "

      return <>
      <DashboardContext.Provider value={sideReponse}>
        <div style={{
          durations : '3s'
        }} className={  `${ sideBar ? `basis-[20%] 2xl:basis-[15%] relative`
        : `md:basis-[5%] 2xl:basis-[3.5%] basis-[10%] `} `+ normal}>
        <ul className="mt-[3.5rem]">
       
        {
            LeftSideBarList.map((item , key)=> <li className="text-slate-400 text-[14px]" key={key}>
                <Link to={`/dashboard/${item.Link}`}>
            <a href="" className={`inline-flex items-center w-full hover:rounded-md  hover:bg-neutral-50
             text-[#0f3460] ${item.Link === extractedWord ? 'bg-neutral-50 rounded-md'
              : null} py-2 my-1 px-4`}>
             <div className = {`${item.Link == extractedWord ?  
             "" : ""} flex text-slate-600 w-full items-center`}>
              <div className="w-5 h-5">
              {
                sideBar ? 
                <Icon color="#475569" name={item.icon} ></Icon>
               :  <Tooltip placement="right" title={item.name}>
                <Icon color="#475569" name={item.icon} ></Icon>
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
      {/* <div className={  `${sideBar ? ` bg-white py-2
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
         </div> */}
         </div>
        </div>
      </DashboardContext.Provider>
      </>
}