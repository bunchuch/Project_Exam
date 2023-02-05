import {useState ,useEffect} from "react"
import {Table, Tag, message} from "antd"
import {useParams , Link} from "react-router-dom"
import moment from "moment"
import axios from "axios"
import { CSVLink } from "react-csv"
export const ReportExam = () => {
    const [data ,setData] = useState([])
    const {id} = useParams()

 
    const GetReport = async () => {
      await  axios.post(`${process.env.REACT_APP_API_KEY}report`
      , {examId : id}).then((res)=> {
            setData(res.data.result)
            console.log(res.data.result)
        }).catch((error)=> 
        message.error(error.response.data.message)
        )
    }
   
    useEffect(()=> {
        GetReport()
    },[])


    

const columnsReport = [
        {
          title: 'username',
          dataIndex: 'username',
          key : "username",
          render : (text,record)=> 
          <Link to= {`/dashboard/student/${record._id}`}>
            {text}</Link>
        },
        {
          title: 'vocabulary',
          dataIndex: 'vocabulary',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
      
        {
            title: 'reading',
            dataIndex: 'reading',
            key : 'reading',            
        },
        {
            title: 'GQ',
            dataIndex: 'general question',
            key : 'reading',
            
        },
        {
            title: 'grammar',
            dataIndex: 'grammar',
            key : 'reading',
            
        },
        {
            title: 'wrirting',
            dataIndex: 'writing',
            key : 'writing',
            
        },
        {
            title: 'listenning',
            dataIndex: 'listenning',
            key : 'writing',
            
        },
        {
            title: 'total score',
            dataIndex: 'total',
            key : 'total',
            
        },
        {
            title: 'status',
            dataIndex: 'status',
            key : 'status',
            render : (text)=> <Tag color={text == "pass" ? "green" : "red"}>{text}</Tag>
            
        },
        {
            title: 'Submit Date',
            dataIndex: 'updatedAt',
            key : 'updateAt',
            render : (text, record)=> <>{moment(text).format("YY/MM/DD:HH:mm:ss")}</>
            
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
    

    return <>
    <div className="flex gap-3 items-center">
    <p className="text-[14px] mt-2 text-gray-300">
     ✨ Click on each id for view result
        </p>
<a><CSVLink className="bg-variation-500 
        text-white rounded-md py-[1px] px-2" filename="studnetRport.csv" data={[]}>
        Export to CSV
      </CSVLink></a>  
    </div>
   <Table bordered className="mt-3"  
   columns={columnsReport} dataSource={data}></Table>
    </>

}