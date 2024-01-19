import React, {useState, createContext} from "react";
import Icon from "../../../components/Icon";
import { Link, useLocation } from "react-router-dom";
import { CiGrid2H, 
  CiUser,
  CiCircleChevLeft, CiCircleChevRight, CiReceipt, CiStar, CiCircleAlert } from "react-icons/ci";
import { Tooltip } from "antd";


const LeftSideBarList = [
    {id : 1 ,name : "Dashboard", icon: <CiGrid2H/>, Link: ""},
    {id : 2,name:"Users", icon: <CiUser/>, Link:"User"},
    {id : 3,name:"Groups",icon:<CiStar/>, Link: "Group"},
    {id : 4 ,name:"Exam",icon:<CiReceipt/>, Link: "Exam"},
    {id : 5,name:"Report", icon : <CiCircleAlert/>, Link : "Report"}]


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
    +" justify-between bg-white font-roboto border-[1px] border-neutral-200 overflow-auto h-full"

      return <>
      <DashboardContext.Provider value={sideReponse}>
        <div style={{
          durations : '3s'
        }} className={  `${ sideBar ? `basis-[20%] 2xl:basis-[15%] relative h-full`
        : `md:basis-[5%] 2xl:basis-[3.5%] basis-[10%] relative h-full`} `+ normal}>
        <ul className="mt-[3.5rem] ">
       
        {
            LeftSideBarList.map((item , key)=> <li className="py-4" key={key}>
                <Link to={`/dashboard/${item.Link}`}>
            <a href="" className={`inline-flex items-center w-full font-roboto hover:bg-neutral-50
             text-[#0f3460] ${item.Link === extractedWord ? 'bg-neutral-50 border-r-[4px] border-variation-500' : null} py-2 px-4`}>
             <div className = {`${item.Link == extractedWord ?  
             "" : ""} flex w-full`}>
              {
                sideBar ?  <div  className="w-7 h-7">
                <Icon color="#0f3460" name={item.icon} ></Icon>
                </div> :  <Tooltip placement="right" title={item.name}>
                <div  className="w-7 h-7">
                <Icon color="#0f3460" name={item.icon} ></Icon>
                </div>
                </Tooltip>
              }

                  <span className={ `${sideBar ? "block ml-3" : "hidden" }`}>
                    {item.name}</span>
                   
                  
                    </div>
            </a>
            </Link>
        </li> 
            )
        }
       
      </ul>     
      <div className={  `${sideBar ? ` bg-neutral-200 py-2
        items-center justify-center` : " "} 
        +  flex items-center px-2 bg-neutral-200 justify-center py-2` }>

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
      </DashboardContext.Provider>
      </>
}