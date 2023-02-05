import { Tag ,Space, Popconfirm, message, Tooltip, Button } from "antd";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import { CiCirclePlus, CiEdit, CiRead, CiTrash } from "react-icons/ci";
import { deteleSubject } from "../../../api/quiz";





export const columnsUser = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) =><a className="hover:underline active:underline">
        <Link to={`/dashboard/User/`+ record._id}>{text}</Link></a> ,
      },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
    title: 'createAt',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render : (text ,record)=> <p>{moment(record.createdAt).format('DD/MM/YYYY')}</p>
   
  },
  {
    title: 'updateAt',
    dataIndex: 'updatedAt',
    key: 'updateAt',
    render : (text ,record)=> <p>{moment(record.updatedAt).format('DD/MM/YYYY')}</p>
   
  },
      {
        title: 'Roles',
        key: 'role',
        dataIndex: 'role',
        render: (_, { role }) => (
          <>
            {role.map((role) => {
              let color = role.length >= 6 ? 'geekblue' : 'green';
              if (role === 'Owner') {
                color = 'volcano';
              }else if (role === 'staff'){
                color = 'purple'
              }
              return (
                <Tag color={color} key={role}>
                  {role.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
          }
]



export const columnsStudent = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (text, record) =><Link to={`/dashboard/student/${record._id}`}>{text}</Link>
      
    },
    {
      title: 'Firstname',
      dataIndex: 'firstname',
      key : 'firstname' ,
      filters : [
        {
          text : "jonh",
          value : 'jonh'
        }
      ]
      
    },
    {
      title: 'Lastname',
      dataIndex: 'lastname',
      key : 'lastname',
      
    },
    {
      title: 'DateBrith',
      dataIndex: 'dateBirth',
      key: "dateBirth",
      render : (text ,record) => <p>{moment(text).format("YYYY/MM/DD")}</p>
      

  },
    {
      title: 'Email',
      dataIndex: 'email',
      key : 'email'
     
      
    },
    {
        title: 'ParentPhone',
        dataIndex: 'parentPhone',
        key: "parentPhone"
        

    },
    {
      title: 'PersonalPhone',
      dataIndex: 'personalPhone',
      key : 'personalPhone'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key : "Address",
      render :(text, record)=> <a>{text}</a>
     

  },
    {
        title: 'Create',
        dataIndex: 'createdAt',
        key : 'createdAt',
        render : (text ,record)=> <a>{moment(text).format("YYYY/MM/DD")}</a>
    },
  {
    title: "Status",
    dataIndex: 'description',
    key : "description"
  }
  ];


  export const columnsReport = [
    {
      title: 'user',
      dataIndex: 'userId',
      key : "userId",
      render : (text)=> <Link to= {`/dashboard/report/${text}`}>{text}</Link>
    },
    {
      title: 'examId',
      dataIndex: 'examId',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
  
    {
        title: 'submit',
        dataIndex: 'updatedAt',
        key : 'updatedAt',
        render : (text, record)=> <>{moment(text).format("YY-MM-DD : HH:mm:ss")}</>
        
    },

    // {
    //     title: 'status',
    //     dataIndex: 'status',
    //     sorter: {
    //       compare: (a, b) => a.english - b.english,
    //       multiple: 1,
    //     }, 
    //     render: (_, status) => (
    //       <Space size={[0, 8]} wrap>
    //        <Tag color={status.status === "pass" ? "success" : "error"}>
    //       {status.status}
    //        </Tag>
    //       </Space>
    //     ),
        
    // }
  ];


  export const columnCourse = [
    {
      title: 'title',
      dataIndex: 'name',
      render : (text, record)=> <a className=" 
      hover:underline font-semibold">
        <Link to={`/dashboard/Exam/${record._id}`}>{text}</Link>
      </a>
      
    },
   
    {
      title : 'start-date',
      dataIndex: 'startDate',
      key : 'start-date+1',
      render : (text ,record)=><a>{moment(text).format("YYYY-MM-DD")}</a>
    },
    {
      title : 'end-date',
      dataIndex: 'endDate',
      key : "score",
      render : (text ,record)=><a>{moment(text).format("YYYY-MM-DD")}</a>
    },
    {
      title : "duration",
      dataIndex : 'time',
      key : 'time',
    },
    {
      title : "Pass score",
      dataIndex : 'pass_score',
      key : 'pass_score',
      
    },
    {
      title: 'Exam subject',
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
      title : 'create data',
      dataIndex : 'createdAt',
      key: 'createdAt',
      render: (text , record) => (
        <>
          {moment(text).format('DD-MM-YYYY : h:mm')}
        </>
      ),
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
            }

    
  ];

