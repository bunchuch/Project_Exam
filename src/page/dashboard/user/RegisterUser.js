import { useState } from "react";
import axios from "axios";
import { CiCircleChevLeft, CiCirclePlus} from "react-icons/ci";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon"
import { Button,  Form,Input,  Select,Switch, message,} from 'antd';
import Header from "../../../components/Header";
import { regiseterUser } from "../../../api/user";
import {loadingAction} from "../../../redux/loaderSlice"
import { useDispatch } from 'react-redux';
import NavigatorButton from "../../../components/navigatorButton";
const { TextArea } = Input;


export default function RegisterUser () {     
  
    const [name , setName] = useState()
    const [email ,setEmail] = useState()
    const [password ,setPassword] = useState()
    const [role , setRole] = useState([])
    const [errMessage ,setErrorMessage] = useState('')
    const [messageApi, contextHolder] = message.useMessage()
    const key = 'updatable';
    const dispatch = useDispatch()
  
  
    const handleSubmit = async () => {
      try {
        // dispatch(loadingAction.ShowLoading())
        const respone = await regiseterUser({
          name : name ,
          email : email,
          password : password,
          role : role
        })
        // dispatch(loadingAction.HideLoading())

        if (respone){
           messageApi.open({
            key,
            type : 'success',
            content : `${respone.message}`
           })
        } else {
          messageApi.open({
            key,
            type : 'error',
            content : `failed ${respone.message}`
          })
        }

      } catch (error) {
        dispatch(loadingAction.HideLoading())
        messageApi.open({
          key,
          type : 'error',
          content : `failed ${error.message}`
        })
      }
    }
     
    const options = [{
      label:"admin",
      value :"admin",
    },
    {
      label:"teacher",
      value : "teacher"
    },
    {
      label : "staff",
      value : "staff",
    }
  
  ];
   
  const handleChange = (value) =>{
      setRole(value)
  }
  
  
  
  
  
      return<>
      <NavigatorButton/>
        <div className="bg-white rounded-md border-[1px] border-neutral-200 p-3">
        <Header icons={<CiCirclePlus/>} text="Add User"></Header>                      
        <div className="px-3 py-4 ">
       <Form layout="vertical">
          <div className="grid grid-cols-2 gap-2 my-2">
          <Form.Item
          name="Username"
          label="Username"
          rules={[
            {
              type: 'username',
              message: 'The input is not valid username',
            },
            {
              required: true,
              message: 'Please input your username',
            },
          ]}
        >
          <Input onChange={e => setName(e.target.value)} />
        </Form.Item>
          <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input onChange={(e)=> setEmail(e.target.value)} />
        </Form.Item>
  
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input  defaultValue={["puctak"]} 
           onChange={(e)=> setPassword(e.target.value)} />
        </Form.Item>
        
        <Form.Item
          name="Phone"
          label="Phone number"
        >
          <Input />
        </Form.Item>
        <Form.Item
        rules={[{
          required : true,
          message : "Please Input Cuurect address"
        }]}
          name="address"
          label="currect address"
        >
          <Input />
        </Form.Item>

        <Form.Item 
        
        name="role" label="Assign Role">
          <Select
        mode="multiple"
        style={{
          width: '100%',
        }}
        placeholder="Please select"
        onChange={handleChange}
        options={options}
      />
        </Form.Item>
          </div>
          {contextHolder}
          <div className="flex justify-end w-full">
          <Form.Item>
             <Button style={{
                background: '#0f3460',
                color : '#ffff',
            }} onClick={handleSubmit}>Create</Button>
           </Form.Item>
          </div>
        
      </Form>
                       </div>
      </div>
      </> 


 
}