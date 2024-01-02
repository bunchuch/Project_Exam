import React from "react";
import {useParams} from "react-router-dom"
import NavigatorButton from "../../../components/navigatorButton";
import { useEffect } from "react";
import {message, Form,Table ,Tag, Modal, Descriptions, Input, InputNumber} from 'antd'
import { getReportByExamId, updateStudentScore } from "../../../api/report";
import { useState } from "react";
import {useDispatch} from "react-redux"
import moment from "moment"
import { loadingAction } from "../../../redux/loaderSlice";

export default function StudentReport (){
  const {eid} = useParams()
  const dispatch = useDispatch()
  const [report ,setReport] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [markPoint , setMarkPoint] = useState(0)
  const [changeForm ,setChangeForm] = useState(false)
  const [title ,setTitle] = useState('')


  const getReport = async () =>{
        try {
            dispatch(loadingAction.ShowLoading())
            const response = await getReportByExamId(eid)
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
  const showModal = (name) => {
    setIsModalOpen(true);
    setTitle(name)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: 'section name',
      dataIndex: 'subjectName',
      key: 'subjectName',
      render: (text) => <a 
      className="font-semibold text-variation-500">{text}</a>,
    },
    {
      title: 'score',
      dataIndex: 'markPoint',
      key: 'markPoint',
    },
    {
        title : "formData",
        dataIndex : 'formData',
        key : "formData",
        render : (text)=><a
         onClick={()=>window.open(`${process.env.REACT_APP_API_KEY + text}`, 'blank')}>
          <p className="break-all w-[10rem]">{text}</p>
         </a>
},
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      render : (text ,record)=>
       <><Tag color={text === "failed" ? "red" : "green"}>
        {text}</Tag></>
    }
    ,{
      title : 'action',
      key : 'action',
      render : (text , record)=> <>
      <button className="bg-yellow-400 active:bg-yellow-300
       rounded-md px-2 py-[1px] text-[10px]"
       onClick={()=> {
        setChangeForm(false)
        showModal(record.subjectName)
       }}>update Score</button>
      </>
    }
  ]
  
  const handleUpdateScore = async ()=>{
    try {
      dispatch(loadingAction.ShowLoading())
      const response = await updateStudentScore({
      stuId :  report?.user,
      markPoint : markPoint,
      name : title,
      rid : report?._id
      })
      dispatch(loadingAction.HideLoading())
      if(response.success){
            message.loading('patch...')
            setTimeout(()=>{
                message.success(response.message)
            },5000)
         
        getReport()
      }else{
        message.error(response.data.message)
      }
    } catch (error) {
      message.error(error) 
    }
}
    useEffect(()=>{
        getReport()
    },[])

    return <>
    <NavigatorButton></NavigatorButton>
    <Descriptions className="bg-white border
     border-neutral-200
     rounded-lg mb-4 p-5" title="Student Result">
        <Descriptions.Item label='student id'>
    {report?.user}
    </Descriptions.Item>
    <Descriptions.Item label='exam id'>
    {report?.exam}
    </Descriptions.Item>
    <Descriptions.Item label='submit time'>
    {moment(report?.createdAt).format('LL')}
    </Descriptions.Item>
    </Descriptions>
    <Table bordered columns={columns} dataSource={report?.result}></Table>


    {/* modal */}
    <Modal okText="update" okType="default" title={changeForm ? 
        "reset password" :"update writing Score"} open={isModalOpen} 
          onOk={handleUpdateScore}
          onCancel={handleCancel}>
                  <Form>
          <Form.Item>
            <Input disabled value={report?._id}/>
        </Form.Item>
        <Form.Item>
            <Input value={title}/>
        </Form.Item>
        <Form.Item name={"markPoint"}>
        <InputNumber max={25} defaultValue={0} 
        onChange={(value)=> setMarkPoint(value)}  className="w-full"/>
        </Form.Item> 
        </Form>
            </Modal>
    </>
}