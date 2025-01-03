import React from "react";
import {useParams ,Link} from "react-router-dom"
import { loadingAction } from "../../../redux/loaderSlice";
import { getGroupReport, deleteReport } from "../../../api/report";
import { useEffect } from "react";
import {message , Card, Empty, Button, Popconfirm} from 'antd'
import {useDispatch} from 'react-redux'
import { useState } from "react";
import Icon from "../../../components/Icon";
import {CiRead, CiTrash, CiViewBoard} from 'react-icons/ci'
import moment from 'moment'
import { FiArrowRight, FiTrash } from "react-icons/fi";



export default function StudentExam (){
const {id} = useParams()
const dispatch = useDispatch()
const [report ,setReport] = useState([])
const [loading , setLoading] = useState(false)
const {Meta} = Card
const [messageApi,contextHolder] = message.useMessage()

 //find user with exam report
 const getData = async ()=> {
    try {
      setLoading(true)
      const response = await getGroupReport({userId : id}) 
      setLoading(false)
      if(response.success){
          setReport(response.result)
      }else{
        messageApi.error(response.data.message)
      }
    } catch (error) {
     messageApi.error(error) 
    }
 }

 //handle delte report for student
 const handleDeleteReport = async (id) => {
    try {
      const response = await deleteReport(id)
      if(response.success){
        messageApi.success(response.message)
      }else{
        messageApi.error(response.data.message)
      }
    } catch (error) {
      messageApi.error(error)
    }
 }


useEffect(()=> {
    getData()
}, [])

    return <>
    <div className="grid grid-cols-4 gap-2">
    {
    report ? report?.map((items, key)=>
    <>
     <Card
     loading={loading}
     className="bg-neutral-50 text-gray-600 font-ubuntu border-none rounded-xl"
     key={key}>
      <div className="flex gap-2 justify-between">
      <p className="text-[14px] font-ubuntu font-semibold">{items?.exam_title}</p>
      <Popconfirm
      okType="default"
      title="Are you sure to delete student record ?"
      onConfirm={()=>handleDeleteReport(items._id)}
      >
      <button 

        className="">
          <Icon
          color={"red"}
          Size={"1rem"}
          name={<FiTrash/>}
          />
          </button>  
      </Popconfirm>
        
      </div>
      
        <p className="text-[14px] font-ubuntu font-medium">{moment(items?.exam_date).format('LL')}</p>
      
          <Link className="flex justify-end mt-2"
          to={`/dashboard/student/report/${items._id}`}>
            <p className="text-variation-500 px-2 py-[1.5px] text-[14px]
             font-semibold hover:bg-neutral-50  rounded-lg">
            <Icon name={<FiArrowRight/>} Size={16}/>
            </p>
        </Link>
      </Card> 
      </>
      ) : <Empty className="flex justify-center"></Empty>
    }
    </div> 
    
    </>
}