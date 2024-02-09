import React from "react";
import {useParams ,Link} from "react-router-dom"
import { loadingAction } from "../../../redux/loaderSlice";
import { getGroupReport, deleteReport } from "../../../api/report";
import { useEffect } from "react";
import {message , Card, Empty, Button} from 'antd'
import {useDispatch} from 'react-redux'
import { useState } from "react";
import Icon from "../../../components/Icon";
import {CiRead, CiTrash, CiViewBoard} from 'react-icons/ci'
import moment from 'moment'



export default function StudentExam (){
const {id} = useParams()
const dispatch = useDispatch()
const [report ,setReport] = useState([])
const {Meta} = Card
const [messageApi,contextHolder] = message.useMessage()

 //find user with exam report
 const getData = async ()=> {
    try {
      dispatch(loadingAction.ShowLoading())
      const response = await getGroupReport({userId : id}) 
      dispatch(loadingAction.HideLoading())
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
     className="bg-neutral-50 border-none rounded-xl"
     key={key}>
        <Meta
          title={<div className="flex justify-between">{items?.exam_title}
          <button onClick={()=> handleDeleteReport(items._id)} 
        className="bg-white border border-gray-300 p-1 rounded-full">
          <Icon
          color={"red"}
          Size={"1rem"}
          name={<CiTrash/>}
          />
          </button>    
          </div>}
          description={moment(items?.exam_date).format('LL')}
        />
          <Link className="flex justify-end mt-2"
          to={`/dashboard/student/report/${items._id}`}>
            <p className="text-variation-500 px-2 py-[1.5px] text-[14px]
             font-semibold hover:bg-neutral-50  rounded-lg">
             view
            </p>
        </Link>
      </Card> 
      </>
      ) : <Empty className="flex justify-center"></Empty>
    }
    </div> 
    
    </>
}