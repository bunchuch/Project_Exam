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
  const [sectionScore ,setSectionScore] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [markPoint , setMarkPoint] = useState(0)
  const [changeForm ,setChangeForm] = useState(false)
  const [title ,setTitle] = useState('')
  const [messageApi , contextHolder] = message.useMessage()


  const getReport = async () =>{
        try {
            dispatch(loadingAction.ShowLoading())
            const response = await getReportByExamId(eid)
            dispatch(loadingAction.HideLoading())
            console.log(response)
            if(response.success){
                setReport(response.result)
            }else{
                messageApi.error(response.data.message)
            }
        } catch (error) {
            message.error(error)
        }
  }
  const showModal = (name, sectionScore) => {
    setIsModalOpen(true);
    setTitle(name)
    setSectionScore(sectionScore)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const findGrade = (currentScore , sectionScore) => {
    if(currentScore > sectionScore){
      return "B"
    }else if (currentScore === sectionScore) {
      return "A"
    }else {
      return "F"
    }





  }

  
  
  const columns =[
    {
      title: 'Section Name',
      dataIndex: 'subjectName',
      key: 'subjectName',
      render: (text) => <a 
      className=" text-variation-500">{text}</a>,
    },
    {
      title: 'Section score',
      dataIndex: 'sectionScore',
      key: 'sectionScore',
      width : '120px',
      render : (text ,record)=>
       <><p>
        {text}</p></>
    },
    {
      title: 'Exam Score',
      dataIndex: 'markPoint',
      key: 'markPoint',
      width : '120px',
    },
{
  title : "Grade",
  dataIndex : 'grade',
  key : "formData",
  width : '50px',
  render : (text,record)=><a>
    <p>{
      findGrade(record?.sectionScore , record?.markPoint)
    
    }</p>
   </a>
},
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width : '20px',
      render : (text ,record)=>
       <><p className={`${text === "failed" ? "text-rose-600" 
       : "text-green-600 "} uppercase font-ubuntu font-semibold text-[14px]`}>
        {text}</p></>
    },
    ,{
      title : 'Action',
      key : 'action',
      render : (text , record)=> <>
      <button className="text-green-600 hover:underline hover:text-green-50"
       onClick={()=> {
        setChangeForm(false)
        showModal(record.subjectName , record.sectionScore)
       }}>Correct Score</button>
      </>
    },
    {
      title : "File",
      dataIndex : 'formData',
      key : "formData",
      width : '20rem',
      render : (text)=><a
       onClick={()=>window.open(`${process.env.REACT_APP_API_KEY + text}`, 'blank')}>
        <p className="break-all ">{text}</p>
       </a>
},
  ]
  
  const handleUpdateScore = async ()=>{
    try {
      dispatch(loadingAction.ShowLoading())
      const response = await updateStudentScore({
      stuId :  report?.user,
      markPoint : markPoint,
      name : title,
      sectionScore : sectionScore,
      rid : report?._id
      })
      dispatch(loadingAction.HideLoading())
      if(response.success){
            message.loading('patch...')
            setTimeout(()=>{
                messageApi.success(response.message)
            },5000)
         
        getReport()
      }else{
        messageApi.error(response.data.message)
      }
    } catch (error) {
      messageApi.error(error) 
    }
}
    useEffect(()=>{
        getReport()
    },[])

    return <>
    {contextHolder}
    <NavigatorButton></NavigatorButton>
    <Descriptions className="font-ubuntu" title="Student Result">
        <Descriptions.Item label='student name'>
    {report?.students?.firstname} {report?.students?.lastname}
    </Descriptions.Item>
    <Descriptions.Item label='Course'>
    {report?.students?.course}
    </Descriptions.Item>
    <Descriptions.Item label='Exam Name'>
    {report?.exam.title}
    </Descriptions.Item>
    <Descriptions.Item label='Submit Date'>
    {moment(report?.createdAt).format('LLL')}
    </Descriptions.Item>
    </Descriptions>

    <div className="border-1 border-b border-neutral-50"></div>

    <Table className="font-ubuntu mt-4" columns={columns} dataSource={report?.result}></Table>


    {/* modal */}
    <Modal okText="update" okType="default" title={changeForm ? 
        "reset password" :"update writing Score"} open={isModalOpen} 
          onOk={handleUpdateScore}
          onCancel={handleCancel}>
                  <Form layout="vertical" className="grid grid-cols-2 gap-4">
          <Form.Item label="id">
            <Input disabled value={report?._id}/>
        </Form.Item>
        <Form.Item  label="title">
            <Input disabled value={title}/>
        </Form.Item>
        <Form.Item  label="section markPoint">
            <Input disabled  value={sectionScore}/>
        </Form.Item>
        <Form.Item label="points" name={"markPoint"}>
        <InputNumber max={50} defaultValue={0} 
        onChange={(value)=> setMarkPoint(value)}  className="w-full"/>
        </Form.Item> 
        </Form>
            </Modal>
    </>
}