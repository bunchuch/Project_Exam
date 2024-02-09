import React, { useEffect, useState } from "react";
import { Popconfirm, Table, Tabs,Tag,
     message, Descriptions, Tooltip} from "antd";
import {  useNavigate, useParams,Link } from "react-router-dom";
import Header from "../../../components/Header";
import { columnCourse, columnsReport, columnsStudent } from "../componet/ColumsItem";
import { GroupInfoTab } from "../componet/TabItems";
import moment from "moment";
import NavigatorButton from "../../../components/navigatorButton";
import { useSelector } from "react-redux";
import { deleteGroup, getGroupById, removeExamGroup} from "../../../api/group";



export default function GroupInfo () {
    
    const navigate = useNavigate()
    const {id} = useParams()
    const [data ,setData] = useState({})
    const [exam ,setExam] = useState([])
    const [messageApi, contextHolder] = message.useMessage()
    const [student , setStudent] = useState([])
    const [title ,setTitle] = useState(1)
    const key = 'updatable'


    const onGet = async ()=>{
        try {
            const response = await getGroupById({id})
            if(response){
                setData(response.groups)
                setExam(response.groups.exam)
                setStudent(response.groups.student)
               
            }else{
                messageApi.open({
                    key : 'updatable',
                    type : 'error',
                    content : `${response.message}`
                })
            }
        } catch (error) {
             messageApi.open({
                key : 'updatable',
                type : 'error',
                content : `${error}`
            })
        }

    }

    const onDelete = async ()=>{
        try {
            const response = await deleteGroup(id)
            if(response.success){
                setTimeout(()=>{
                    messageApi.open({
                        key : 'updatable',
                        type : 'success',
                        content : `${response.message}`
                    })
                }, 2000)
                navigate("/dashboard/Group")
                
            }else{
                messageApi.open({
                    key : 'updatable',
                    type : 'error',
                    content : `${response.data.message}`
                })
            }
        } catch (error) {
            messageApi.open({
                key : 'updatable',
                type : 'error',
                content : `${error}`
            })
        }
    }

  const handleRemoveExamFormGoup = async (examId)=>{
    try {
       const response = await removeExamGroup({
        groupId : id,
        examId : examId
       })
       if(response.success){
        message.success(response.message)
       }else{
        message.error(response.message)
       }
    } catch (error) {
        message.error(error)
    }
  }

    const columnExam = [
        {
          title: 'title',
          dataIndex: 'name',
          render : (text, record)=> <a className=" 
          hover:underline font-semibold">
            <Link to={`/dashboard/Exam/${record._id}`}>{text}</Link>
          </a>
          
        },
       
        {
          title : 'date',
          dataIndex: 'date',
          key : 'date',
          render : (text ,record)=><a>{moment(text).format("LL")}</a>
        },
        {
          title : "time",
          dataIndex : 'time',
          key : 'time',
          render : (text ,record)=><a>{moment(text).format("LT")}</a>
        },
        {
          title : "pass score",
          dataIndex : 'pass_score',
          key : 'pass_score',
          
        },
        {
          title: 'section',
          dataIndex: 'quiz',
          key : 'quiz+1',
          render : (text, record)=> <a>{text ? text.length : null}</a>
          
        },
        {
          title: 'Key',
          dataIndex: 'key',
          key : 'key',
          render : (text ,record)=><>{record.key ? text :
             <Tag color="yellow">{"None"}</Tag>}</>
    
          
        },
        {
          title : 'create',
          dataIndex : 'createdAt',
          key: 'createdAt',
          render: (text , record) => (
            <>
              {moment(text).format('LL')}
            </>
          ),
            },
            {
              title: 'finish',
              dataIndex: 'onfinish',
              key : 'finish',
              render : (text ,record)=><>{
                record.onfinish ? <Tag color="green">expires</Tag> 
                : <Tag color="yellow">progress</Tag>
              }</>
          
            },
    
            {
              title : 'description',
              dataIndex : 'description',
              key : 'description',
              render: (text , record) => (
                <>
                  {text ? text : <Tag color="yellow">None</Tag>}
                </>
              ),
                },
                {
                    title : 'actions',
                    dataIndex : 'description',
                    key : 'description',
                    render: (text , record) => (
                      <button 
                        onClick={()=> handleRemoveExamFormGoup(record._id)}
                      className="bg-rose-500 active:bg-rose-600 
                      font-roboto text-[12px]
                      px-2 rounded-md text-white">
                        remove
                      </button>
                    ),
                      }
    
        
      ];
    

    useEffect(()=>{
        onGet()       
    } ,[])

      const onChangeTab = (key)=> {
            setTitle(key)      
   }



    return <>
    {contextHolder}
     <NavigatorButton/>
    <div className=" bg-neutral-50 rounded-xl py-2 px-4">
      
        <Descriptions title={ <> 
        <div className="flex justify-between items-center mb-3">
            <Header text={"Course Info"}></Header>
        <div className="flex items-center gap-1 mb-3">
            <Tooltip title="Create Exam">
            <button className="bg-green-600 px-3 rounded-md
             active:bg-variation-400 text-[12px] py-0.5 text-white"
            onClick={()=> navigate(`/dashboard/Group/create-exam`)} >create exam</button>
            </Tooltip>  

            <Tooltip title="Create Student">
            <button 
            className="bg-variation-500 px-3 rounded-md active:bg-variation-400
             text-[12px] py-0.5 text-white"
            onClick={()=>
             navigate("/dashboard/Create-New-Student")}
             >new student</button>
        </Tooltip>
            <Tooltip title="Update Course">
            <button className="bg-yellow-400 px-3 
            rounded-md active:bg-yellow-300 text-[12px] py-0.5" 
           > 
           <Link to={`/dashboard/group/update/${id}`}>
           update
           </Link>
            </button>
                </Tooltip>  
  
        <Popconfirm
      onConfirm={onDelete} 
      okType="default" 
      okText="Delete"
       placement="bottom"
        title="Delete Group"
        description="Are you sure to delete this Group ?"
      >
      <button className="bg-rose-500 px-3 rounded-md
       active:bg-rose-600 text-[12px] py-0.5 text-white">delete</button>
      </Popconfirm>
        </div>
        </div>
        </>}>
                 <Descriptions.Item label="Course">
                 {data.group}
                    </Descriptions.Item>   
                    <Descriptions.Item label="Teacher Name">
                 {data.teacher}
                    </Descriptions.Item> 
                    <Descriptions.Item label="Room">
                 {data?.class}
                    </Descriptions.Item> 
                    <Descriptions.Item label="Level">
                 {data.level}
                    </Descriptions.Item> 
                    <Descriptions.Item label="Total Student">
                    {data.student ? data.student.length : null}
                    </Descriptions.Item> 
                    <Descriptions.Item label="Course Time">
                    {moment(data.time ? data.time[0]:null).format("LT")} - {
                    moment(data.time ? data.time[1]:null).format("LT")}
                    </Descriptions.Item> 
                    <Descriptions.Item label="Course been update">
                    {moment(data.createdAt).format("DD/MM/YYYY")}
                    </Descriptions.Item> 
        </Descriptions>      
    </div>
    <Tabs
    defaultActiveKey={1}
    onChange={onChangeTab}
    items={GroupInfoTab}
    indicatorSize={(origin) => origin - 1}
  />
   <div className="">
    {
        title === 1 &&
        <Table indentSize="10px" size="middle" bordered columns={columnExam} dataSource={exam}/>
    }
    {
        title === 2 && 
        <Table bordered indentSize={10} size="middle" columns={columnsStudent} dataSource={student}/>
    }
   
   </div>
    </>
}


