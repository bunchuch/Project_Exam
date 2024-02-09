import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { CiExport, CiUser } from "react-icons/ci"
import {BiShoppingBag} from "react-icons/bi"
import Icon from "../Icon"
import { Dropdown, Space,Tag } from "antd"
import Cookies from "universal-cookie"
import { authAction } from "../../redux/authSlice"
import { useEffect } from "react"
import { loadingAction } from "../../redux/loaderSlice"
import Avatar from "../Avatar"


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
        <a className=" flex gap-3 items-center">
        <Icon Size="1rem" name={<CiUser/>}>    
        </Icon>
        {username}</a>
      )
    },
    {
    key: '2',
    label : (
      <a className=" flex gap-3 items-center">
      <Icon Size="1rem" name={<BiShoppingBag/>}>    
      </Icon>
      {userRole}</a>
    )
  },
    {
      key: '3',
      label : (
        <a className=" flex gap-3 items-center" onClick={logout}>
        <Icon Size="1rem" name={<CiExport/>}>    
        </Icon>
        Log out</a>
      )
    }
  
  ]
    
    useEffect(()=>{
      dispatch(authAction.roleBase({role : role}))
    }, [dispatch])
  
    return <nav className={ styleNavbar.authNav}>
    <div className={container ? styleNavbar.containerOfnavbar : styleNavbar.dashboard}>
      {/* logo-banner of navbar */}
    <a href="#" className={styleNavbar.bannerImageOfnavBar}>
    <div className="inline-flex gap-2 items-center">
              <img src={`${process.env.REACT_APP_API_KEY+"Puc_logo.png"}`}
                className="w-9 h-9"  alt="logo"/>
                <p className="text-[16px] border-l px-2 font-semibold font-roboto">Puc exam</p>   
                <Tag className="text-[12px]"
                 color="purple">✨ Beta</Tag>    
               </div>           
    </a>
    {/* navbar style-list */}
    <div className={styleNavbar.listStyle}>
      {
        IsLoggIn &&
        <div className="flex items-center ">
          <>
          <p className="text-[14px] 
           text-white
          bg-gradient-to-r from-cyan-400 
          via-cyan-500 to-cyan-600 
           rounded-md px-2 tracking-wide">{username}</p>
        <Dropdown className="cursor-pointer" menu={{items}}>
          <Space className="text-lg text-variation-500
         cursor-pointer text-[16px] px-2 
          rounded-lg">
            <Avatar/>
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
    "authNav": "fixed z-10 bg-white top-0 text-gray-600 w-full border-b border-neutral-200 py-2 px-2 lg:px-0 md:py-2",
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




