import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { CiExport, CiUser } from "react-icons/ci"
import Icon from "../Icon"
import { Dropdown, Space } from "antd"
import Cookies from "universal-cookie"
import { authAction } from "../../redux/authSlice"
import { useEffect } from "react"
import { loadingAction } from "../../redux/loaderSlice"



const Navbar = ({container,  IsLoggIn}) =>{
    const dispatch = useDispatch()
    const cookies = new Cookies()
    const username = cookies.get('Username')
    const role = cookies.get('role')
    const userRole = useSelector(state => state.auth.userRole)


    const logout = (e) =>{
      dispatch(loadingAction.ShowLoading())
      cookies.remove("TOKEN",{path : "/"})
      cookies.remove('Username')
      cookies.remove('role')
      window.location.href= "/login"
      dispatch(loadingAction.HideLoading())
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
    }]
    
    useEffect(()=>{
      dispatch(authAction.roleBase({role : role}))
    }, [dispatch])
  
    return <nav className={ styleNavbar.authNav}>
    <div className={container ? styleNavbar.containerOfnavbar : styleNavbar.dashboard}>
      {/* logo-banner of navbar */}
    <a href="#" className={styleNavbar.bannerImageOfnavBar}>
    <div className={container ? styleNavbar.conatiner3  : styleNavbar.conatiner3 + 
      " rounded-md p-[2px] text-white"}>
              <img src=  "./asset/Puc_logo.png"
                className="w-9 h-9 mx-2"  alt="logo"/>
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
        IsLoggIn &&
        <div className="flex space-x-1">
          <>
        <Dropdown className="cursor-pointer" menu={{items}}>
          <Space className="text-lg text-variation-500
           bg-neutral-200 cursor-pointer text-[16px] px-2 py-1 
          rounded-lg">
            <Icon color={"#0f3460"} Size={"1.5rem"} name={<CiUser/>}/>
          {username} {userRole}
            </Space>
      
        </Dropdown>
        </>
        </div>
      }  
    </div>
    </div>
  </nav>
}


const styleNavbar = {
    "authNav": "fixed z-10 bg-[#0f3460] top-0 text-white w-full shadow-sm shadow-gray-600/10 py-2 px-2 lg:px-0 md:border-none md:py-2",
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




