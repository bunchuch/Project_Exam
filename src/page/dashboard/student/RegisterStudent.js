import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/Icon";
import { CiAlignBottom, CiBookmarkPlus, CiCircleChevLeft } from "react-icons/ci";
import { Button, Form, Input, Select, Space , DatePicker} from "antd";
import Header from "../../../components/Header";
import { generateRandomNDigits } from "../../../function/generate";
import axios from "axios";
import moment from "moment"
import NavigatorButton from "../../../components/navigatorButton";
const {Option}  = Select 


export default function RegisterStudent (){

    const navigator = useNavigate()
    const [form] = Form.useForm()
    const [groupname , setGroupname] = useState([])
    const [address ,setAddress] = useState([])
    const dateFormat = 'YYYY/MM/DD';

    // const handleChangeDate = {
    //     dateofbirth : moment('2020-06-09T12:40:14+0000')
    // }
     
    const getCourse = async ()=>{
        await axios.get(`${process.env.REACT_APP_API_KEY}group`).then(res => {
          const value = res.data.groups.map(i => i.group)
          setGroupname(value)
        })
       
    }

    const getAddress = async ()=>{
        await axios.get(`${process.env.REACT_APP_API_KEY}address`).then(res => {
            setAddress(res.data.address)    
        })
    }

    const onFinish = async (value)=>{
        console.log(value)
         axios.post(`${process.env.REACT_APP_API_KEY}student/create`, value).then(res=>{
            alert(res.data.message)
        }).catch((err)=> {
            console.log(err)
            alert(err.response.data.message)
        })
    }
    useEffect(()=>{
        getCourse()
        getAddress()
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
    <div className="bg-white border-neutral-200 border rounded-lg p-3">
    <Header icons={<CiAlignBottom/>} text="Register Student"/>

     <div className="px-3 py-4">
     <Form 
     onFinish={onFinish}
     name="register"
     form={form} 
     autoComplete="off"
     layout="vertical">
        <div className="grid grid-cols-4 gap-2">
                <Form.Item name="firstname" label="Firstname">
                <Input />
                </Form.Item>
                <Form.Item name="lastname" label="Lastname">
                <Input />
                </Form.Item>
                <Form.Item name="username" label="Username">
                <Input />
                </Form.Item>
                <Form.Item name="password" label="Password">
                <Input/>
                </Form.Item>
                <Form.Item name="address" label="Address">
                  <Select>
                    {
                        address.map((a, k) => <Option key={k} value={a.name}>
                            {a.name}
                        </Option>)
                    }
                  </Select>
                </Form.Item>
                <Form.Item  name="dateBirth"  label="Date of Birth">
                <DatePicker   style={{width: "100%"}} 
                onChange={(date)=> console.log(date)} picker="day" format={dateFormat}
                placement={"topRight"}
                />
                </Form.Item>
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
                            groupname.map((i, k)=>
                             <Option key={k} value={i}>{i}</Option>)
                        }
                    </Select>
                </Form.Item>
        </div>
        <Form.Item name="Description" label="Description">
                    <Input.TextArea style={{
                        height : "10rem"
                    }}/>
                </Form.Item>

                <div className="flex justify-between gap-2">
                <Button htmlType="button"
                 onClick={onFill} style={{
                background: '#f43f5e',
                color : "#ffff"
            }}>
                generate username & password
            </Button>
            <div className="flex gap-2">
            <Button htmlType="reset"
                 onClick={()=>{
                    form.resetFields()}} style={{
                background: '#fde047',
            }}>
                Reset
            </Button>
            <Button 
            htmlType="submit"
            style={{
                background: '#0f3460',
                color : '#ffff',
            }}>
                Create
            </Button>
            </div>
    
                </div>
               
               
            </Form>

           
        </div>

    
    </div>
    
    </> 


}