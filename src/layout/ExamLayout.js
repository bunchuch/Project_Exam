import React, { useState } from "react";
import Container from "../components/Container";
import { Outlet, Link, useParams } from "react-router-dom";
import Timer from "../components/Timer";
import Avatar from "../components/Avatar";
import Cookie from "universal-cookie"
import { Dropdown, Space, Pagination  } from 'antd';
import Icon from "../components/Icon";
import { CiCircleChevLeft, CiExport, CiRuler, CiUser } from "react-icons/ci";
import axios from "axios";


export function ExamLayout(){
const cookies = new Cookie()


    const [dropDown ,setDropdown] = useState(false)
    const [change , setChange] = useState(false)
    const text = <span>Timer</span>

    const logout = (e) =>{
        cookies.remove("TOKEN",{path : "/"})
        window.location.href= "/login"
    }


    const items = [{
        key : '1',
        label: (
            <Link to={"/exam/profile"}>
              <a className=" flex gap-3 items-center">
            <Icon Size="1rem" name={<CiUser/>}>    
            </Icon>
            Profile</a>
            </Link>
      
        
        )
    },

    {
        key : '2',
        label: (
            <Link to={"/exam/"}>
              <a className=" flex gap-3 items-center">
            <Icon Size="1rem" name={<CiRuler/>}>    
            </Icon>
          Exam</a>
            </Link>
      
        
        )
    },

    {
        key : '3',
        label: (
        <a className=" flex gap-3 items-center" onClick={logout}>
            <Icon Size="1rem" name={<CiExport/>}>    
            </Icon>
            Log out</a>
        
        )
    }
        ]

    const [current, setCurrent] = useState(1);
const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const names = useParams()

  const mousDown = () =>{
   setChange(true)
  }

  const mousUp = () =>{
    setTimeout(()=>{
        setChange(false)
    }, 1000)
   
  }


    return <Container>
        <div className="h-full absolute w-full  top-0 ">
        <header className="bg-login2 bg-repeat bg-auto shadow-sm shadow-neutral-200">
        <div className="relative  px-2 md:top-0 
         2xl:py-5 py-4 text-slate-900 flex justify-between items-center 
        tracking-wider "> 
        <span className="flex items-center gap-3 cursor-pointer">
            {
                change ? <div onMouseUp={mousUp}>
                    <Link to={`/exam`}>
                    <Icon Size={"2.25rem"}  name={<CiCircleChevLeft/>}></Icon> 
                    </Link>
                   </div>
                 :   <img onMouseMove={mousDown} 
                 className="w-9 h-9" src="./asset/Puc_logo.png" alt="logo"/>
            }
       
        <div>
        <h1 className=
        "text-[14px] md:text-[19px] 2xl:text-[20px] font-roboto hover:text-purple-900 cursor-pointer ">Hi  {'name'}</h1>
        </div>
        </span>
  {
     names.name  ? <Pagination 
                        showLessItems
                         responsive
                          current={current} 
                          onChange={onChange}
                   total={50} /> : null
  }
       
        <div className="flex space-x-1 items-center">
            <Timer initialMinute={10} initialSeconds={0} ></Timer>
            <>
            <Dropdown menu={{items}}>
            <Space>
            <Avatar/>
            </Space>
        
        </Dropdown>
        </>
        
        
       {/* {
        dropDown ?
        <Dropdown name={['logout']}/> : null
      
       } */}
        
       
        </div>
      
      </div>
        </header>

    <Outlet/>


        </div>
    </Container>




}