import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Header from "../../../components/Header";
import { Button, Tag, message,Modal, Form, Input, Popconfirm, Select, Result } from "antd";
import Icon from "../../../components/Icon";
import {CiCircleChevLeft, CiCircleInfo, CiEdit, CiLock, CiTrash } from "react-icons/ci";
import { useEffect, useState } from "react";
import { deleteUser, userInfo, updateUser, resetPassword } from "../../../api/user";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import  moment from 'moment'
import NavigatorButton from "../../../components/navigatorButton";

const options = [{
    label:"admin",
    value :"admin",
    name : 'admin'
  },
  {
    label:"teacher",
    value : "teacher",
    name : 'teacher',
  },
  {
    label : "staff",
    value : "staff",
    name : 'staff'
  }

];


export default function UserProfile (){
    
    const [messageApi, contextHolder] = message.useMessage()
    const [data ,setData] = useState({})
    const [role ,setRole] = useState([])
    const [password ,setPassword] = useState()
    const [name ,setName] = useState()
    const [email ,setEmail] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [changePassword ,setChangePassword] = useState(false)
    const {id} = useParams()  
    const navigator = useNavigate()
    const dispatch = useDispatch()
    const key = 'updatable'

    const handleOnGetUser = async () =>{

        try {
            const respone = await userInfo(id)

            if(respone){
               setData(respone.userId)
               setRole(respone.userId.role)
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

    const handleUpdate = async ()=>{
        try {
            const respone = changePassword ? await resetPassword({
                password : password
            }, id) : await updateUser({
                 name : name,
                 email : email,
                 role : role,

            }, id)

            if(respone) {
                messageApi.open({
                    key ,
                    type : 'success',
                    content : `${respone.message}`
                })
                setIsModalOpen(false);
                dispatch(loadingAction.ShowLoading())
                setTimeout(()=>{
                    handleOnGetUser()
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

   useEffect(()=>{
       handleOnGetUser()
   }, [])

   const onDelete = async ()=>{
        try {
            const userDelete = await deleteUser(id)
            if(userDelete){
                messageApi.open({
                    key : 'updatable',
                    type : 'success',
                    content: `${userDelete.message}`
                })
                dispatch(loadingAction.ShowLoading())
                setTimeout(() => {
                    navigator("/dashboard/User") 
                    dispatch(loadingAction.HideLoading())
                   }, [1000]);
            }else{
                messageApi.open({
                    key : 'updatable',
                    type : 'error',
                    content : `failded to remove user ${userDelete.name}`
                })
            }
        } catch (error) {
            messageApi.open({
                key : 'updatable',
                type : 'error',
                content : `failded to remove user`
            })
        }
   }

   const onShowModel = ()=>{
    setIsModalOpen(true);
   }

   
   const handleCancel = () => {
    setIsModalOpen(false);
  };


  const renderRole = (role) =>{
     let color = role.lenght > 5 ? "geekblue" : "green"
     if (role == "Owner"){
        color = 'volcano'
     }else if (role == "teacher"){
        color = "geekblue"
     }else if (role == "staff"){
        color = 'orange'
     }

     return (
        <>{

            role.map((i,index) => <Tag color={color} key={index}>
               {i.toUpperCase()}
            </Tag>)
        }
       </>
     )
  }
 
    return <>
    {contextHolder}
          <NavigatorButton/>
                <div className="bg-white rounded-md border-[1px] border-neutral-200 p-3">
                <div className="flex justify-between items-center">
                <Header icons={<CiCircleInfo/>} text="User Info"></Header>
                <div className="flex gap-2">
                           <Popconfirm
                             placement="bottomLeft"
                            title="Delete the User"
                                description="Are you sure to remove this user?"
                                okType="default"
                               onConfirm={onDelete}
                                         >
                                        <Button icon={<CiTrash/>}/>
                                                        </Popconfirm>
                           <Button icon={<CiEdit/>} 
                           onClick={()=> {
                            onShowModel()
                            setChangePassword(false)
                            }
                            }></Button>
                           <Button icon={<CiLock/>}  
                           onClick={()=>{
                            setChangePassword(true)
                            onShowModel()
                           }
                            }>
                            reset password</Button>
                           <Modal 
                           okType="default"
                           okText="Update"
                           onOk={handleUpdate}
                           title={changePassword ? "Reset Password" : "update user info"} open={isModalOpen} 
                            onCancel={handleCancel}>
                              <Form layout="vertical">
                                {
                                    changePassword ?  <>
                                <Form.Item label="New Password">
                                    <Input.Password 
                                    onChange={e => setPassword(e.target.value)}></Input.Password>
                                </Form.Item>
                                    
                                    </>   : <>
                                    <Form.Item name="name" label="Username">
                                    <Input  defaultValue={data.name} 
                                    onChange={e => setName(e.target.value)}></Input>
                                </Form.Item>
                                <Form.Item label="Email" name="email">
                                    <Input defaultValue={data.email} 
                                    onChange={e => setEmail(e.target.value)} ></Input>
                                </Form.Item>      
                                <Form.Item label="Role">
                                          <Select
                                             mode="multiple"
                                             value={[...role]}
                                             onChange={value => setRole(value)}
                                          
                                         style={{
                                        width: '100%',
                                                }}
                                        
                                             options={options}
                                                />
                                        </Form.Item>
                                    </>
                                
                                }
                    
                              </Form>
                            </Modal>
                       </div>



                       </div>


                       {/* userInfo */}
                       <div className="grid grid-cols-3 gap-3 mt-4 px-2 text-[14px]">
                        <span className="inline-flex">
                            <label className="font-semibold pr-2 text-gray-600" name="name">Username :  </label>
                            <p>{
                            data.name
                            }</p>
                        </span>
                        <span className="inline-flex">
                            <label className="font-semibold pr-2 text-gray-600" name="name">E-mail :  </label>
                            <p>{
                            data.email
                            }</p>
                        </span>

                        <span className="inline-flex">
                            <label className="font-semibold pr-2 text-gray-600" name="name">Role :  </label>
                            <p>{renderRole(data.role? data.role : [])}</p>
                        </span>
                        
                        <span className="inline-flex">
                            <label className="font-semibold pr-2 text-gray-600" name="name">Create :  </label>
                            <p>{moment(data.createdAt).format('DD/MM/YYYY')}</p>
                        </span>

                        <span className="inline-flex">
                            <label className="font-semibold pr-2 text-gray-600" name="name">Last update :  </label>
                            <p>{moment(data.updatedAt).format('DD/MM/YYYY')}</p>
                        </span>

                        
                       
                           
                         
                           </div>
                         

</div>
    
    </>



}