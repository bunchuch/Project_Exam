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
          <div className="grid gap-4 grid-cols-2">
          <Card
        loading={loading}
        className="border-none rounded-xl bg-neutral-50">
            <Meta
            className="flex items-center"
            avatar={
                <div 
                className="w-[10rem] bg-neutral-50
                 rounded-full p-2 h-[10rem]">
                <Icon
                color={"#0f3460"}
                name={
                <CiUser/>
                }                
                >
                </Icon>
                </div>
            }
            title={
                <h1 className="font-semibold text-gray-600 mx-3 text-[34px]">
                    { data?.name}
                </h1>
               }
            description={
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
                                        >delete</button>
                                                        </Popconfirm>
                           <button
                           className="bg-yellow-400 text-gray-900 px-3 rounded-md active:bg-yellow-300
                           text-[12px] py-0.5"
                           onClick={()=> {
                              navigator(`/dashboard/user/update/${id}`)
                            }
                            }>update</button>
                           <button className="bg-green-600 px-3 rounded-md
                            active:bg-green-50
                             text-[12px] py-0.5 text-white" 
                           onClick={()=>{
                            setChangePassword(true)
                            onShowModel()
                           }
                            }>
                            reset password</button>
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
               }
            >
            </Meta>
            </Card>        

          <Card
        loading={loading}
        className="border-none rounded-xl bg-neutral-50">
            <Meta
            className="flex flex-col  mt-2 items-start"
            avatar={
                <div>
                <h1 className="font-semibold
                 text-gray-600 mx-3 text-[34px]">Remarks :</h1>
                </div>
            }
            description={
            <> {data?.role ? renderRole(data?.role): "none"}</>
               }
            >
            </Meta>
            </Card> 
               </div>
                <div className="bg-neutral-50
                 rounded-xl  mt-4 p-3">
                       {/* userInfo */}
             <Descriptions title='descriptions' className="mt-5 px-3 pb-4" >
             <Descriptions.Item label="Telephone">{data?.phone ? data?.phone
              : "(+000)-000-000"}</Descriptions.Item>
             <Descriptions.Item label="email">{data?.email}</Descriptions.Item>
             <Descriptions.Item label="Live">
                {data?.address ? data?.address : "location"}</Descriptions.Item>
            <Descriptions.Item label="Address">
                <Tag>{data?.address ? data?.address : "default"}</Tag>
                </Descriptions.Item>

                <Descriptions.Item label="enroll work">
                {moment(data.createdAt).format('DD/MM/YYYY')}
                </Descriptions.Item>
                <Descriptions.Item label="Last update">
                {moment(data.updatedAt).format('DD/MM/YYYY')}
                </Descriptions.Item>
                </Descriptions>
                            
</div>
    
    </>



}