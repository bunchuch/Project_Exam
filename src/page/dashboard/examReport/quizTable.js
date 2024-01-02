import {useState , useEffect} from "react"
import {Table, message, Tag ,Tooltip, Button} from "antd"
import {useParams , Link} from "react-router-dom"
import { deteleSubject, queryQuiz } from "../../../api/quiz"
import moment from "moment"
import {useDispatch} from 'react-redux'
import axiosInstance from "../../../api"
import { loadingAction } from "../../../redux/loaderSlice"

export const QuizTable = () => {
  
    const {id} = useParams()
    const [data ,setData] = useState()
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    
    const getQuiz = async () => {
      dispatch(loadingAction.ShowLoading())
      await axiosInstance.post(`quiz`,{examId : id}).then((res)=> {
            setData(res.data.result)
        }).catch(error => {
            alert(error.response.data.message)
        })
        dispatch(loadingAction.HideLoading())
    }

    const handledeleteSubject = async (id, exam_id)=>{
      dispatch(loadingAction.ShowLoading())
      const response = await deteleSubject(id, exam_id)
      dispatch(loadingAction.HideLoading())
      if(response.success){
        message.success(response.message)
        getQuiz()
      }else{
        message.error(response.data.message)
      }
    }
    
    
    const start = () => {
      setLoading(true);
      getQuiz()
      setTimeout(()=>{
        setLoading(false)
      },[2000])
   
    
    }

    useEffect(()=> {
        getQuiz()
    }, [])

  const columnExam = [
      {
        title: 'title',
        dataIndex: 'title',
        key : 'title',
        render : (text, record)=> <a className=" 
        hover:underline font-semibold text-variation-500">
          <Link state={text} 
          to={`/dashboard/Question/${record._id}/view`}>{text}</Link>
        </a>
        
      },
     
      {
        title : 'Type',
        dataIndex: 'type',
        key : 'type',
        render : () => <Tag>none</Tag>
      },
      {
        title : 'question',
        dataIndex: 'question',
        key : '2',
        render : (text , record)=><p>{text ? text.length
           : "no question avilable"}</p>
      },
      {
        title : 'Score',
        dataIndex: 'score',
        key : 'score',
        render : (text ,record)=>
        <Tag color={text ? "yellow" : "red"}>
          {text ? text : "None"}</Tag> 
      },
      {
      title : 'Create At',
      dataIndex: 'createdAt',
      key : 'createdAt',
      render : (text ,record)=><p>
        {moment(text).format('YYY-MM-DD h:mm')}</p> 
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => <div
       className="flex gap-2 items-center">
  
        <Tooltip title="Create a question">
        <button className="bg-variation-500 text-white px-2 py-0.5 text-[12px] rounded-md p-1">
        <Link  to={`/dashboard/Quiz/${record._id}/${record.title}`}>
            add question
        </Link>
      </button>
          </Tooltip>
  
  
        <Tooltip title="Update">
        <a className="bg-yellow-300 px-2 py-0.5 text-[12px] rounded-md">
        <Link>
          update
        </Link>
      </a>
          </Tooltip>
  
       <Tooltip title="Delete Subject">
        <button  onClick={()=> { 
        handledeleteSubject(record._id ,record.ExamId)
        }} className="bg-red-500 rounded-md text-white px-2 py-0.5 text-[12px]">
          delete
      </button>
          </Tooltip>
      </div>,
    },
    ]
    return <>
     <div className="flex gap-3">
            <p className="text-[14px] mt-2 text-gray-300">
             ✨ Click on each subject name for create new question
            </p>
            <Button onClick={start} loading={loading}>Reload</Button>
          </div>
         
      <Table dataSource={data} bordered className="mt-3" columns={columnExam}/>
    
    </>
  }
  