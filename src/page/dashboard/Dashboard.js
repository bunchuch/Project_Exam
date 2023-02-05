import react, { createContext, useContext, useState } from "react"
import Container from "../../components/Container"
import Icon from "../../components/Icon"
import {BiClipboard, BiFace, BiGrid, BiMenu,  BiRightIndent,  BiTestTube,  BiUserCheck, BiUserCircle} from "react-icons/bi"
import { Outlet ,Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"




const LeftSideBarList = [
{name : "Dashboard", icon: <BiGrid/>, Link: " "},
{name: "Teacher", icon : <BiUserCircle/>, Link: "Teacher"},
{name: "Student" , icon:<BiFace/>, Link: "Student"},
{name:"User", icon: <BiUserCheck/>, Link:"User"},
{name:"Exam",icon:<BiTestTube/>, Link: "Exam"},
{name:"Report", icon : <BiClipboard/>, Link : "Report"}]
const DashboardContext = createContext()




function LeftSideBar ({item}) {

    const [sideBar , setSetBar] = useState(true)

    const sideReponse = () =>{
        setSetBar(!sideBar)
    }
    const normal = "w-full bg-slate-800 overflow-auto h-full  p-4 text-white "

      return <>
      <DashboardContext.Provider value={sideReponse}>
        <div className={  `${ sideBar ? `basis-[20%] 2xl:basis-[15%]`: `md:basis-[5%] 2xl:basis-[4%] basis-[10%] h-full`} `+ normal}>
        <ul className="space-y-4 font-medium mt-[3.5rem]">
        <div className={  `${sideBar ? `bg-gray-500 p-4 rounded-xl justify-between shadow-sm items-center` : " "} 
        +  flex items-center p-2 hover:bg-gray-500 rounded-md ` }>
            <p className={sideBar ? "block" : "hidden"}>Meun </p>
            <button onClick={()=>sideReponse()}>
            <div className="w-6 h-6 ">
            <Icon name={ sideBar ? <BiMenu/> : <BiRightIndent/>}></Icon>
        </div>
            </button>
        </div>
        {
            item.map((item , key)=>  <li>
                <Link to={`/dashboard/${item.Link}`}>
            <a href="" className="flex items-center p-2 
            rounded-lg dark:text-white
             text-white hover:bg-gray-500 dark:hover:bg-gray-700 group">
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

function Panel () {

    const respone = useContext(DashboardContext)
    const noramlStyle = "w-full h-full overflow-y-auto bg-gray-50 p-4 "
    const panelStyle =  "mx-auto mt-[3.5rem]  rounded-xl relative p-5 mx-auto"
    return <div className={`${respone ? "basis-[95%] 2xl:basis-[100rem] " : "basis-[95%] "}` + noramlStyle} >
    <div className={ `${respone ? " md:max-w-5xl 2xl:max-w-[70rem] mx-auto " 
    : "md:max-w-5xl 2xl:max-w-[100rem] max-auto"}` + panelStyle}>
         <Outlet/>
    </div>

</div>
}


export const Dashboard = () =>{
    

    return <>
    <Navbar></Navbar>
    <Container>
        <div className=" w-full   flex flex-row h-full ">
                <LeftSideBar item={LeftSideBarList}></LeftSideBar>
                <Panel></Panel>         
        </div>
    
    </Container>
    </> 
    
    
}