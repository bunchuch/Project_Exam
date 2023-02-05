import React, {useEffect, useState} from "react";
import { Link, } from "react-router-dom";
import { columnsUser } from "../componet/ColumsItem";
import { CiCirclePlus, CiUndo, CiUser } from "react-icons/ci";
import Icon from "../../../components/Icon";
import { Button, Table,Input,message  } from 'antd';
import Header from "../../../components/Header";
import { userGet } from "../../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import { courseAction } from "../../../redux/courseSlice";
const role = [ "Admin" , "Teacher", "Staff"]

export default function User () {

    const [loading, setLoading] = useState(false);
    const [data ,setData] = useState()
    const [messageApi, contextHolder] = message.useMessage()
    const dispatch = useDispatch()  

    const GetUserInof = async () => {
      try {
         dispatch(loadingAction.ShowLoading())
         const response = await userGet()
         const teachername = response.data ? 
         response.data.filter(i => i.role[0] == "teacher").map( i => i.name): null
         dispatch(courseAction.addTeacher({teacher :teachername}))
         if(response.data.length !== 0){
          setData(response.data)
         }else{
          setData(null)
          messageApi.open({
            key : 'update',
            type : "warning",
            content : `${response.message}`
          })
         }
         dispatch(loadingAction.HideLoading())
      } catch (error) {
        console.log(error)
         messageApi.open({
          key :"updatable",
          type : 'error',
          content : `${error}`
         })
         dispatch(loadingAction.HideLoading())
      }
    }

    useEffect(()=> {
    GetUserInof()
    }, [])
   
    const start = () => {
        setLoading(true);
        GetUserInof()
        setTimeout(()=>{
          setLoading(false)
        },[2000])
     
      
      }

    return <div className="">
      {contextHolder}
            <div className="flex gap-3 py-2 justify-between">
              <Header icons={<CiUser/>} text="User"/>
            <div className="gap-2 flex">
              <Link to={`/dashboard/User/Add`} >
                <Button icon={
                     <Icon Size={"1rem"} name={<CiCirclePlus/>}/>
               }>
                 Add user
        </Button>
        </Link>

        <Button icon={<CiUndo/>} onClick={start} loading={loading}>
        Reload
        </Button>
            </div>
            </div>
       
        <Table bordered
         columns={columnsUser}
          dataSource={data} />
    </div>
}








