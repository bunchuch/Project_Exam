import { Tag ,Space, Popconfirm } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";



// const onDelete = async (id) =>{
//   await axios.delete(`${process.env.REACT_APP_API_KEY}exam/delete/${id}`).then(res=>{
//     window.location.reload()
//   }).catch(error => {
//     alert(error.data.message)
//   })
// }

function formatDate (date) {
    return new Date()
}



export const columnsUser = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) =><a className="hover:underline active:underline">
        <Link to={`/dashboard/User/`+ record._id}>{text}</Link></a>
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
    title: 'create-At',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
   
  },
      {
        title: 'Roles',
        key: 'role',
        dataIndex: 'role',
        render: (_, { role }) => (
          <>
            {role.map((role) => {
              let color = role.length > 5 ? 'geekblue' : 'green';
              if (role === 'Owner') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={role}>
                  {role.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <Popconfirm 
            okType="default"
            title="Delete the user"
            description="Are you sure to delete this user?"
             >
            <a>Delete</a>
            </Popconfirm>
           
            <a>Update</a>
          </Space>
        ),
      },

]



export const columnsStudent = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) =><Link to={`/dashboard/User/`+ record.name}>{text}</Link>
      
    },
    {
      title: 'Class',
      dataIndex: 'class',
      key : 'class' ,
      filters : [
        {
          text : "jonh",
          value : 'jonh'
        }
      ]
      
    },
    {
      title: 'Group',
      dataIndex: 'group',
      
    },
    {
      title: 'Teacher',
      dataIndex: 'teacher',
     
      
    },
    {
        title: 'Link',
        dataIndex: 'contact',
        

    },
    {
        title: 'CreateAt',
        dataIndex: 'CreatedAt',
       

    },
  {
    title: "Status",
    dataIndex: 'description'
  }
  ];


  export const columnsReport = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Listenning',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Vocabulary',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Grammer',
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
      
    },
    {
        title: 'Reading',
        dataIndex: 'english',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },

    },
    {
        title: 'Writing',
        dataIndex: 'english',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },

    },
    {
        title: 'Grenal Knownlage',
        dataIndex: 'english',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },

    },

    {
        title: 'Groups',
        dataIndex: 'english',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        }, 
        
    },

    {
        title: 'status',
        dataIndex: 'status',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        }, 
        render: (_, status) => (
          <Space size={[0, 8]} wrap>
           <Tag color={status.status === "pass" ? "success" : "error"}>
          {status.status}
           </Tag>
          </Space>
        ),
        
    }
  ];


  export const columnCourse = [
    {
      title: 'title',
      dataIndex: 'title',
      render : (text, record)=> <a className=" 
      hover:underline font-semibold">
        <Link to={`/dashboard/examsh/${record._id}`}>{text}</Link>
      </a>
      
    },
   
    {
      title : 'type',
      dataIndex: 'type'
    },
    {
      title: 'Key',
      dataIndex: 'key',
      
    },
  ];
