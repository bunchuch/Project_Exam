import { Tag } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import { IoEllipse } from "react-icons/io5";

export const columnsUser = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) =><a className="hover:underline active:underline">
        <Link to={`/dashboard/User/`+ record._id}>{text}</Link></a> ,
      },
    {
      title: 'e-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
    title: 'enroll to work',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render : (text ,record)=> <p>{moment(record.createdAt).format('LL')}</p>
   
  },
  {
    title: 'last update',
    dataIndex: 'updatedAt',
    key: 'updateAt',
    render : (text ,record)=> <p>{moment(record.updatedAt).format('LL')}</p>
   
  },
      {
        title: 'remarks',
        key: 'role',
        dataIndex: 'role',
        render: (_, { role }) => (
          <>
            {role.map((role) => {
              let color = role.length >= 6 ? 'geekblue' : 'green';
              if (role === 'superadmin') {
                color = 'volcano';
              }else if (role === 'staff'){
                color = 'yellow'
              }else if (role === "teacher"){
                color = "purple"
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
      title: 'username',
      dataIndex: 'username',
      key: 'username',
      render: (text, record) =><a className="text-variation-500 
      font-semibold hover:underline">
        <Link to={`/dashboard/student/${record._id}`}>{text}</Link></a>
      
    },
    {
      title: 'firstname',
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
      title: 'lastname',
      dataIndex: 'lastname',
      key : 'lastname',
      
    },
    {
      title: 'brithday',
      dataIndex: 'dateBirth',
      key: "dateBirth",
      render : (text ,record) => <p>{moment(text).format("LL")}</p>
      

  },
    {
      title: 'e-mail',
      dataIndex: 'email',
      key : 'email'
     
      
    },
    {
        title: 'parentphone',
        dataIndex: 'parentPhone',
        key: "parentPhone"
        

    },
    {
      title: 'personalphone',
      dataIndex: 'personalPhone',
      key : 'personalPhone'
    },
    {
      title: 'address',
      dataIndex: 'address',
      key : "Address",
      render :(text, record)=> <a>{text}</a>
     

  },
    {
        title: 'registered',
        dataIndex: 'createdAt',
        key : 'createdAt',
        render : (text ,record)=> <a>{moment(text).format("LL")}</a>
    },
    {
      title: "status",
      dataIndex: 'description',
      key : "description",
      render : (text,record)=> 
      <><Icon
      color={text ? '#fde047' : '#16a34a'}
      Size={'0.6rem'}
        name={<IoEllipse/>}
      
      /></>
    },
  {
    title: "description",
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
  ];


  

