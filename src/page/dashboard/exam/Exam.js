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
    <p className="mt-1 text-[14px]  text-gray-300">✨ 
    click on box for Navigate to exam info</p>
    </div>
    <div className="my-3  border-neutral-200 py-3
     grid 2xl:grid-cols-4 grid-cols-3 gap-4">
     
        {
       data ? data.map((item ,key)=> (
            <div key={key}>
            <Link to={`/dashboard/Exam/${item._id}`}>
            <Card loading={loading}
            >
                <Meta
          avatar={<div className="bg-neutral-50 p-2
           border-neutral-200 border-[1px]  rounded-full">
            <Icon color={"#0f3460"}
         Size="1.6rem" name={<CiCreditCard2/>}></Icon>
            </div>}
          title={<div className="flex justify-between"><p>{item.name}</p></div>}
          description={ <> <div className="flex flex-wrap">
            {/* <>
            {
              item.course ? <Tag color="purple">{item.course}</Tag> :"none course"
            }
        </> */}
        <p className="text-[12px] px-1
         text-variation-500 font-bold font-roboto">{item?.course}</p> 
          <p className="text-[12px] px-1">section : {item?.quiz?.length}</p> 
          <p  className="text-[12px] px-1" >{moment(item?.time).format('LT')}</p>
          </div>
          <div className="mt-1 flex">
          <p  className="text-[12px] px-1">duration : {item.duration}</p>
          <p className="text-[12px]
           text-yellow-400 font-roboto font-semibold">
            {item.description ? item.description : "none"}</p>
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
