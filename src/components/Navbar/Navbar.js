import React, {useState} from "react"
import NavbarList from "./NavbarList"
import { useDispatch, useSelector } from "react-redux"
import {FcAbout, 
  FcAssistant,
  FcGlobe,
   FcHome, 
   FcList, 
  FcMenu,
 } from "react-icons/fc"
 import { CiExport } from "react-icons/ci"
import Icon from "../Icon"
import { Link} from "react-router-dom"
import { Drawer, Dropdown, Select, Space } from "antd"
import Avatar from "../Avatar"
import Cookies from "universal-cookie"
import { authAction } from "../../redux/authSlice"

const cookies = new Cookies()


const Navbar = ({style,setNavbar,container,  IsLoggIn}) =>{
    const names = useSelector(state=> state.auth.username)
    const [open ,setOpen] = useState(false)
    const [placement, setPlacement] = useState('left');
    const dispatch = useDispatch()


    const logout = (e) =>{
      cookies.remove("TOKEN",{path : "/"})
      window.location.href= "/login"
      dispatch(authAction.logout())
  }

  

    const items =  [ {
      key: '1',
      label : (
        <a className=" flex gap-3 items-center" onClick={logout}>
        <Icon Size="1rem" name={<CiExport/>}>    
        </Icon>
        Log out</a>
      )
    } ]
     
    const navbarlink = [
      {
         name:"Home",link: "home",icon: <FcHome/>},
                        {name:"About us" ,link:"about",icon: <FcAbout/>},
                        {name:"Contact us",link:"contact", icon: <FcAssistant/>}]
    
    const smallScreenNavbarLink =  [ {"name":"home","icon":<FcHome/>}, {"name":"about","icon":<FcAbout/>},
                               {"name":"contact", "icon":<FcAssistant/>},{"name":'exam', "icon":<FcList/>}]

    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const onChange = (e) => {
      setPlacement(e.target.value);
    };
     


    return <nav className={IsLoggIn ? styleNavbar.authNav:styleNavbar.normalNav}>
    <div className={container ? styleNavbar.containerOfnavbar : styleNavbar.dashboard}>
      {/* logo-banner of navbar */}
    <a href="#" className={styleNavbar.bannerImageOfnavBar}>
    <div className={container ? styleNavbar.conatiner3  : styleNavbar.conatiner3 + " rounded-md p-[2px] text-white"}>
              <img src= {IsLoggIn ? "./asset/Puc_logo.png" : "./asset/Puc_exam.png" }
                className={IsLoggIn ? "w-9 h-9 mx-[3.5rem]" 
                 : " " +styleNavbar.logoStyle} alt="logo"/>
                    {
                      container ? <>
                      <span className={IsLoggIn ? 
                        styleNavbar.bannerName + "text-white mx-3 text-[20px]" 
                        :styleNavbar.bannerName + "text-[20px] mx-3"}>
                   </span>
                      </> : <></>
                    }
                  
              
               </div>
    </a>
    {/* navbar style-list */}
    <div className={styleNavbar.listStyle}>
      {
        IsLoggIn ?
        <div className="flex space-x-2">
          <>
        <Dropdown menu={{items}}>
          <Space>
          <Avatar></Avatar>
            </Space>
      
        </Dropdown>
        </>
        </div>
         : <div>
           <div class="relative hidden md:block">
            <Space>
            <Select 
            defaultValue={"En"}
            options={[
              {
                value : "Kh",
                label : 'Kh '
            }
            ]}
            
            >

              </Select>
            </Space>
          
      </div>
      {/* normal-navbar when width in small screen */}
      <div className="md:hidden inline-flex w-10 h-10 items-center justify-center p-1">
        <button onClick={showDrawer}>
        <Icon name={<FcMenu/>}></Icon>
        </button>
        <Drawer
        title={<img 
        className="object-cover w-[9rem] float-right rounded-full h-auto"
         src="./asset/Puc_exam.png" alt="Puc-logo"/>}
        placement={placement}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <ul>
          {smallScreenNavbarLink.map(value => <li
           className="">
            <Link to={`${value.name}`}>
              <div className="flex mb-8 items-center gap-4 font-semibold text-lg ">
              <Icon Size={"2rem"} name={value.icon}></Icon>
            <p>{value.name}</p>
              </div>
           
            </Link>
          </li>)}
        </ul>
      </Drawer>
        
    
      </div>
        </div>
      }  
    </div>
    {/* right content of navbar */}
    {
      IsLoggIn ? <></>:<div className={styleNavbar.rigthContentStyle} >
      <ul class="flex flex-col p-4 md:p-0 mt-4 border font-roboto font-normal
       border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 
        md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navbarlink.map((value)=><NavbarList link={value.link} name={value.name} icon={value.icon}/>)}
      
      </ul>
    </div>
    }
    </div>
  </nav>
}


const styleNavbar = {
    "normalNav" : " w-full bg-white z-10  dark:bg-gray-900 md:py-4 md:px-0 p-4  ",
    "authNav": "fixed z-10 bg-slate-800  text-white w-full shadow-sm shadow-gray-600/10 py-2 px-2 lg:px-0 md:border-none md:py-2",
    "containerOfnavbar" : "container flex flex-wrap items-center justify-between mx-auto ",
    "dashboard" : "flex flex-wrap items-center justify-between mx-auto mx-3",
    "bannerImageOfnavBar" : "flex justify-between ", 
    "bannerName" : "self-center text-[20px] font-semibold font-mono whitespace-nowrap dark:text-white mx-2",
    "conatiner3" : " flex flex-row justify-between ", 
    "logoStyle" : "object-fill md:w-full md:h-10 h-8 w-full rounded-full",
    "listStyle"  : "flex md:order-2",
    "rigthContentStyle": "items-center justify-between hidden w-full md:flex md:w-auto md:order-1",
  

}


export default Navbar




