import React, { useState } from "react";
import Icon  from "../../../components/Icon";
import {CiCircleInfo, CiGrid2H
 } from "react-icons/ci";
import {RiUserLine} from "react-icons/ri"
import Header from "../../../components/Header";
import { getUserByName } from "../../../api/user";
import Cookies from "universal-cookie"
import { useEffect } from "react";
import { Result, message} from "antd";
import moment from 'moment'
import { MdOutlineDashboard } from "react-icons/md";


export function Main () {
const cookies = new Cookies()
const [loading ,setLoading] = useState(false)
const [data ,setData]  = useState()
const name = cookies.get('Username')

const handleGetUser = async () => {
    setLoading(true)
    const response = await getUserByName({name : name})
    setLoading(false)
    if(response){
        setData(response)
    }else{
        message.error(response.data)
    }
    
}



useEffect(()=>{
    handleGetUser()
},[])

    return<div className="font-ubuntu mt-3"> { data ? <>
        <Header icons={<MdOutlineDashboard/>} text="Dashboard"/>
        <div className="my-4 flex w-full text-[14px] justify-between items-center flex-wrap gap-3 mx-2">
            <div className="flex gap-3 flex-wrap items-center">
            <div  className="w-[3rem] bg-neutral-50 border-gray-300 my-2 rounded-full p-2 h-[3rem]">
              <Icon color={"#d1d5db"} name={<RiUserLine/>}></Icon>    
            </div>
            <p className="font-semibold">Welcome 🙌💕 {data?.name}</p>
            </div>
        <div className="flex items-center gap-2">
            Remarks :
        <p className="font-semibold text-end">  
            {data?.role}
            </p>
</div>
        </div>
     <div className="border-[1px] font-ubuntu border-gray-50"></div>
        <h1 className="text-gray-600 mt-4 inline-flex gap-2 items-center">
            <Icon Size={20} name={<CiCircleInfo/>}></Icon>
            User Info</h1>

            <div className="bg-neutral-50 gap-2 flex flex-col p-4 mt-4 text-[14px] border-neutral-200 rounded-md">
                <span className="inline-flex tracking-wide text-slate-400 gap-2 "> 
                    Telephone : <p className="text-gray-600">{data?.phone ? data?.phone
              : "(+000)-000-000"}</p> </span>

                <span className="inline-flex tracking-wide text-slate-400 gap-2 "> 
                    E-mail : <p className="text-gray-600">{data?.email ? data?.email
              : "none"}</p> </span>
                 <span className="inline-flex tracking-wide text-slate-400 gap-2 "> 
                    Current Address : <p className="text-gray-600">{data?.email ? data?.email
              : "none"}</p> </span>
                 <span className="inline-flex tracking-wide text-slate-400 gap-2 "> 
                    Address : <p className="text-gray-600">{data?.address ? data?.address : "default"} </p> </span>
                <span className="inline-flex tracking-wide text-slate-400 gap-2 "> 
                    Enroll Work : <p className="text-gray-600"> {moment(data.createdAt).format('DD/MM/YYYY')}</p> </span>
                <span className="inline-flex tracking-wide   text-slate-400 gap-2 "> 
                    Last Update : <p className="text-gray-600"> {moment(data.updatedAt).format('DD/MM/YYYY')}</p></span>
            </div>
         </> : <>
        <Result
    title="page are under maintenance"
  />
        </>}
     
  
   
    
    
    </div>
}