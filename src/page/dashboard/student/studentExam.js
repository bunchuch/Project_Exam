import React from "react";
import {useParams ,Link} from "react-router-dom"
import { loadingAction } from "../../../redux/loaderSlice";
import { getGroupReport, deleteReport } from "../../../api/report";
import { useEffect } from "react";
import {message , Card, Empty} from 'antd'
import {useDispatch} from 'react-redux'
import { useState } from "react";
import Icon from "../../../components/Icon";
import {CiTrash} from 'react-icons/ci'
import moment from 'moment'



export default function StudentExam (){
const {id} = useParams()
const dispatch = useDispatch()
const [report ,setReport] = useState([])
const {Meta} = Card

 //find user with exam report
 const getData = async ()=> {
    try {
      dispatch(loadingAction.ShowLoading())
      const response = await getGroupReport({userId : id}) 
      dispatch(loadingAction.HideLoading())
      if(response.success){
          setReport(response.result)
      }else{
        message.error(response.data.message)
      }
    } catch (error) {
     message.error(error) 
    }
 }

 //handle delte report for student
 const handleDeleteReport = async (id) => {
    try {
      const response = await deleteReport(id)
      if(response.success){
        message.success(response.message)
      }else{
        message.error(response.data.message)
      }
    } catch (error) {
      message.error(error)
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
     <Card key={key}>
        <Meta
          title={<div className="flex justify-between">{items?.exam_title}
          <button onClick={()=> handleDeleteReport(items._id)} 
        className="bg-neutral-50 border border-neutral-200 p-1 rounded-full">
          <Icon
          color={"red"}
          Size={"1.2rem"}
          name={<CiTrash/>}
          />
          </button>    
          </div>}
          description={moment(items?.exam_date).format('LL')}
        />
          <Link className="flex justify-end mt-2"
          to={`/dashboard/student/report/${items._id}`}>
            <p className="bg-variation-500 text-white px-2 py-[1.5px] text-[14px]
             hover:font-semibold border border-gray-300 rounded-lg">
             open
            </p>
        </Link>
      </Card> 
      </>
      ) : <Empty className="flex justify-center"></Empty>
    }
    </div> 
    
    </>
}