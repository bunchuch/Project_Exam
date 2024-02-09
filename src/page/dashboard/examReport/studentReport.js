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
      title: 'section name',
      dataIndex: 'subjectName',
      key: 'subjectName',
      render: (text) => <a 
      className=" text-variation-500">{text}</a>,
    },
    {
      title: 'section score',
      dataIndex: 'sectionScore',
      key: 'sectionScore',
      width : '120px',
      render : (text ,record)=>
       <><p>
        {text}</p></>
    },
    {
      title: 'exam score',
      dataIndex: 'markPoint',
      key: 'markPoint',
      width : '120px',
    },
{
  title : "grade",
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
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      width : '20px',
      render : (text ,record)=>
       <><Tag color={text === "failed" ? "#b91c1c" : "#22c55e"}>
        {text}</Tag></>
    },
    ,{
      title : 'action',
      key : 'action',
      render : (text , record)=> <>
      <button className="bg-yellow-400 active:bg-yellow-300
       rounded-md px-2 py-[1px] text-[10px]"
       onClick={()=> {
        setChangeForm(false)
        showModal(record.subjectName , record.sectionScore)
       }}>update Score</button>
      </>
    },
    {
      title : "file",
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
    <Descriptions className="bg-neutral-50 border-none
     rounded-xl mb-4 p-5" title="Student Result">
        <Descriptions.Item label='student name'>
    {report?.students?.firstname} {report?.students?.lastname}
    </Descriptions.Item>
    <Descriptions.Item label='course'>
    {report?.students?.course}
    </Descriptions.Item>
    <Descriptions.Item label='exam name'>
    {report?.exam.title}
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