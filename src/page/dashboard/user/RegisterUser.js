import { useState } from "react";
import {CiCirclePlus} from "react-icons/ci";
import { Button,  Form,Input, Select, message,} from 'antd';
import Header from "../../../components/Header";
import { regiseterUser, updateUser, userInfo } from "../../../api/user";
import {loadingAction} from "../../../redux/loaderSlice"
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import NavigatorButton from "../../../components/navigatorButton";
import { useEffect } from "react";
import { generateRandomNDigits } from "../../../function/generate";
import { getAddress } from "../../../redux/addressSlice";
const { TextArea } = Input;
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

export default function RegisterUser () {     
  
    const [name , setName] = useState()
    const {id} = useParams()
    const [data ,setData] = useState()
    const [email ,setEmail] = useState()
    const [password ,setPassword] = useState()
    const [role , setRole] = useState([])
    const [form] = Form.useForm()
    const [errMessage ,setErrorMessage] = useState('')
    const [messageApi, contextHolder] = message.useMessage()
    const address = useSelector(state => state.address.data)
    const key = 'updatable';
    const dispatch = useDispatch()
    const {Option}  = Select 



    const handleOnGetUser = async () =>{
      try {
          const respone = await userInfo(id)
          if(respone.success){
             form.setFieldsValue(respone.result)
          }else{
              messageApi.open({
                  key,
                  type : 'warning',
                  content : `${respone.message}`
              })
          }

      } catch (error) {
          messageApi.open({
              key,
              type : 'warning',
              content : `${error.message}`
      })
  }

}
  
    const handleSubmit = async (value) => {
      try {
        dispatch(loadingAction.ShowLoading())
        const respone = await regiseterUser(value)
        dispatch(loadingAction.HideLoading())

        if (respone.success){
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
          content : `failed ${error}`
        })
      }
    }
     

  const handleUpdate = async (value)=>{
    try {
        const respone = await updateUser(value, id)
        if(respone.success) {
            messageApi.open({
                key ,
                type : 'success',
                content : `${respone.message}`
            })
            dispatch(loadingAction.ShowLoading())
            setTimeout(()=>{
                dispatch(loadingAction.HideLoading())
            },1000)
        }else{
            messageApi.open({
                key ,
                type : 'warning',
                content : `${respone.message}`
            })
        }
    } catch (error) {
        messageApi.open({
            key ,
            title : 'error',
            content : `${error.data.message}`
        })
    }
}
   
  const handleChange = (value) =>{
      setRole(value)
  }
    
  useEffect(()=>{
     dispatch(getAddress())
    if(id){
      handleOnGetUser()
    }
  },[])
  
  
      return<>
      <NavigatorButton/>
        <div className="bg-neutral-50 rounded-xl p-3">
        <Header text={id ? "update user" : "Add User"}></Header>                      
        <div className="px-3 py-4 ">
       <Form onFinish={(value)=> id ? handleUpdate(value) 
        : handleSubmit(value)} form={form} layout="vertical">
          <div className="grid grid-cols-2 gap-2 my-2">
          <Form.Item
          name="name"
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
    {
      id ? <></> : <Form.Item
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
      <Input 
       onChange={(e)=> setPassword(e.target.value)} />
    </Form.Item> 
    }  
        <Form.Item
          name="phone"
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
      <Select>
        {
          address.map((a,k)=> <Option key={k} value={a.name}>
            {a.name}
          </Option>)
        }
      </Select>
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
          <div className="flex justify-end gap-3 w-full">
            <Form.Item>
              <Button
              className="bg-white border-none"
              onClick={()=> {
                form.setFieldsValue({
                  password : generateRandomNDigits(3)
                })
              }}
              htmlType="button">
                generate password
              </Button>
              </Form.Item>
          <Form.Item>
             <Button htmlType="submit" style={{
                background: '#0f3460',
                color : '#ffff',
            }} > {id ? "Update" : "Create"} </Button>
           </Form.Item>
          </div>
        
      </Form>
                       </div>
      </div>
      </> 


 
}