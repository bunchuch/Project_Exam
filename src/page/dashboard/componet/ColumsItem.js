import { Tag } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";


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
  ];


  

