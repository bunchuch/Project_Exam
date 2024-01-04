import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import {  CiReceipt, CiViewBoard } from "react-icons/ci";
import { Card, message, InputNumber, Tag ,Button, Modal, Form} from "antd";
import Icon from "../../../components/Icon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import { examGet, requestStarExam } from "../../../api/exam";
import io from 'socket.io-client'
import moment from "moment";


export default function Exam () {
const [data ,setData] = useState([])
const [disable , setDisable] = useState(localStorage.setItem('disable', false))
const [initialminute , setintialmiute] = useState(0)
const [initialSecond , setintialSecond] = useState(0)
const [timerLoading ,setLoadingTimer] = useState({
   initialSecond : 0,
   initialminute : 0,
})
const [isModalOpen, setIsModalOpen] = useState(false);
const [loading ,setLoading] = useState(true)
const [socket , setSocket] = useState(null)
const userRole = useSelector(state => state.auth.userRole)[0]
const dispatch = useDispatch()
const { Meta } = Card;

const showModal = () => {
  setIsModalOpen(true);
};
const handleCancel = () => {
  setIsModalOpen(false);
};


  const questionStartTimer = async ()=>{
    try {
      const response= await requestStarExam({
        minutes : parseInt(initialminute) ,
        seconds : parseInt(initialSecond)
      })
      if(response.success){
          message.success(response.message)
          setDisable(true)
      }else{
        message.error(response.statusText)
        setDisable(false)
      } 
    } catch (error) {
        message.error("unkown error")
    }
     

  }

    const getExamAll = async () => {
      dispatch(loadingAction.ShowLoading())
      setLoading(true)
      const response = await examGet()
      setLoading(false)
      dispatch(loadingAction.HideLoading())
      if(response.success){
        setData(response.result)
      }else{
        message.error(response)
      }

    }

    useEffect(()=> {
        getExamAll()
        const socketInstance = io(`${process.env.REACT_APP_API_KEY}`)
        setSocket(socketInstance)
        socketInstance.on('countdown', 
        ({minutes , remainingSeconds})=>{
         setLoadingTimer({
          initialSecond : remainingSeconds,
          initialminute :  minutes
         })
        })
        socketInstance.on('countdownFinished', ()=>{
          alert('Countdown is Fishished')
          setDisable(false)
          localStorage.setItem('disable' , false)
          socketInstance.disconnected()
        })
    } ,[])



    return <>
    <Header text={"Exam"} icons={<CiReceipt/>}/>
    <p className="mt-3 text-[14px]  text-gray-300">✨ 
    click on box for Navigate to exam info</p>
    {
      userRole === 'admin' || userRole === 'superadmin' ?
      <>
        <Button disabled={disable} onClick={showModal} 
    className="mt-4 rounded-xl  bg-variation-500
     text-white">Start Exam {disable}</Button>
     <Button 
    className="mt-4 mx-2 rounded-xl  text-green-600
     bg-green-50 border-green-600
    ">{timerLoading.initialminute} : {timerLoading.initialSecond}</Button>
      </>
      : <></>
    }
  
    <Modal title="start Timer Exam" 
    open={isModalOpen}
    onOk={questionStartTimer}
    okType="default"
    okText="Start"
    onCancel={handleCancel}>
      <Form layout="vertical">
    <Form.Item label="Minutes">
    <InputNumber className="w-full" 
    max={59} 
    onChange={(value =>
     setintialmiute(value))}/>
    </Form.Item>
      <Form.Item className="w-full" label="second">
    <InputNumber className="w-full" 
    max={59} 
    onChange={(value)=> 
    setintialSecond(value)}/>
    </Form.Item>
      </Form>
    </Modal>



    <div className="my-3 border-t border-neutral-200 py-3
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
         Size="1.6rem" name={<CiViewBoard/>}></Icon>
            </div>}
          title={<div className="flex justify-between"><p>{item.name}</p></div>}
          description={ <> <div className="flex flex-wrap">
            {
              item.course ? <Tag color="purple">{item.course}</Tag> :"none course"
            }
        
          <p className="text-[12px] px-1">section : {item?.quiz?.length}</p> 
          <p  className="text-[12px] px-1" >{moment(item?.time).format('LT')}</p>
          </div>
          <div className="mt-1 flex-wrap flex items-center space-y-1">
          <p  className="text-[12px] px-1">duration : {item.duration}</p>
          <Tag className="mt-2" color="yellow">{item.description ? item.description : "none"}</Tag>
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

