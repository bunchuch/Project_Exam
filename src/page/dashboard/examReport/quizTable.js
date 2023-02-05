import {useState , useEffect} from "react"
import {Table, message, Tag ,Tooltip} from "antd"
import { columnExam } from "../componet/ColumsItem"
import {useParams , Link} from "react-router-dom"
import axios from "axios"
import Icon from "../../../components/Icon"
import { deteleSubject } from "../../../api/quiz"
import { CiCirclePlus, CiEdit, CiRead, CiTrash } from "react-icons/ci";
import moment from "moment"

export const QuizTable = () => {
  
    const {id} = useParams()
    const [data ,setData] = useState()
    const getQuiz = async() => {
      await  axios.post(`${process.env.REACT_APP_API_KEY}quiz`,{examId : id}).then((res)=> {
            setData(res.data.result)
            console.log(res.data.result)
        }).catch(error => {
            alert(error.response.data.message)
        })
    }

    const handledeleteSubject = async (id, exam_id)=>{
      const response = await deteleSubject(id, exam_id)
      console.log(response)
      if(response.success){
        message.success("succes")
        getQuiz()
      }else{
        message.error('error')
      }
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
       className="flex gap-4 items-center">
  
        <Tooltip title="Create a question">
        <a className="bg-variation-500 rounded-md p-1">
        <Link  to={`/dashboard/Quiz/${record._id}/${record.title}`}>
        <Icon color="white" Size={"1.2rem"} name={<CiCirclePlus/>}/>
        </Link>
      </a>
          </Tooltip>
  
  
        <Tooltip title="Update">
        <a className="bg-yellow-300 rounded-md p-1">
        <Link>
        <Icon color="black" Size={"1.2rem"} name={<CiEdit/>}/>
        </Link>
      </a>
          </Tooltip>
  
       <Tooltip title="Delete Subject">
        <a  onClick={()=> { 
        handledeleteSubject(record._id ,record.ExamId)
        }} className="bg-red-500 rounded-md p-1">
        <Link>
        <Icon color={"white"} Size={"1.2rem"} name={<CiTrash/>}/>
        </Link>
      </a>
          </Tooltip>
      </div>,
    },
    ]
    return <>
     <div>
            <p className="text-[14px] mt-2 text-gray-300">
             ✨ Click on each subject name for create new question
            </p>
          </div>
      <Table dataSource={data} bordered className="mt-3" columns={columnExam}/>
    
    </>
  }
  