import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { CiPen, CiReceipt, CiViewBoard } from "react-icons/ci";
import { Card, message, Avatar, Tag } from "antd";
import axios from "axios";
import Icon from "../../../components/Icon";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import { examGet } from "../../../api/exam";



export default function Exam () {
const [data ,setData] = useState([])
const dispatch = useDispatch()
const { Meta } = Card;
    const getExamAll = async () => {
      dispatch(loadingAction.ShowLoading())
      const response = await examGet()
      dispatch(loadingAction.HideLoading())
      if(response){
        setData(response.exams)
        console.log(response)
      }else{
        message.error(response)
      }

    }

    useEffect(()=> {
        dispatch(loadingAction.ShowLoading())
        getExamAll()
        dispatch(loadingAction.HideLoading())

    } ,[])



    return <>
    <Header text={"Exam"} icons={<CiReceipt/>}/>
    <p className="mt-3 text-[14px]  text-gray-300">✨ click on box for Navigate to exam info</p>
    <div className="my-3 grid grid-cols-4 gap-4">
     
        {
          data.map((item ,key)=> (
            <div key={key}>
            <Link to={`/dashboard/Exam/${item._id}`}>
            <Card
            >
                <Meta
          avatar={<div className="bg-neutral-50 p-2
           border-neutral-200 border-[1px]  rounded-full">
            <Icon color={"#0f3460"}
         Size="1.5rem" name={<CiViewBoard/>}></Icon>
            </div>}
          title={item.name}
          description={ <ul className="flex flex-wrap gap-2">
          <li>{item.course}</li>
          <li>duration {item.time}</li>
          <li> <Tag color="yellow">{item.description}</Tag></li>    
          </ul>
          }
        />
            </Card>
            </Link>
          
            </div>
          ))
        }
    </div>
    </>
}