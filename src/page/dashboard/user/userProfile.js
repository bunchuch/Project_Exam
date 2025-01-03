import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/Header";
import { Tag, message,Modal, Form, Input, Popconfirm,Descriptions,Card } from "antd";
import {CiCircleInfo, CiEdit, CiUser} from "react-icons/ci";
import { useEffect, useState } from "react";
import { deleteUser, userInfo, resetPassword } from "../../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import  moment from 'moment'
import NavigatorButton from "../../../components/navigatorButton";
import Icon from "../../../components/Icon";
import { FiUser } from "react-icons/fi";

export default function UserProfile (){
    const userRole = useSelector(state => state.auth.userRole)[0]
    const [messageApi, contextHolder] = message.useMessage()
    const [data ,setData] = useState({})
    const [loading ,setLoading] = useState(false)
    const [password ,setPassword] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [changePassword ,setChangePassword] = useState(false)
    const {id} = useParams()  
    const {Meta} = Card
    const navigator = useNavigate()
    const dispatch = useDispatch()
    const key = 'updatable'

    const handleOnGetUser = async () =>{
        try {
            const respone = await userInfo(id)
            if(respone.success){
               setData(respone.result)
            }else{
               message.error(respone.data.message)
            }

        } catch (error) {
            message.error(error)
    }

}

    const handleUpdate = async ()=>{
        try {
            const respone = await resetPassword({
                password : password
            }, id)

            if(respone.success) {
                message.success(respone.message)
                setIsModalOpen(false)
                dispatch(loadingAction.ShowLoading())
                setTimeout(()=>{
                    handleOnGetUser()
                    dispatch(loadingAction.HideLoading())
                },1000)
            }else{
              message.error(respone.data.message)
            }
        } catch (error) {
           message.error(error)
        }
    }

   useEffect(()=>{
       handleOnGetUser()
   }, [])

   const onDelete = async ()=>{
        try {
            const userDelete = await deleteUser(id)
            console.log(userDelete)
            if(userDelete.success){
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
                    content : `${userDelete.message}`
                })
            }
        } catch (error) {
            console.log(error)
            messageApi.open({
                key : 'updatable',
                type : 'error',
                content : `${error.stautsText}`
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

     return (
        <>{
            role.map((i,index) => <h1 
            className={`
                    ${role == 'admin' && 'bg-[#16a34a] text-white'}
                    ${role == 'superadmin' && 'bg-[#dc2626] text-white' }
                    ${role == 'teacher' && 'bg-[#0891b2] text-white'}
                    ${role == 'staff' && 'bg-[#fcd34d]  text-gray-600'}
                    ${role == 'developer' && 'bg-[#312e81] text-white'}
            mt-2 inline-block  px-4
                 
                rounded-md text-center mx-3 text-[24px]`}
             key={index}>
               {i.toUpperCase()}
            </h1>)
        }
       </>
     )
  }
 
    return <>
    {contextHolder}
     <NavigatorButton/>
     <div className="my-4 font-ubuntu flex w-full text-[14px] justify-between items-center flex-wrap gap-3 mx-2">
                <div className="flex gap-3 flex-wrap items-center">
                <div  className="w-[3rem] bg-neutral-50 border-gray-300 my-2 rounded-full p-2 h-[3rem]">
                  <Icon color={"#d1d5db"} name={<FiUser/>}></Icon>    
                </div>
                <div>
                <p className="font-semibold">{data?.name}</p>
                <div className="flex items-center gap-2">
                Remarks :
            <p className="font-semibold text-end">  
                {data?.role}
                </p>
         </div>
                </div>
                </div>
                <div className="flex justify-between items-center">
                {
                     userRole === 'admin' || userRole
                     === 'superadmin' ? <div className="flex gap-1">
                           <Popconfirm
                             placement="bottomLeft"
                            title="Delete the User"
                                description="Are you sure to remove this user?"
                                okType="default"
                               onConfirm={onDelete}
                                         >
                                        <button
                                        className="bg-rose-500 px-3 rounded-md active:bg-rose-600
                                        text-[12px] py-0.5 text-white"
                                        >Delete</button>
                                                        </Popconfirm>
                           <button
                           className="bg-gray-900 text-gray-50 px-3 rounded-md active:bg-gray-300
                           text-[12px] py-0.5"
                           onClick={()=> {
                              navigator(`/dashboard/user/update/${id}`)
                            }
                            }>Edit</button>
                           <button className="bg-gray-50 border
                            border-gray-50 text-gray-900 px-3 rounded-md
                            active:bg-gray-300
                             text-[12px] py-0.5 "
                           onClick={()=>{
                            setChangePassword(true)
                            onShowModel()
                           }
                            }>
                            Reset Password</button>
                           <Modal 
                           okType="default"
                           okText="Update"
                           onOk={handleUpdate}
                           title={"Reset Password"} open={isModalOpen} 
                            onCancel={handleCancel}>
                              <Form layout="vertical">
                                <Form.Item label="New Password">
                                    <Input.Password 
                                    onChange={e => setPassword(e.target.value)}></Input.Password>
                                </Form.Item>
                              </Form>
                            </Modal>
                       </div> : <></>
                    }
                       </div>
            </div>
            <div className="border-[1px] border-gray-50"></div>
       
          <h1 className="text-gray-600 mt-4 inline-flex gap-2 items-center">
                     <Icon Size={20} name={<CiCircleInfo/>}></Icon>
                     User Info</h1>
         
                     <div className="bg-neutral-50 gap-2 flex flex-col p-4 mt-4 text-[14px] border-neutral-200 rounded-md">
                         <span className="inline-flex tracking-wide text-slate-400 gap-2 "> 
                             Telephone : <p className="text-gray-600">{data?.phone ? data?.phone
                       : "(+000)-000-000"}</p> </span>
         
                         <span className="inline-flex tracking-wide text-slate-400 gap-2 "> 
                             E-mail : <p className="text-gray-600">{data?.email ? data?.email
                       : "none"}</p> </span>
                          <span className="inline-flex tracking-wide text-slate-400 gap-2 "> 
                             Current Address : <p className="text-gray-600">{data?.email ? data?.email
                       : "none"}</p> </span>
                          <span className="inline-flex tracking-wide text-slate-400 gap-2 "> 
                             Address : <p className="text-gray-600">{data?.address ? data?.address : "default"} </p> </span>
                         <span className="inline-flex tracking-wide text-slate-400 gap-2 "> 
                             Enroll Work : <p className="text-gray-600"> {moment(data.createdAt).format('DD/MM/YYYY')}</p> </span>
                         <span className="inline-flex tracking-wide   text-slate-400 gap-2 "> 
                             Last Update : <p className="text-gray-600"> {moment(data.updatedAt).format('DD/MM/YYYY')}</p></span>
                     </div>
    
    </>



}