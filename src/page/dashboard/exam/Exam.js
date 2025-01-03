import React, { useEffect, useState } from "react";
import {  CiCreditCard2  } from "react-icons/ci";
import { Card, Input, message,Button} from "antd";
import Icon from "../../../components/Icon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import { examGet, requestStarExam } from "../../../api/exam";
import moment from "moment";
import { courseAction } from "../../../redux/courseSlice";
import { FiArrowRight } from "react-icons/fi";


export default function Exam () {
const [data ,setData] = useState([])
const [isModalOpen, setIsModalOpen] = useState(false);
const [loading ,setLoading] = useState(true)
const [socket , setSocket] = useState(null)
const [courseFilter, setCourseFilter] = useState('');
const userRole = useSelector(state => state.auth.userRole)[0]
const dispatch = useDispatch()
const { Meta } = Card;


    const getExamAll = async () => {
      dispatch(loadingAction.ShowLoading())
      setLoading(true)
      const response = await examGet()
      setLoading(false)
      dispatch(loadingAction.HideLoading())
      if(response.success){
        setData(response.result)
        const getExamName = 
        response.result.map((exam)=> exam.name)
        dispatch(courseAction.addExamName({examName : getExamName}))
      }else{
        message.error(response)
      }

    }

 
   
    useEffect(()=> {
        getExamAll()
    } ,[])

    return <>
    <div className="flex gap-2">
    </div>
    <div className="my-3  border-neutral-200 py-3
     grid 2xl:grid-cols-4 grid-cols-3 gap-4">
     
        {
       data ? data.map((item ,key)=> (
            <div key={key}>
            <Link to={`/dashboard/Exam/${item._id}`}>
            <Card
            className=
            "bg-neutral-50 font-ubuntu border-none rounded-xl"
            loading={loading}
            >
                <Meta
          title={<div className="flex font-ubuntu justify-between">
            <p className="text-[14px] font-medium">{item.name}</p></div>}
          description={ <> <div className="flex flex-wrap">
        <p className="text-[12px] px-1
         text-gray-600 font-medium font-roboto">{item?.course}</p> 
          <p className="text-[12px] px-1">section : {item?.quiz?.length}</p> 
          <p  className="text-[12px] px-1" >{moment(item?.time).format('LT')}</p>
          </div>
          <div className="mt-1 flex">
          <p  className="text-[12px] px-1">duration : {item.duration}</p>
          <p className="text-[12px]
           text-yellow-400 font-roboto font-semibold">
            {item.description ? item.description : ""}</p>    
          </div>
          <div className="text-end flex justify-end text-gray-900 w-full">
            <Icon Size={14} name={<FiArrowRight/>}></Icon>
            </div>
          </>
          }
        />
            </Card>
            
            </Link>
          
            </div>
          )) : [0]
        }
    </div>
    </>
}


export const examList = () => {
  return <>
  
  
  </>
}
