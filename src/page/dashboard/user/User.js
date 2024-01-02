import React, {useEffect, useState} from "react";
import { Link, } from "react-router-dom";
import { columnsUser } from "../componet/ColumsItem";
import { CiUser } from "react-icons/ci";
import {  Table,message  } from 'antd';
import Header from "../../../components/Header";
import { userGet } from "../../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";


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
              <Header icons={<CiUser/>} text="User"/>
            <div className="gap-2 flex">
              {
                 userRole === 'admin' || userRole === 'superadmin' ?
                  <Link to={`/dashboard/User/Add`} >
                <button className="bg-variation-500 px-3 
                rounded-md active:bg-variation-400
             text-[12px] py-1 text-white">
                 Add user
        </button></Link> : <></>
            }
        <button className="bg-yellow-300 px-3 
        rounded-md active:bg-yellow-400
             text-[12px] py-1 " 
           onClick={start} loading={loading}>
        Reload
        </button>
            </div>
            </div>
       
        <Table bordered
         columns={columnsUser}
          dataSource={data} />
    </div>
}








