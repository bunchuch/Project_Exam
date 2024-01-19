import {useState , useEffect} from "react"
import {Table, message, Tag ,Tooltip, Button,Modal,Form,Input,InputNumber, Select} from "antd"
import {useParams , Link} from "react-router-dom"
import { deteleSubject, queryQuiz, updateQuiz } from "../../../api/quiz"
import moment from "moment"
import {useDispatch, useSelector} from 'react-redux'
import axiosInstance from "../../../api"
import { loadingAction } from "../../../redux/loaderSlice"
import { CiRedo } from "react-icons/ci"
import Icon from "../../../components/Icon"
import { assignSectionToExam } from "../../../api/exam"

export const QuizTable = () => {
  
    const {id} = useParams()
    const [data ,setData] = useState()
    const [questionId ,setQuestionId] = useState()
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const examName = useSelector(state => state.course.examName)
    const [exam_name , setExamName] = useState('')
    const [examId ,setExamId] = useState()
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const {Option} = Select;
    
    const getQuiz = async () => {
      dispatch(loadingAction.ShowLoading())
      await axiosInstance.post(`quiz`,{examId : id}).then((res)=> {
            setData(res.data.result)
        }).catch(error => {
            alert(error.response.data.message)
        })
        dispatch(loadingAction.HideLoading())
    }

    const handledeleteSubject = async (section_id)=>{
      dispatch(loadingAction.ShowLoading())
      const response = await deteleSubject(section_id, id)
      dispatch(loadingAction.HideLoading())
      if(response.success){
        message.success(response.message)
        getQuiz()
      }else{
        message.error(response.data.message)
      }
    }

    const handleUpdateSection = async (value) => {
      try {
        dispatch(loadingAction.ShowLoading())
        const response = await updateQuiz(examId ,value)
        dispatch(loadingAction.HideLoading())
        if(response.success){
          message.success(response.message)
        }else{
          message.error(response.data.message)
        }
      } catch (error) {
        message.error(error)
      }
    }
    
    
    const start = () => {
      setLoading(true);
      getQuiz()
      setTimeout(()=>{
        setLoading(false)
      },[2000])
   
    
    }
    const showModal = (id , name) => {
      if(name == 'update'){
        setIsModalOpen(true);
        setExamId(id)
      }else{
        setIsModalOpen2(true)
        setQuestionId(id)
      }
    };
    const handleCancel = () => {
      setIsModalOpen(false);
      setIsModalOpen2(false);
      
    };

    const handleCloneQuestion = async () => {
      try {
        dispatch(loadingAction.ShowLoading())
          const response = await assignSectionToExam({
           exam_name : exam_name,
            quiz_id : questionId,
            
          })
          dispatch(loadingAction.HideLoading())
          if(response.success){
            message.success(response.message)
          }else{
            message.error(response.data.message)
          }
      } catch (error) {
        message.error(error)
      }
    }

   

    const hasSelectd = selectedRowKeys.length > 0

    const assignToExam = () => {
      return <Modal
              okType="default"
              onOk={()=>handleCloneQuestion(questionId,form.getFieldsValue())}
              title={`clone to another exam ${questionId}`}
             onCancel={handleCancel} open={isModalOpen2}>
            <Form form={form} className="grid w-full gap-2">
              <Form.Item name={"exam_name"}  label="clone to exam name =>">
                 <Select onChange={(value) => setExamName(value)}>
                  {
                    examName?.map((items,key)=>
                    <Option  value={items} key={key}/>
                    )
                  }
                  
                 </Select>
              </Form.Item >
            </Form>

      </Modal>
    }

    useEffect(()=> {
        getQuiz()
    }, [])

  const columnExam = [
      {
        title: 'section name',
        dataIndex: 'title',
        key : 'title',
        render : (text, record)=> <a className=" 
        hover:underline font-semibold text-variation-500">
          <Link state={text} 
          to={`/dashboard/Question/${record._id}/view`}>{text}</Link>
        </a>
        
      },
     
      {
        title : 'type',
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
        title : 'score',
        dataIndex: 'score',
        key : 'score',
        render : (text ,record)=>
        <Tag color={text ? "yellow" : "red"}>
          {text ? text : "None"}</Tag> 
      },
      {
      title : 'create',
      dataIndex: 'created',
      key : 'createdAt',
      render : (text ,record)=><p>
        {moment(text).format('LL')}</p> 
    },
    {
      title: 'action',
      dataIndex: '',
      key: 'x',
      render: (record) => <div
       className="flex gap-2 items-center">
  
        <Tooltip title="Create a question">
        <button className="text-variation-500 font-semibold  text-[14px]">
        <Link  to={`/dashboard/Quiz/${record._id}/${record.title}`}>
            add question
        </Link>
      </button>
          </Tooltip>
  
          <Tooltip title="assign">
        <button disabled onClick={()=>{
          showModal(record._id ,'assign')
        }}
         className="text-green-600 font-semibold   py-0.5 text-[14px]">
        <Link>
          clone
        </Link>
      </button>
          </Tooltip>
  
        <Tooltip title="Update">
        <button onClick={()=>showModal(record._id, 'update')}
         className="text-yellow-300 font-semibold py-0.5 text-[14px]">
        <Link>
          update
        </Link>
      </button>
          </Tooltip>
  
       <Tooltip title="Delete Subject">
        <button  onClick={()=> { 
        handledeleteSubject(record._id)
        }} className="text-red-500 font-semibold text-[14px]">
          delete
      </button>
          </Tooltip>
      </div>,
    },
    ]
    const onSelectChange = (newSelectedRowKeys) => {
      // console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };

 

    return <>
     <div className="flex gap-3">
     <Modal okType="default" okText="update" 
    title="Update Section" 
    open={isModalOpen} onOk={()=>handleUpdateSection(form.getFieldsValue())} 
    onCancel={handleCancel}>
     <Form 
     layout="vertical"
     form={form}>
      <p className="text-[12px] mt-2 text-gray-300">
             the section name should't cotainer space or any symbols ex : section_one
            </p>
   <Form.Item
      rules={[{
        required : true,
        message : "Please enter quiz title!"
                }]}
            name={"title"} label="section name">
                <Input/>
            </Form.Item>
    
            <Form.Item name={"score"} label="score">
               <InputNumber
               
               className="w-full"></InputNumber>
            </Form.Item>
     </Form>
      </Modal>

      {assignToExam()}
      <div className="flex items-center gap-2">
      <p className="text-[14px] mt-2 text-gray-300">
             ✨ Click on each section name for show question or add new question
            </p>
            <Button className="bg-neutral-200 rounded-md
             text-white px-2 py-0.5  text-[12px]" 
            onClick={start}>
              <Icon
              color={'#0f3460'}
              Size={"1rem"}
              name={<CiRedo/>}
              ></Icon>
            </Button>
            {
              hasSelectd ? <Button className="bg-variation-500 rounded-md text-white px-2 py-0.5  text-[12px]" 
              onClick={start}>{hasSelectd ? selectedRowKeys.length : 0}</Button> : null
            }
          </div>
      </div>
            
      <Table rowSelection={rowSelection}
       dataSource={data}  bordered className="mt-3" columns={columnExam}/>
    
    </>
  }
  