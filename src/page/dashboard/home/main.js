import React, { useState } from "react";
import Icon  from "../../../components/Icon";
import { CiCoinInsert, CiGlass, CiGrid2H, CiLocationArrow1,
     CiUser } from "react-icons/ci";
import Header from "../../../components/Header";
import Meta from "antd/es/card/Meta";
import { getUserByName } from "../../../api/user";
import Cookies from "universal-cookie"
import { useEffect } from "react";
import { Card, Result, message, Descriptions, Tag} from "antd";
import moment from 'moment'

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


const renderRole = (role) =>{

    return (
       <>{

           role.map((i,index) => 
           <h1 className={`
           ${role == 'admin' && 'bg-[#16a34a] text-white'}
           ${role == 'superadmin' && 'bg-[#dc2626] text-white' }
           ${role == 'teacher' && 'bg-[#0891b2] text-white'}
           ${role == 'staff' && 'bg-[#fcd34d] text-gray-600'}
           ${role == 'developer' && 'bg-[#312e81] text-white'}
            mt-2 inline-block  px-4
                  border 
                rounded-md text-center mx-3  text-[24px]`}>
                 {i.toUpperCase()}         
                </h1>
           )
       }
      </>
    )
 }

useEffect(()=>{
    handleGetUser()
},[])

    return<div> { data ? <>
        <Header icons={<CiGrid2H/>} text="Dashboard"/>
    <div className="py-4
             grid grid-cols-2 gap-2 ">

        <Card
        loading={loading}
        className="border bg-white">
            <Meta
            className="flex items-center"
            avatar={
                <div 
                className="w-[10rem] bg-neutral-50
                 rounded-full p-2 h-[10rem]">
                <Icon
                color={"#0f3460"}
                name={
                <CiUser/>
                }                
                >
                </Icon>
                </div>
            }
            description={
                <h1 className="font-semibold text-gray-600 mx-3 text-[34px]">
               welcome  {data?.name}
                </h1>
               }
            >
            </Meta>
            </Card>        

          <Card
        loading={loading}
        className="border bg-white">
            <Meta
            className="flex flex-col  mt-2 items-start"
            avatar={
                <div>
                <h1 className="font-semibold
                 text-gray-600 mx-3 text-[34px]">Remarks :</h1>
                </div>
            }
            description={
               renderRole(data?.role)
               }
            >
            </Meta>
            </Card> 

        </div>
        <Card>
        <Descriptions title="more info" className="pb-4" >
             <Descriptions.Item label="Telephone">{data?.phone ? data?.phone
              : "(+000)-000-000"}</Descriptions.Item>
             <Descriptions.Item label="email">{data?.email}</Descriptions.Item>
             <Descriptions.Item label="Live">{data?.address ? data?.address : "location"}</Descriptions.Item>
            
            <Descriptions.Item label="Address">
                <Tag>{data?.address ? data?.address : "default"}</Tag>
                </Descriptions.Item>

                <Descriptions.Item label="enroll work">
                {moment(data.createdAt).format('DD/MM/YYYY')}
                </Descriptions.Item>
                <Descriptions.Item label="Last update">
                {moment(data.updatedAt).format('DD/MM/YYYY')}
                </Descriptions.Item>
                </Descriptions>  
            </Card>
         </> : <>
        <Result
    title="page are under maintenance"
  />
        </>}
     
  
   
    
    
    </div>
}