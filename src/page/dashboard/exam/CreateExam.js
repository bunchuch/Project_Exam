import { Form, Input, Select, message, Tag, Button, InputNumber, TimePicker, DatePicker } from "antd";
import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/Header";
import { CiCircleChevLeft, CiRuler, CiUser } from "react-icons/ci";
import Icon from "../../../components/Icon";
import { useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import NavigatorButton from "../../../components/navigatorButton";



const types = [{label :"Mqc" ,value : "Mqc"}, 
{label:"Blank", value: "Blank"},
 {label :"Writing", value : "Writing"}]

export default function CreateExam(){
    
    const [title ,setTitle] = useState('')
    const [type , setType] = useState('')
    const [Id ,setId] = useState('')
    const [render, setRender] = useState()
    const [messageApi, contextHolder] = message.useMessage()
    const navigate = useNavigate()
    const courseName = useSelector(state => state.course.courseName)
    const {id} = useParams()
    const key = 'updatable'
    const {Option} = Select

    const onCreate = async (value)=>{
        console.log(value)
        axios.post(`${process.env.REACT_APP_API_KEY}exam/create/`,value)
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


    return <div> 
    {contextHolder}
   <NavigatorButton/>
    <div className="bg-white rounded-lg
     border-[1px] border-neutral-200 p-4">
        <Header text={"Create Exam"} icons={<CiRuler/>}/>
    <Form
    onFinish={onCreate}
    layout="vertical"
    className="mt-4"
    >
            <Form.Item label="name" name="name">
                <Input onChange={e => setTitle(e.target.value)}></Input>
            </Form.Item>
            <div className="flex gap-3">
            <Form.Item label="start_Date" name="startDate">
            <DatePicker/>
            </Form.Item>
            <Form.Item label="End_Date" name="endDate">
             <DatePicker/>
            </Form.Item>
            </div>
           
            <Form.Item label="Exam duration" name="time">
                <InputNumber className="w-full"/>
            </Form.Item>
            <Form.Item label="Pass Percentage(%)" name="pass_score">
                <InputNumber className="w-full"/>
            </Form.Item>
            <Form.Item label="Assign Groups" name="course">
                <Select>
                    {
                        courseName.map((i, k) => 
                        <Option key={k} value={i}>{i}</Option>
                            )
                    }
                   
                </Select>
            </Form.Item>

            <Form.Item label="Description" name="description">
               <TextArea></TextArea>
            </Form.Item>

            <Form.Item className="flex justify-end">
                <Button style={{
                    color : "#ffff"
                }} className="bg-variation-500 " htmlType="submit">
                    Create
                </Button>
            </Form.Item>
         </Form>
    </div>
  
     
    
    </div>
}