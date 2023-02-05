import { Tabs, Button, Empty, Form, Input, Select, message, Tag } from "antd";
import React, { useState } from "react";
import { TabCreateExam, renderType } from "../componet/TabItems";
import { useNavigate, Link, useParams } from "react-router-dom";
import { CiCircleChevLeft,CiEdit,CiCirclePlus, CiTrash, CiCircleInfo, CiCircleMore } from "react-icons/ci";
import Header from "../../../components/Header";
import axios from "axios";
import McqCreate from "./MqcCreate";


const types = [{label :"Mqc" ,value : "Mqc"}, 
{label:"Blank", value: "Blank"},
 {label :"Writing", value : "Writing"}]

export default function Create(){
    
    const [title ,setTitle] = useState('')
    const [type , setType] = useState('')
    const [Id ,setId] = useState('')
    const [render, setRender] = useState()
    const [messageApi, contextHolder] = message.useMessage()
    const navigate = useNavigate()
    const {id} = useParams()
    const key = 'updatable'


    const onCreate = async (e)=>{
        axios.post(`${process.env.REACT_APP_API_KEY}exam/create/${id}`,{
            title : title,
            type : type
        })
        .then(res => {
            messageApi.open({
                key,
                type : 'loading',
                content : 'Loading...'
            })
            setTimeout(()=>{
                messageApi.open({
                    key,
                    type : 'success',
                    content : `${res.data.message}`,
                    duration :2
                })

                setRender(true)
            } , [1000])

            setId(res.data.e_id)
        }).catch(error => {
            messageApi.open({
                key,
                type : 'erorr',
                content : `Failded name ${error.response.data.message}`
            })
        })
    }


   

   
    return <> 
    {contextHolder}
     <Button className="px-0 border-none shadow-none" icon={<CiCircleChevLeft/>}
      onClick={()=> navigate(`/dashboard/Exam/${id}`)}>
        Back
    </Button>
    <div className="border mt-3 border-neutral-200 bg-white rounded-lg py-2 px-4">
         <Header text="Create Exam" icons={<CiCircleMore/>}></Header>
        

        
<Form>
    <div className="grid grid-cols-2 gap-3 py-3">
        <Form.Item name="title" label="title">
            <Input onChange={e => setTitle(e.target.value)} ></Input>
        </Form.Item>
        <Form.Item name="type" label="type">
            <Select
               placeholder="Search to Select"
              options={types}
              onChange={value => setType(value)}/>             
        </Form.Item>
        </div>
        <div className="flex justify-end">
        <Button onClick={onCreate} style={{
            background : "#0f3460",
            color : "#ffff"
        }}>Submit</Button>
        </div>
      
    </Form>
  </div>

  {
    render ? <div className="mt-3 px-4 border-[1px]
     border-neutral-200 py-3 bg-white rounded-lg">
    {
        type ? <span className="flex gap-2 "> <Tag className="mb-4 text-[14px]" 
        color={type === "Mqc" ? "lime" 
        : type === "Blank" ? "green" : "magenta"} >
            {type}</Tag>
            <p className="text-[14px]">exam : {Id}</p>
            </span>
            
             : null
    }
   {
    renderType(type)  
   }
</div> : <div className="py-3 mt-3">
<Empty></Empty>
</div> 
  }

  
    
    </>
}