import React, { useState } from "react";
import Icon  from "../../../components/Icon";
import { CiCoinInsert, CiGlass, CiGrid2H, CiLocationArrow1,
     CiUser } from "react-icons/ci";
import Header from "../../../components/Header";
import Meta from "antd/es/card/Meta";
import Avatar from "../../../components/Avatar";
import { getUserByName } from "../../../api/user";
import Cookies from "universal-cookie"
import { useEffect } from "react";
import { Card, Result, message, Descriptions, Tag} from "antd";


function DashboardCard ({amount , title ,icon}) {
    
    const checkIcon = (title)=>{
        if (title === "Student") {
            return <CiUser/>
        }else if (title === "Teacher"){
            return <CiUser/>
        }else if (title === "Employee"){
            return <CiGlass/>
        }else if (title === "Income"){
            return <CiCoinInsert/>
        }
    }


    return <>
    <div className="bg-white p-4 shadow-md border-[1px] border-gray-200 
    rounded-md shadow-gray-50 hover:bg-purple-100">
        <div className="flex flex-col gap-2 ">
        <Icon Size={"2.5rem"} name={ checkIcon(title)}></Icon>
        <p className="text-[15px]">{amount}</p>
        </div>
        <h1 className="font-semibold text-[16px]">{title}</h1>
        <div className="flex float-right items-center bg-green-200
         rounded px-2 py-1 text-sm font-semibold"> 
        <p>4.5%</p>
        <Icon color="#29d972" Size={"1rem"} name={<CiLocationArrow1/>}></Icon>
        </div>
    </div>
    </>
}


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

    return<div> { data ? <>
        <Header icons={<CiGrid2H/>} text="Dashboard"/>
    <div className="py-4 mt-3 bg-white rounded-lg
             px-2 border-[1px] border-neutral-200 ">
        <Card
        loading={loading}
        className="border-none">
            <Meta
            avatar={<Avatar name={"Dara"}></Avatar>}
            title={name}
            description={
                <>
                <Descriptions className="mt-5">
                <Descriptions.Item label="Telephone">{data?.phone}</Descriptions.Item>
                <Descriptions.Item label="Live">{data?.address}</Descriptions.Item>
                 <Descriptions.Item label="Remark"><Tag>
                 {data?.role} </Tag></Descriptions.Item>
                </Descriptions>;
                </>
            }
            >
            </Meta>
            </Card>        



        </div> </> : <>
        <Result
    title="page are under maintenance"
  />
        </>}
     
  
   
    
    
    </div>
}