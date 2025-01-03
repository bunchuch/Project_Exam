import React, { useState } from "react";
import { Button, Form, Input, Select, TimePicker,
      Modal,
     message, ConfigProvider } from "antd";
import Header from "../../../components/Header";
import { CiViewBoard } from "react-icons/ci";
import {  useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "antd/es/form/Form";
import { createGroup, getGroupById, updateGroup } from "../../../api/group";
import NavigatorButton from "../../../components/navigatorButton";
import { useEffect } from "react";
import { addressAction } from "../../../redux/addressSlice";
import { loadingAction } from "../../../redux/loaderSlice";
import locale from 'antd/es/locale/en_US';
import { getTeacher } from "../../../redux/courseSlice";

export default function CreateGroup () {
const [time ,setTime] = useState([])
const [isModalOpen, setIsModalOpen] = useState(false)
const {id} = useParams()
const {Option} = Select
const [form] = useForm()
const dispacth = useDispatch()
const courseLevel = useSelector(state => state.address.level)
const teachername = useSelector(state => state.course.teacher)


const showModal = () => {
    setIsModalOpen(true);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  }


const onGet = async ()=>{
    try {
        dispacth(loadingAction.ShowLoading())
        const response = await getGroupById({id})
        dispacth(loadingAction.HideLoading())
        if(response){
           form.setFieldsValue(response.groups)
           
        }else{
            message.error(response.data.message)
        }
    } catch (error) {
        message.error(error)
    }

}

const handleOk = async ()=>{
      try {
        const response = await updateGroup({time:time} , id)
        if(response.success){
            message.loading('patch data...')
            setTimeout(()=>{
                message.success(response.message)
            }, 5000)
        }else{
            message.error(response.data.message)
        }
      } catch (error) {
        message.error(error)
      }
}

const handleCreate = async (value) => {
        try {
            const request = id ? await updateGroup(value , id) 
            : await createGroup(value)
            if(request.success){
                message.loading('loading...')
                setTimeout(()=>{
                    message.success(request.message)
                } ,[2000])
            }else{
               message.error(request.data.message)
            }

        } catch (error) {
           message.error(error)
        }
    }

    const updateDateAndTime = () => {
        return <Modal onOk={handleOk} okType="default"
         open={isModalOpen} onCancel={handleCancel} title="update Date & Time">
                <ConfigProvider locale={locale}>
                    <Form>
                    <Form.Item name="time" label="Pick Time">
                     <TimePicker.RangePicker
                     value={time}
                     onChange={(date) =>setTime(date)}
                    format={"HH:mm"}/>
                    </Form.Item>
                    </Form>
                 </ConfigProvider>
        </Modal> 
    }
  
    
    useEffect(()=> {
        onGet()
        dispacth(addressAction.courseLevel())
        dispacth(getTeacher())
    },[])

    return <>
     <NavigatorButton/>
    <div className="bg-neutral-50 p-4  rounded-xl ">
     <Header  text={id ? `update Course ${id}` :" Create new Course"}></Header>
     {
        id && <>
        <button className="bg-variation-500 active:bg-variation-400 px-2 py-[1.5px] text-[12px]
        rounded-md
         text-white mt-2" onClick={showModal}>update time</button>
        {updateDateAndTime()}</>
     }
     <Form 
     form={form}
     onFinish={handleCreate} 
      layout="vertical" className="mt-4">
        <div className="grid grid-cols-1 gap-3">
        <Form.Item
        rules={[
            {
                message : 'please enter course name',
                required:true
            }
        ]}
        name="group" label="Course name">
            <Input
             ></Input>
        </Form.Item>

        <Form.Item name="class" label="Room name">
            <Input ></Input>
        </Form.Item>

        <Form.Item name="teacher" label="Assign Teacher">
            <Select>
                {teachername ? teachername.map((i , k)  => <Option key={k} value={i}>
                    {i}
                </Option>)
                : [] }
            </Select>
        </Form.Item>


        <Form.Item name="level" label="Select course level">
           <Select
           options={courseLevel}
           ></Select>
        </Form.Item>
 {
    id ? <></> :<Form.Item required name="time" label="Pick Time">
            <TimePicker.RangePicker
             value={time}
             placement="bottomRight" 
             format={"HH:mm"}/>
        </Form.Item>
}
        </div>

        <div className="flex justify-end">
        <Form.Item>
            <Button htmlType="submit" className="bg-gray-900 text-gray-50 tracking-wide rounded-lg"  >
              {id ? "Update" : "Create" }
            </Button>
        </Form.Item>
        </div>
      
     </Form>
    </div>
    </>
}