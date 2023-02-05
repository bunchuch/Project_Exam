import React, { useEffect, useState } from "react";
import { Button ,Form,Input,Modal, Select, Table, message} from "antd";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { CiCircleChevLeft, CiCircleInfo, CiCirclePlus, CiEdit, CiTrash } from "react-icons/ci";
import Header from "../../../components/Header";
import { Loader } from "../../../components/load/Loader";
import { columnCourse } from "../componet/ColumsItem";
import ExamTable from "./examTable";

const types = [{label :"Mqc" ,value : "Mqc"}, 
{label:"Blank", value: "Blank"},
 {label :"Writing", value : "Writing"}]


export default function GroupInfo () {
    
    const navigate = useNavigate()
    const {id} = useParams()
    const [data ,setData] = useState([])
    const [exam ,setExam] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage()
    const [loadding ,setLoading] = useState(false)
    const [title ,setTitle] = useState('')
    const [type , setType] = useState('')
    const key = 'updatable'

    const onGet = async ()=>{
        axios.get(`${process.env.REACT_APP_API_KEY}group/${id}`).then(
            res => {     
                setData([res.data.groups]) 
                setExam([...res.data.groups.exam])
            }
        ).catch(err => {
            messageApi.open({
                key : 'updatable',
                type : 'error',
                content : `${err.data.message}`
            })
        })
    }


 
    const onDelete = async ()=>{
        axios.delete(`http://localhost:4000/group/${id}`).then(res =>{
            setTimeout(()=>{
                messageApi.open({
                    key : 'updatable',
                    type : 'success',
                    content : `${res.data.message}`
                })
            }, 2000)
           
        }).catch(error => {
            setTimeout(()=> {
                    messageApi.open({
                        key : 'updatable',
                        type : 'erorr',
                        content : `${error.data.message}`
                    })
            }, 2000)
        })
    }


    const onCreate = async (e)=>{
        axios.post(`${process.env.REACT_APP_API_KEY}exam/create/${id}`,{
            title : title,
            type : type
        })
        .then(res => {
            console.log(res.data)
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
                onGet()
            } , [1000])

        }).catch(error => {
            messageApi.open({
                key,
                type : 'erorr',
                content : `Failded name ${error.response.data.message}`
            })
        })
    }

    useEffect(()=>{
        onGet()
       
    } ,[])

    const showModal = () =>{
        setIsModalOpen(true);
    }
  
    const handleCancel = () => {
        setIsModalOpen(false);
      };



    return <>
    {contextHolder}
    {loadding ? <Loader></Loader> : null}
    <Button className="px-0 border-none"
     icon={<CiCircleChevLeft/>} onClick={()=> navigate("/dashboard/Exam")}>
        Back
    </Button>
    <div className="border mt-3 border-neutral-200 bg-white rounded-lg py-2 px-4">
        <div className="flex justify-between items-center">
         <Header text="Class Info" icons={<CiCircleInfo/>}></Header>

        <div className="flex items-center gap-2 mb-3">
            <Button onClick={showModal}
        icon={<CiCirclePlus/>}>Create Quiz</Button>
      <Modal title="Create Exam" open={isModalOpen} onCancel={handleCancel} 
      okType="default" onOk={onCreate}>
         <Form>
            <Form.Item label="title" name="title">
                <Input onChange={e => setTitle(e.target.value)}></Input>
            </Form.Item>
            <Form.Item label="type" name="type">
                <Select
                defaultValue={"select type"}
                onChange={value => setType(value)}
                 options={types}>

                </Select>
            </Form.Item>
         </Form>
      </Modal>
        <Button onClick={onDelete} danger icon={<CiTrash/>}></Button>
         <Button icon={<CiEdit/>}></Button>
        </div>
        </div>
        
        <div className="grid grid-cols-4 gap-5 px-2 mt-2 text-[14px]">
        {
        data.map((value)=> <>
        <span className="flex gap-2">
            <label name="" className="font-semibold space-x-2 text-gray-600">Course Name :</label>
            <p className="text-gray-900" key={value._id}>{value.group}</p>
           
        </span>
        <span className="flex gap-2">
            <label name="" className="font-semibold space-x-2  text-gray-600">Class :</label>
            <p className="text-gray-900" key={value._id}>{value.class}</p>
           
        </span>
        <span className="flex gap-2">
            <label name="" className="font-semibold space-x-2  text-gray-600">Teacher :</label>
            <p className="text-gray-900" key={value._id}>{value.teacher}</p>
           
        </span>
        
        <span className="flex gap-2">
            <label name="" className="font-semibold space-x-2  text-gray-600">Level :</label>
            <p className="text-gray-900" key={value._id}>{value.level}</p>
           
        </span>

        <span className="inline-block gap-2">
            <label name="" className="font-semibold space-x-2  text-gray-600">Start - Time :</label>
            <p className="text-gray-900" key={value._id}>{value.time[0]}</p>
            <label name="" className="font-semibold space-x-2  text-gray-600">End - Time :</label>
            <p className="text-gray-900" key={value._id}>{value.time[1]}</p>
           
        </span>

   
        </>)
     }
        </div>
          
    </div>
   
   <div className="">
    <Table columns={columnCourse} dataSource={exam}></Table>
   </div>

  
     
    </>
}