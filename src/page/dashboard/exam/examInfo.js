import React ,{useEffect, useState} from "react";
import { Modal, Form, Popconfirm,Input,InputNumber,
   message, Tabs,Descriptions, Select} from "antd";
import Header  from "../../../components/Header";
import { useParams,Link } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import NavigatorButton from "../../../components/navigatorButton";
import {deleteExam, examGetById } from "../../../api/exam";
import { createQuiz } from "../../../api/quiz";
import { TitleRender } from "../../../components/Title";
import { TabExam } from "../componet/TabItems";
import {useSelector} from "react-redux"



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
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [form] = Form.useForm();
    const {Option} = Select
    const courseName = useSelector(state => state.course.courseName)
    const [messageApi , contextHolder] = message.useMessage()


    const onGetExam = async ()=>{
      try {
        dispatch(loadingAction.ShowLoading())
        const respone = await examGetById(id)
        dispatch(loadingAction.HideLoading())
        if(respone){
          setData(respone.result)
          setQuiz(respone.exams.quiz)
        }else{
          messageApi.success(respone.data.message)
        }
      } catch (error) {
        messageApi.error(error)
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
          messageApi.success(response.message)
            onGetExam()
        }else{
          messageApi.error(response.data.message)
        }
      } catch (error) {
        messageApi.error(error)
      }
  
      }

    const onDeleteExam = async ()=>{
      const course = data.course
      try {
        dispatch(loadingAction.ShowLoading())
        const request = await deleteExam(id ,course)
        dispatch(loadingAction.HideLoading())
        if(request.success){
          messageApi.loading('loading')
          setTimeout(()=> {
          messageApi.success(request.message)
          navigator(-1 , {replace:true})
          dispatch(loadingAction.HideLoading())
          }, 2000)
          dispatch(loadingAction.HideLoading())
        }else{
        messageApi.error(request.data.message)
      }
      } catch (error) {
          messageApi.error(`${error}`)
      }
    }
    
    


    function containSpaceSymbol(str) {
          return /\s/.test(str) || /[^a-zA-Z0-9\s]/.test(str)
    }
   

    useEffect(()=> {
      TitleRender("exam")
      onGetExam()
    }, [])

    const showModal = (name) => {
        setIsModalOpen(true)
    };
    const handleCancel = () => {
      setIsModalOpen(false);
     
    };

  
      
 return <div>
 <NavigatorButton/>
 <div className="bg-neutral-50 rounded-xl
   p-4">
 <>
 <div className="flex justify-between items-center ">
    <Header text={"Exam Info"}/>
        <div className="flex justify-end gap-2">
        <button onClick={()=>showModal('create')}
         className="px-2 py-0.5 text-[12px] border-none rounded-md
          text-white active:bg-variation-400 bg-variation-500">create section</button>
    <Modal okType="default" okText="Create" 
    title="Create new Subject" 
    open={isModalOpen} onOk={onCreate} 
    onCancel={handleCancel}>
     <Form 
     layout="vertical"
     form={form}>

      <Form.Item label={"exam id"}>
        <Input disabled value={examId}/>
        </Form.Item>
        <p className="text-[12px] text-gray-600">
          noted :
          section name should not contain space or any symbols</p>
   <Form.Item
      rules={[{
        required : true,
        message : "please enter section name!"
                }
              ]}
            name={"title"}
            label="section name"
            
            >
                <Input onChange={(e)=>setTitle(e.target.value.toLowerCase())}/>
            </Form.Item>
            <Form.Item name={"score"} label="score">
               <InputNumber onChange={(value)=> setScore(value)}
               className="w-full"></InputNumber>
            </Form.Item>
     </Form>
      </Modal>
      <button className="border-none text-[12px] rounded-md
       active:bg-yellow-300 px-2 py-0.5 bg-yellow-400">
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
           px-3 text-white text-[12px] py-0.5">delete</button>
          </Popconfirm>
        </div>
  </div>
  </>
 <div classNam="px-3 py-4 ">
 {/* info list */}
 <Descriptions className="mt-5">
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
  {moment(data.createdAt).format("LL")}
  </Descriptions.Item>
  <Descriptions.Item label="Exam Date">
  {moment(data.date).format("LL")}
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
</div>  



   
}





