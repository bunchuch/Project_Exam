import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "../../../components/Icon";
import { CiAlignBottom, CiBookmarkPlus, CiCircleChevLeft } from "react-icons/ci";
import { Button, Form, Input, Select, Space , DatePicker, message} from "antd";
import Header from "../../../components/Header";
import { generateRandomNDigits } from "../../../function/generate";
import axios from "axios";
import NavigatorButton from "../../../components/navigatorButton";
import { createStudent, getStudent, updateStudent } from "../../../api/student";
import {useDispatch, useSelector} from "react-redux"
import { getAddress } from "../../../redux/addressSlice";
import axiosInstance from "../../../api";
const {Option}  = Select 


export default function RegisterStudent (){

    const navigator = useNavigate()
    const {stuid} = useParams()
    const [form] = Form.useForm()
    const [data ,setData] = useState([])
    const dispatch = useDispatch()
    const dateFormat = 'YYYY/MM/DD';
    const address = useSelector (state => state.address.data)
    const courseName = useSelector(state => state.course.courseName)
     

    const findStudent = async () => {
            try {
                const response = await getStudent(stuid)
                if(response.success){
                    if(stuid){
                        form.setFieldsValue(response.result)
                    }
                }else{
                    message.error(response.data.message)
                }
            } catch (error) {
                message.error(error)
            }
    }
    const onFinish = async (value)=>{
        try {
            const response = stuid ? await updateStudent(stuid , value) :
            await createStudent(value)
            if(response.success){
               message.success(response.message)
                
            }else{
                message.error(response.data.message)
            }
        } catch (error) {
            message.error(error)
        }
    }
    useEffect(()=>{
        dispatch(getAddress())
        if(stuid){
            findStudent()
        }
        
       
        
    }, [])

    const onFill = ()=>{
        const generatePassword = generateRandomNDigits(3)
        form.setFieldsValue({
            username : form.getFieldsValue().firstname 
            + form.getFieldsValue().lastname,
            password : generatePassword.toString()
        })
    }



    return <>
   <NavigatorButton/>
    <div className="bg-neutral-50 rounded-xl p-3">
    <Header  text={stuid ? "update student" : "Register Student"}/>

     <div className="px-3 py-4">
     <Form 
     onFinish={onFinish}
     name="register"
     form={form} 
     autoComplete="off"
     layout="vertical">
        <div className="grid grid-cols-4 gap-2">
                <Form.Item 
                
                rules={[
                    {
                        required:true,
                        message : 'please enter name'
                    }
                ]}
                
                name="firstname" label="Firstname">
                <Input />
                </Form.Item>
                <Form.Item name="lastname" label="Lastname">
                <Input />
                </Form.Item>
                <Form.Item name="username" label="Username">
                <Input />
                </Form.Item>

                <Form.Item name="gender" label="gender">
                <Select>
                    {
                     ['M', 'F', 'optional'].map((gender,key)=> 
                        <Option value={gender} 
                        key={key}/>
                     )
                    }
                </Select>
                </Form.Item>
                {
                    stuid ? <></> : <Form.Item name="password" label="Password">
                    <Input/>
                    </Form.Item>
                }
            
                <Form.Item name="address" label="Address">
                  <Select>
                    {
                        address.map((a, k) => <Option key={k} value={a.name}>
                            {a.name}
                        </Option>)
                    }
                  </Select>
                </Form.Item>
                {
                stuid ? <></> : 
                <Form.Item  name="dateBirth"  label="Date of Birth">
                <DatePicker   style={{width: "100%"}} 

                picker="day" format={dateFormat}
                placement={"topRight"}
                />
                </Form.Item>
}   
                <Form.Item name="email" label="Email">
                <Input />
                </Form.Item>
                <Form.Item name="parentPhone" label="Parent contact">
                <Input />
                </Form.Item>
                <Form.Item name="personalPhone" label="Personal contact">
                <Input />
                </Form.Item>
                <Form.Item name="courseName" label="Assign course">
                    <Select placeholder="select course">
                        {
                          courseName.map((i, k)=>
                             <Option key={k} value={i}>{i}</Option>)
                        }
                    </Select>
                </Form.Item>
        </div>
        <Form.Item name="description" label="Description">
                    <Input.TextArea style={{
                        height : "10rem"
                    }}/>
                </Form.Item>

                <div className="flex justify-between gap-2">
                    {stuid ? <></> :
                <Button htmlType="button"
                className="rounded-lg bg-gray-900 text-gray-50"
                 onClick={onFill}>
               auto fill username and password
            </Button>
                }
            <div className="flex gap-2">
            <Button htmlType="reset"
            className="rounded-lg bg-gray-300 "
                 onClick={()=>{
                    form.resetFields()}}>
                Reset
            </Button>
            <Button 
            htmlType="submit"
            className="rounded-lg text-gray-50 bg-gray-900">
                Submit
            </Button>
            </div>
    
                </div>
               
               
            </Form>

           
        </div>

    
    </div>
    
    </> 


}