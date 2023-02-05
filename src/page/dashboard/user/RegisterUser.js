import { useState } from "react";
import axios from "axios";
import { CiCircleChevLeft, CiCirclePlus} from "react-icons/ci";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon"
import { Button,  
    Form,Input
    ,  Select,
    Switch, 
    message,
    } from 'antd';
import Header from "../../../components/Header";
    const { TextArea } = Input;





export default function RegisterUser () {

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({ layout }) => {
      setFormLayout(layout);
    };
  
     
  
    const [name , setName] = useState()
    const [email ,setEmail] = useState()
    const [password ,setPassword] = useState()
    const [role , setRole] = useState([])
    const [errMessage ,setErrorMessage] = useState('')
    const [messageApi, contextHolder] = message.useMessage()
    const key = 'updatable';
  
  
  
    const handleSubmit = async e => {
      e.preventDefault(e)
      axios.post(`${process.env.REACT_APP_API_KEY}user/register`, {
          name : name ,
          email: email ,
          password: password ,
          role : role,
          
      }).then(response => {
       
          messageApi.open({
              key,
              type : 'loading',
              content: 'Loading ..'
          });
          setTimeout(()=>{
              messageApi.open({
                  key,
                  type:'success',
                  content: 'Loaded!',
                  duration : 2
              })
          },[1000])
      }).catch(error => {
          messageApi.open({
              key,
              type : 'error',
              content : `failed ${error.response.data.message}`
          })
          setErrorMessage(error.response.data.message)
      })
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
        <Header icons={<CiCirclePlus/>} text="Add User"></Header>
        <div className="bg-white rounded-md border-[1px] border-neutral-200 mt-2 p-3">
                      <Link to={`/dashboard/User/`} >
                      <Button className="flex items-center gap-2 border-none" 
                      onClick={()=>navigator("/dashboard/User")}
                     ><Icon Size="1rem" name={<CiCircleChevLeft/>}></Icon>back</Button>
                       </Link>
        <div className="px-3 py-4 ">
       <Form>
          <div className="grid grid-cols-2 gap-3 my-2">
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
        
        <Form.Item name="role" label="Role">
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