import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Header from "../../../components/Header";
import { Button, Tag, message,Modal, Form, Input, Popconfirm, Select, Result } from "antd";
import Icon from "../../../components/Icon";
import {CiCircleChevLeft, CiCircleInfo, CiEdit, CiTrash } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../../../components/load/Loader";


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


export default function UserProfile (){
    
    const [messageApi, contextHolder] = message.useMessage()
    const [data ,setData] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loader ,setLoader] = useState(false)
    const {id} = useParams()  
    const navigator = useNavigate()
  


    const apiGetId = async () =>{
        const respone = await 
        axios.get(`${process.env.REACT_APP_API_KEY}user/${id}`)
        .then( res =>{          
            setData(res.data.userId) }
        )
        .catch((err)=> message.open({
            key : 'updatable',
            type : 'erorr',
            content: `failded ${err.response.data.message}`
        }))
    }

   useEffect(()=>{
       apiGetId()
   }, [])

   const onDelete = async ()=>{
        await axios.delete(`${process.env.REACT_APP_API_KEY}user/${id}`).then(res=>{
            messageApi.open({
                key : 'updatable',
                type : 'success',
                content: `${res.data.message}`
            })
          
           setTimeout(() => {
            setLoader(true)  
           }, (3000));
           navigator("/dashboard/User") 
            setLoader(false)

        }).catch(error => {
            messageApi.open({
                key : 'updatable',
                type : 'error',
                content : `failded to remove user ${data.name}`
            })
            
        })
   }
   const onShowModel = ()=>{
    setIsModalOpen(true);
   }

   const handleOk = () =>{
    setIsModalOpen(false);
   }
   const handleCancel = () => {
    setIsModalOpen(false);
  };


  const renderRole = (role) =>{
     let color = role.lenght > 5 ? "geekblue" : "green"
     if (role == "Owner"){
        color = 'volcano'
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
          {loader ? <Loader></Loader> : null}
          <Link to={`/dashboard/User/`} >
                      <Button className="flex items-center gap-2 border-none px-0" 
                      onClick={()=>navigator("/dashboard/User")}
                     ><Icon Size="1rem" name={<CiCircleChevLeft/>}></Icon>back</Button>
                       </Link> 




                <div className="bg-white rounded-md border-[1px] border-neutral-200 mt-2 p-3">
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
                                        <Button icon={<CiTrash/>} >Delete</Button>
                                                        </Popconfirm>
                           <Button icon={<CiEdit/>} onClick={onShowModel}>Update</Button>
                           <Modal 
                           okType="default"
                           okText="Submit"
                           title="update user info" open={isModalOpen} onOk={handleOk}
                            onCancel={handleCancel}>
                              <Form>
                                <Form.Item name="name" label="Username">
                                    <Input defaultValue={data.name}></Input>
                                </Form.Item>
                                <Form.Item label="Email" name="email">
                                    <Input defaultValue={data.email}></Input>
                                </Form.Item>
                                <Form.Item label="Password">
                                    <Input.Password></Input.Password>
                                </Form.Item>
                                <Form.Item name="role" label="Role">
                                          <Select
                                             mode="multiple"
                                             defaultValue={data.role ?[...data.role] : null}
                                         style={{
                                        width: '100%',
                                                }}
                                        
                                             options={options}
                                                />
                                        </Form.Item>
                              </Form>
                            </Modal>
                       </div>



                       </div>


                       {/* userInfo */}
                       <div className="grid grid-cols-3 gap-3 mt-4 px-4">
                        <span className="inline-flex">
                            <label className="font-semibold pr-2" name="name">Username :  </label>
                            <p>{
                            data.name
                            }</p>
                        </span>
                        <span className="inline-flex">
                            <label className="font-semibold pr-2" name="name">Email :  </label>
                            <p>{
                            data.email
                            }</p>
                        </span>

                        <span className="inline-flex">
                            <label className="font-semibold pr-2" name="name">Role :  </label>
                            <p>{renderRole(data.role? data.role : [])}</p>
                        </span>
                        
                        <span className="inline-flex">
                            <label className="font-semibold pr-2" name="name">CreateAt :  </label>
                            <p>{data.updatedAt}</p>
                        </span>
                       
                           
                         
                           </div>
                         

</div>
    
    </>



}