import React ,{useEffect, useState} from "react";
import { Button ,Modal, Form, Popconfirm,Input,InputNumber,
   message, Tabs,Descriptions} from "antd";
import {CiCircleInfo, CiCirclePlus, CiTrash} from "react-icons/ci";
import Header  from "../../../components/Header";
import { useParams,Link } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import Icon from "../../../components/Icon";
import NavigatorButton from "../../../components/navigatorButton";
import {deleteExam, examGetById } from "../../../api/exam";
import { createQuiz } from "../../../api/quiz";
import { TitleRender } from "../../../components/Title";
import { TabExam } from "../componet/TabItems";




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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
   
    const onGetExam = async ()=>{
      try {
        dispatch(loadingAction.ShowLoading())
        const respone = await examGetById(id)
        dispatch(loadingAction.HideLoading())
        if(respone){
          setData(respone.exams)
          setQuiz(respone.exams.quiz)
        }else{
          message.success(respone.data.message)
        }
      } catch (error) {
        message.error(error)
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

        if(response.success){
          message.loading('loading...')
        setTimeout(()=>{
          message.success(response.message)
            onGetExam()
        } , 2000)
        }else{
          message.error(response.data.message)
        }
      } catch (error) {
        message.error(error)
      }
  
      }

    const onDeleteExam = async ()=>{
      const course = data.course
      try {
        dispatch(loadingAction.ShowLoading())
        const request = await deleteExam(id ,course)
        dispatch(loadingAction.HideLoading())
        if(request.success){
          message.loading('loading')
          setTimeout(()=> {
          message.success(request.message)
          navigator(-1 , {replace:true})
          dispatch(loadingAction.HideLoading())
          }, 2000)
          dispatch(loadingAction.HideLoading())
        }else{
        message.error(request.data.message)
      }
      } catch (error) {
          message.error(`${error}`)
      }
    }

   

    useEffect(()=> {
      TitleRender("exam")
      onGetExam()
    }, [])

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
      
 return <>
 <NavigatorButton/>
 <div className="bg-white rounded-md
  border-neutral-200 border-[1px] p-4">
 <>
 <div className="flex justify-between pb-5">
    <Header icons={<CiCircleInfo/>} text={"Exam Info"}/>
        <div className="flex justify-end gap-2">
        <button onClick={showModal}
         className="px-2 py-[0.5px] text-[12px] border-none rounded-md
          text-white active:bg-variation-400 bg-variation-500" 
         icon={<Icon Size="1.2rem"
          name={<CiCirclePlus/>}/>}>New section</button>
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
      <button className="border-none text-[12px] rounded-md
       active:bg-yellow-300 px-2 py-[0.5px] bg-yellow-400">
        <Link to={`/dashboard/exam/update/${data?._id}`}>
        update
        </Link>
        </button>
      
          <Popconfirm 
          placement="topLeft"
          description="Are you sure to delete this Exam?" 
           title="Delete this Exam"
           okType="default" onConfirm={onDeleteExam} okText="Delete">
          <button className="border-none rounded-md bg-rose-500 active:bg-rose-600
           px-2 text-white text-[12px] py-[0.5px]">Delete</button>
          </Popconfirm>
        </div>
  </div>
  </>
 <div classNam="px-3 py-4">
 {/* info list */}
 <Descriptions>
  <Descriptions.Item label="Title">
            {data?.name}
  </Descriptions.Item>
  <Descriptions.Item label="Course">
            {data?.course}
  </Descriptions.Item>
  <Descriptions.Item label="sections">
  {data.quiz ? data.quiz.length : null}
  </Descriptions.Item>
  <Descriptions.Item label="create">
  {moment(data.createdAt).format("DD/MM/YYYY")}
  </Descriptions.Item>
  <Descriptions.Item label="Exam Date">
  {moment(data.date).format("YYYY-MM-DD")}
  </Descriptions.Item>
  <Descriptions.Item label="Time">
  {moment(data.time).format("LT")}
  </Descriptions.Item>
 </Descriptions>

  </div>
       </div>
      <div>
        <Tabs items={TabExam} defaultActiveKey={1}></Tabs>
      </div>
            {/* <CreateQuestion title={data.title} render={render}></CreateQuestion> */}
</>  



   
}





