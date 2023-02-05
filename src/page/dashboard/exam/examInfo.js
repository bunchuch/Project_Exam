import React ,{useEffect, useState} from "react";
import { Button ,Modal, Table, Form, Popconfirm,Input,InputNumber,Select,
   message, Tabs,
   Card,
   Dropdown} from "antd";
import {CiCircleInfo, CiCirclePlus, CiTrash ,CiCircleMore, CiRead, CiEdit} from "react-icons/ci";
import Header  from "../../../components/Header";
import { Link, useNavigate, useParams, Outlet } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import Icon from "../../../components/Icon";
import NavigatorButton from "../../../components/navigatorButton";
import {deleteExam, examGetById } from "../../../api/exam";
import { createQuiz } from "../../../api/quiz";
import { TitleRender } from "../../../components/Title";
import { TabExam } from "../componet/TabItems";


const types = [{label :"Mqc" ,value : "Mqc"}, 
{label:"Blank", value: "Blank"},
 {label :"Writing", value : "Writing"}]

export default function ExamInfo (){

    const[data ,setData] = useState([])
    const {id} = useParams()
    const [render ,setRender] = useState(false)
    const [quiz ,setQuiz] = useState([])
    const [title ,setTitle] = useState('')
    const [type ,setType] = useState('')
    const [score ,setScore] = useState('')
    const [examId ,setExamId] = useState(id)
    const dispatch = useDispatch()
    const [messageApi , contextHolder] = message.useMessage()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const key = "updatable"
   

    const onGetExam = async ()=>{
      try {
        dispatch(loadingAction.ShowLoading())
        const respone = await examGetById(id)
        dispatch(loadingAction.HideLoading())
        if(respone){
          setData(respone.exams)
          setQuiz(respone.exams.quiz)
        }else{
          messageApi.open({
            key ,
            type : "warning",
            content : `${respone.data.message}`

          })
        }
      } catch (error) {
        messageApi.open({
          key ,
          type : "error",
          content : `${error}`

        })
      }
    }

    const onCreate = async (value)=>{
      try {
        const response = await createQuiz({
          title : title,
          score : score,
          type : type,
          ExamId : examId,
        }, id)
        console.log(response)

        if(response.success){
          messageApi.open({
            key,
            type : 'loading',
            content : 'Loading...'
        })
        setTimeout(()=>{
            messageApi.open({
                key,
                type : 'success',
                content : `${response.message}`,
                duration :2
            })
            onGetExam()
        } , [1000])
        }else{
          messageApi.open({
            key,
            type : 'erorr',
            content : `${response.message}`
        })
        }
      } catch (error) {
        messageApi.open({
          key,
          type : 'erorr',
          content : `${error}`
      })
      }
  
      }

    const onDeleteExam = async ()=>{
      const course = data.course
      try {
        dispatch(loadingAction.ShowLoading())
        const request = await deleteExam(id ,course)
        dispatch(loadingAction.HideLoading())
        if(request.success){
          messageApi.open({
            key :"updatable",
            type : 'loading',
            content : `Loading`
          })
          setTimeout(()=> {
            messageApi.open({
              key,
              type: 'success',
              content : `${request.message}`,
              duration : 2
          })
          navigator(-1 , {replace:true})
          dispatch(loadingAction.HideLoading())
          }, [1000])
          dispatch(loadingAction.HideLoading())
        }else{
          messageApi.open({
            key :"updatable",
            type : 'warning',
            content : `${request.message}`
        })
      }
      } catch (error) {
        messageApi.open({
          key :"updatable",
          type : 'error',
          content : `${error.data.message}`
        })
      }
    }

   

    useEffect(()=> {
      TitleRender("exam")
      onGetExam()
    }, [])


    const onRender = () =>{
      dispatch(loadingAction.ShowLoading())
      setTimeout(()=> {  
            setRender(!render)
            dispatch(loadingAction.HideLoading())
      },[300])
      
    }
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
      
 return <>
 {contextHolder}
 <NavigatorButton/>
 <div className="bg-white rounded-md border-neutral-200 border-[1px] p-4">
 <>
 <div className="flex justify-between pb-5">
    <Header icons={<CiCircleInfo/>} text={"Exam Info"}/>
        <div className="flex justify-end gap-2">
        <Button onClick={showModal}
         className="flex items-center border-none bg-neutral-50" icon={<Icon Size="1.2rem"
          name={<CiCirclePlus/>}/>}>Create Subject</Button>
    <Modal okType="default" okText="Create" 
    title="Create new Subject" 
    open={isModalOpen} onOk={onCreate} 
    onCancel={handleCancel}>
     <Form 
     layout="vertical"
     form={form}>

      <Form.Item label={"Exam Id"}>
        <Input disabled value={examId}/>
        </Form.Item>
   <Form.Item
      rules={[{
        required : true,
        message : "Please enter quiz title!"
                }]}
            name={"title"} label="title">
                <Input onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Item>
            <Form.Item name={"score"} label="score">
               <InputNumber onChange={(value)=> setScore(value)}
               className="w-full"></InputNumber>
            </Form.Item>
     </Form>
      </Modal>
          <Popconfirm 
          placement="topLeft"
          description="Are you sure to delete this Exam?" 
           title="Delete this Exam"
           okType="default" onConfirm={onDeleteExam} okText="Delete">
          <Button className="border-none bg-neutral-50" icon={<CiTrash/>}/>
          </Popconfirm>
        </div>
  </div>
  </>
 <div classNam="px-3 py-4">
 {/* info list */}
  <div className="grid grid-cols-3 gap-3 px-2 mt-2 text-[14px]">
  <span className="flex gap-2">
  <label key={data.title} className="font-semibold space-x-2 text-gray-600">Title :</label>
  <p className="text-gray-900">{data.name}</p>
  </span>
  
  <span className="flex gap-2">
  <label key={data.startDate} className="font-semibold space-x-2 text-gray-600">Start :</label>
  <p className="text-gray-900">{moment(data.startDate).format("YYYY-MM-DD")}</p>
  <p className="text-gray-900">End : {moment(data.endDate).format("YYYY-MM-DD")}</p>
  </span>
  
  <span className="flex gap-2">
  <label key={data.endDate} className="font-semibold space-x-2 text-gray-600">question amount :</label>
  <p className="text-gray-900">{data.quiz ? data.quiz.length : null}</p>
  </span>
  <span className="flex gap-2">
  <label key={data.createdAt} className="font-semibold space-x-2 text-gray-600">create date :</label>
  <p className="text-gray-900">{moment(data.createdAt).format("DD/MM/YYYY")}</p>
  </span>
  </div>
  </div>
       </div>
      <div>
        <Tabs items={TabExam} defaultActiveKey={1}></Tabs>
      </div>
            {/* <CreateQuestion title={data.title} render={render}></CreateQuestion> */}
</>  



   
}





