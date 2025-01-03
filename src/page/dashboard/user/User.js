import React, {useEffect, useState} from "react";
import { Link, } from "react-router-dom";
import { columnsUser } from "../componet/ColumsItem";
import { CiUser } from "react-icons/ci";
import {  Table,message  } from 'antd';
import Header from "../../../components/Header";
import { userGet } from "../../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import { FiUser } from "react-icons/fi";


export default function User () {

    const [loading, setLoading] = useState(false);
    const [data ,setData] = useState()
    const userRole = useSelector(state => state.auth.userRole)[0]
    const dispatch = useDispatch()  

    const GetUserInof = async () => {
      try {
         dispatch(loadingAction.ShowLoading())
         const response = await userGet()
         if(response.success){
          setData(response.data)
         }else{
          setData(null)
          message.error(response.data.messageApi)
         }
         dispatch(loadingAction.HideLoading())
      } catch (error) {
         message.error(error)
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
            <div className="flex gap-3 py-2 justify-between">
              <Header icons={<FiUser/>} text="User"/>
            <div className="gap-2 flex">
              {
                 userRole === 'admin' || userRole === 'superadmin' ?
                  <Link to={`/dashboard/User/Add`} >
                <button className="text-gray-50 px-3 bg-gray-900  
                rounded-md 
             text-[12px] py-1">
                 Add user
        </button></Link> : <></>
            }
        <button className=" px-3 
        rounded-md border-none border-1 bg-neutral-50 active:bg-neutral-200
             text-[12px] py-1 " 
           onClick={start} loading={loading}>
        Reload
        </button>
            </div>
            </div>
       
        <Table 
         columns={columnsUser}
          dataSource={data} />
    </div>
}








