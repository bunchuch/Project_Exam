import React, { useState } from "react";
import { Button, Form, Input, Select, TimePicker, message } from "antd";
import axios from "axios";
import Header from "../../../components/Header";
import { CiViewBoard } from "react-icons/ci";
import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "antd/es/form/Form";
import { createGroup } from "../../../api/group";
import NavigatorButton from "../../../components/navigatorButton";

export default function CreateGroup () {
const [group , setGoup] = useState('')
const [classe ,setClasse] = useState('')
const [teacher , setTeacher] = useState('')
const [level ,setLevel] = useState('')
const [time ,setTime] = useState([])
const [messageApi, contextHolder] = message.useMessage()
const key = 'updatable';
const {Option} = Select
const [form] = useForm()
const teachername = useSelector(state => state.course.teacher)

const handleCreate = async (value) => {
        try {
            const request = await createGroup(value)
            if(request){
                messageApi.open({
                    key,
                    type : 'loading',
                    content : 'Loading ...'
                });
                setTimeout(()=>{
                    messageApi.open({
                        key,
                        type: 'success',
                        content : 'Loaded!',
                        duration : 2
                    })
                } ,[1000])
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
                content : `Failded name ${error.message}`
            })
        }
    }

    const handleChange = (time)=>{
        setTime(time)
            
       
    }
    const handleChangeSelect = (value)=>{
        setLevel(value)
    }
    
    return <>
     <NavigatorButton/>
    <div className="bg-white p-4  rounded-lg border border-neutral-200">
     <Header icons={<CiViewBoard/>} text={"Create Group"}></Header>
     <Form 
     form={form}
     onFinish={handleCreate} 
      layout="vertical" className="mt-4">
        {contextHolder}
        <div className="grid grid-cols-1 gap-3">
        <Form.Item name="group" label="Group">
            <Input ></Input>
        </Form.Item>

        <Form.Item name="class" label="Class">
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


        <Form.Item name="level" label="Level">
           <Select
           options={[{label : 'Beginner', value: 'Beginner'},
            {label : 'Pre-Intermediate', value: 'Pre-Intermediate'},
            {label : 'Intermediate',value:'Intermediate',},{
                label : "Upper-Intermediate",value:"Upper-Intermediate"
            }, {
                label : "Advanced",value:"Advanced"
            }]}
           ></Select>
        </Form.Item>

        <Form.Item name="time" label="Time">
            <TimePicker.RangePicker value={time}
             
             placement="bottomRight" 
             format={"HH:mm"}/>
        </Form.Item>
        </div>

        <div className="flex justify-end">
        <Form.Item>
            <Button htmlType="submit" style={{
                background: '#0f3460',
                color : '#ffff',
            }} >
                Create
            </Button>
        </Form.Item>
        </div>
      
     </Form>
    </div>
    </>
}