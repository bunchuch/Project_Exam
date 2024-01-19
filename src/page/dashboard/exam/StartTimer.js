import React, {useState} from "react";
import { loadingAction } from "../../../redux/loaderSlice";
import {Modal, message, Form,InputNumber} from 'antd'
import io from 'socket.io-client'
import { requestStarExam } from "../../../api/exam";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'

export default function StartTimer () {
    const [disable , setDisable] = useState(localStorage.setItem('disable', false))
    const [initialminute , setintialmiute] = useState(0)
    const [initialSecond , setintialSecond] = useState(0)
    const [socket , setSocket] = useState(null)
    const dispatch = useDispatch()
    const userRole = useSelector(state => state.auth.userRole)[0]
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [timerLoading ,setLoadingTimer] = useState({
        initialSecond : 0,
        initialminute : 0,
     })

    const questionStartTimer = async ()=>{
        try {
          dispatch(loadingAction.ShowLoading())
          const response= await requestStarExam({
            minutes : parseInt(initialminute) ,
            seconds : parseInt(initialSecond)
          })
          dispatch(loadingAction.HideLoading())
          if(response.success){
              message.success(response.message)
              setDisable(true)
          }else{
            message.error(response.statusText)
            setDisable(false)
          } 
        } catch (error) {
            message.error(error)
        }
         
    
      }

      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      useEffect(()=>{
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


      },[])

    return <div className="flex flex-col justify-center items-center">
  <Modal title="start Timer Exam" 
    open={isModalOpen}
    onOk={questionStartTimer}
    okType="default"
    okText="Start"
    onCancel={handleCancel}>
      <Form className="grid grid-cols-3 gap-4" layout="vertical">
    <Form.Item label="Minutes">
    <InputNumber className="w-full"  
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

  <>

  <h1 className="mt-4 font-mono mx-2 text-[38px] p-6 
    ">{timerLoading.initialminute} : {timerLoading.initialSecond}</h1>

        <button disabled={disable} onClick={showModal} 
    className="mt-4 py-2 px-6 rounded-xl text-[16px] active:bg-variation-400
      bg-variation-500
     text-white">enter duration</button>
     <p className="my-2 text-gray-600">✨ Click to enter duration of exam</p>
      </>
    </div>
}