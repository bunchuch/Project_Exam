import React, { useEffect, useState } from "react";
import { Button ,Form,Input,Modal, Popconfirm, Select, Table, Tabs, message,DatePicker, InputNumber, Tooltip} from "antd";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { CiCircleInfo, CiEdit, CiRuler, CiTrash, CiUser } from "react-icons/ci";
import Header from "../../../components/Header";
import { columnCourse, columnsReport, columnsStudent } from "../componet/ColumsItem";
import { GroupInfoTab } from "../componet/TabItems";
import moment from "moment";
import { useForm } from "antd/es/form/Form";
import NavigatorButton from "../../../components/navigatorButton";
import { Option } from "antd/es/mentions";
import { useSelector } from "react-redux";
import { deleteGroup, getGroupById, updateGroup } from "../../../api/group";


const types = [{label :"Mqc" ,value : "Mqc"}, 
{label:"Blank", value: "Blank"},
 {label :"Writing", value : "Writing"}]


export default function GroupInfo () {
    
    const navigate = useNavigate()
    const {id} = useParams()
    const [data ,setData] = useState({})
    const [exam ,setExam] = useState([])
    const [groups , setGroup] = useState()
    const [classes , setClasses] = useState()
    const [teacher , setTeacher] = useState()
    const [level , setLevel] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage()
    const [student , setStudent] = useState([])
    const [title ,setTitle] = useState(1)
    const key = 'updatable'
    const teacherName = useSelector(state => state.course.teacher)
    const [form] = useForm()


    const onGet = async ()=>{
        try {
            const response = await getGroupById({id})
            
            if(response){
                setData(response.groups)
                setExam(response.groups.exam)
                setStudent(response.groups.student)
               
            }else{
                messageApi.open({
                    key : 'updatable',
                    type : 'error',
                    content : `${response.message}`
                })
            }
        } catch (error) {
             messageApi.open({
                key : 'updatable',
                type : 'error',
                content : `${error}`
            })
        }

    }

    const onDelete = async ()=>{
        try {
            const response = await deleteGroup(id)
            console.log(response)
            if(response.success){
                setTimeout(()=>{
                    messageApi.open({
                        key : 'updatable',
                        type : 'success',
                        content : `${response.message}`
                    })
                }, 2000)
                navigate("/dashboard/Group")
                
            }else{
                messageApi.open({
                    key : 'updatable',
                    type : 'error',
                    content : `${response.message}`
                })
            }
        } catch (error) {
            messageApi.open({
                key : 'updatable',
                type : 'error',
                content : `${error}`
            })
        }
    }

    const onUpdate = async () =>{
        try {
            const request = await updateGroup({
                    group : groups,
                    teacher : teacher
                } , id)
            if(request.success){
                messageApi.open({
                    key,
                    type : 'loading',
                    content : 'Loading...'
                })
                setTimeout(()=>{
                    messageApi.open({
                        key,
                        type : 'success',
                        content : `${request.message}`,
                        duration :2
                    })
                    onGet()
                } , [1000])
            }else{
                messageApi.open({
                    key,
                    type : 'error',
                    content : `Failded name ${request.message}`
                })
            }
        } catch (error) {
            messageApi.open({
                key,
                type : 'error',
                content : `Failded name `
            })
        }
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

    
      const onChangeTab = (key)=> {
            setTitle(key)
       
   }


    return <>
    {contextHolder}
     <NavigatorButton/>
    <div className="border border-neutral-200 bg-white rounded-lg py-2 px-4">
        <div className="flex justify-between items-center">
         <Header text="Class Info" icons={<CiCircleInfo/>}></Header>

        <div className="flex items-center gap-2 mb-3">
            <Tooltip title="Create Exam">
            <Button className="bg-neutral-50 border-none shadow-none"
            onClick={()=> navigate(`/dashboard/Group/create-exam`)} icon={<CiRuler/>}/>
            </Tooltip>  
            <Tooltip title="Update Course">
            <Button onClick={showModal} 
            icon={<CiEdit/>}/>
                </Tooltip>  
           
        <Tooltip title="Create Student">
            <Button 
            onClick={()=>
             navigate("/dashboard/Create-New-Student")}
             icon={<CiUser/>}/>
        </Tooltip>
      <Modal  title={"update group"} 
      open={isModalOpen} onCancel={handleCancel} 
      okType="default" onOk={onUpdate}>

        <Form form={form} layout="vertical">
          <Form.Item name={"course"} label="Course : ">
            <Input onChange={(e)=> setGroup(e.target.value)} defaultValue={data.group}></Input>
            </Form.Item>
            <Form.Item name="class" label="Class : ">
            <Input defaultValue={data.class}></Input>
            </Form.Item>
            <Form.Item>
                <Select onChange={(value)=> setTeacher(value)} defaultValue={data.teacher}>
                    {
                        teacherName.map((i,k)=> <Option value={i} key={k}>
                            {i}
                        </Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item name="level" label="Level : ">
            <Input defaultValue={data.level}></Input>
            </Form.Item>
            <Form.Item name="time" label="Time : ">
            <Input disabled defaultValue={data.time}></Input>
            </Form.Item>
            </Form>
      </Modal>
      <Popconfirm
      onConfirm={onDelete} 
      okType="default" 
      okText="Delete"
       placement="bottom"
        title="Delete Group"
        description="Are you sure to delete this Group ?"
      >
      <Button danger icon={<CiTrash/>}></Button>
      </Popconfirm>
        
        </div>
        </div>
        
        <div className="grid grid-cols-4 gap-5 px-2 mt-2 text-[14px]">
         <span  className="flex gap-2">
            <label key={data.group} className="font-semibold space-x-2 text-gray-600">Course Name :</label>
            <p className="text-gray-900" >{data.group}</p>
           
        </span>
        <span className="flex gap-2">
            <label key={data.class} className="font-semibold space-x-2  text-gray-600">Class :</label>
            <p className="text-gray-900" >{data.class}</p>
           
        </span>
        <span className="flex gap-2">
            <label key={data.teacher} className="font-semibold space-x-2  text-gray-600">Teacher :</label>
            <p className="text-gray-900" >{data.teacher}</p>
           
        </span>
        
        <span className="flex gap-2">
            <label key={data.level} className="font-semibold space-x-2  text-gray-600">Level :</label>
            <p className="text-gray-900" >{data.level}</p>
           
        </span>

        <span className="flex gap-4">
            <label key={data.time}  className="font-semibold space-x-2  text-gray-600">Start :</label>
            <p className="text-gray-900" >{moment(data.time ?data.time[0] : null).format("HH:mm")}</p>
            <label key={data.updatedAt +10*1} className="font-semibold space-x-2  text-gray-600">End :</label>
            <p className="text-gray-900" >{moment(data.time ? data.time[1]:null).format("HH:mm")}</p>
           
        </span> 
        <span className="flex gap-2">
            <label key={data.updatedAt+3} className="font-semibold space-x-2  text-gray-600">Student :</label>
            <p className="text-gray-900" >{data.student ? data.student.length : null}</p>
           
        </span>
        <span className="flex gap-2">
            <label key={data.createdAt} className="font-semibold space-x-2  text-gray-600">Create :</label>
            <p className="text-gray-900" >{moment(data.createdAt).format("DD/MM/YYYY")}</p>
           
        </span>
        </div>
          
    </div>
    <Tabs
    defaultActiveKey={1}
    onChange={onChangeTab}
    items={GroupInfoTab}
    indicatorSize={(origin) => origin - 1}
  />
   <div className="">
    {
        title === 1 &&
        <Table indentSize="10px" size="middle" bordered columns={columnCourse} dataSource={exam}/>
    }
    {
        title === 2 && 
        <Table bordered indentSize={10} size="middle" columns={columnsStudent} dataSource={student}/>
    }
    {
        title === 3 && 
        <Table bordered columns={columnsReport}/>
    }
   
   </div>
    </>
}


