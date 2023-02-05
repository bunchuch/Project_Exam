import react, {useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import NavigatorButton from "../../../components/navigatorButton"
import { Descriptions, Table, Tag, Modal, Form ,Input, InputNumber, message} from 'antd';
import moment from "moment";
import { useForm } from "antd/es/form/Form"
import { CSVLink } from "react-csv";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";

export default function StudentResult () {

    const {id} = useParams()
    const [user ,setUser] = useState()
    const [report ,setReport] = useState()
    const [data ,setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [markPoint , setMarkPoint] = useState(0)
    const [form] = useForm()
    const [names ,setName] = useState("")
    const dispatch = useDispatch()

     const findResult = async ()=> {
       await axios.post(`${process.env.REACT_APP_API_KEY}report`, 
       {userId :  id}).then((res)=> {
            setReport(res.data.result)
            console.log(res.data.result)
            setUser(res.data.result.user)
        }).catch((error)=> {
          message.error(error.response.data.message)
        })
     }

     const showModal = (name) => {
        setIsModalOpen(true);
        setName(name)
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      const handleUpdateScore = ()=>{
        alert(markPoint , id , report._id)
        axios.post(`${process.env.REACT_APP_API_KEY}report/update`, 
        {
            stuId :  id,
            markPoint : markPoint,
            name : names,
            rid : report?._id
        
        })
        
        .then((res)=> {
          message.success(res.data.message)
          
         }).catch((error)=> {
            message.error(error.response.data.message)
         })
     }


useEffect(()=> {
  dispatch(loadingAction.ShowLoading())
    findResult()
  dispatch(loadingAction.HideLoading())
} ,[])


const csvData = [
    ["Username"],
    data.map(({username }) => [
      username,
    ]),
  ];

const items = [
    {
      key: '1',
      label: 'UserName',
      children: user?.username,
    },
    {
      key: '2',
      label: 'Telephone',
      children: user?.parentPhone,
    },
    {
      key: '3',
      label: 'Live',
      children: user?.address,
    },
    {
      key: '4',
      label: 'Remark',
      children: user?.courseName,
    },
    {
      key: '5',
      label: 'Personal Phone',
      children: user?.personalPhone,
    },
    {
        key: '6',
        label: 'Date of Brith',
        children: <a className="flex gap-2">
          {moment(user?.dateBirth).format("DD/MM/YYYY")}
        <CSVLink className="bg-variation-500 
        text-white rounded-md px-2" filename="studnetRport.csv" data={csvData}>
        Export to CSV
      </CSVLink></a> ,
      },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'subjectName',
      key: 'subjectName',
      render: (text) => <a className="font-semibold text-variation-500">{text}</a>,
    },
    {
      title: 'result',
      dataIndex: 'markPoint',
      key: 'markPoint',
    },
    {
        title : "formData",
        dataIndex : 'formData',
        key : "formData",
        render : (text)=><a
         onClick={()=>window.open(`${process.env.REACT_APP_API_KEY + text}`, 'blank')}>{text}</a>
},
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      render : (text ,record)=>
       <>{ text ? <Tag color={text === "failed" ? "red" : "green"}>
        {text}</Tag> : <button onClick={()=>showModal(record.subjectName)} className="py-[3px] 
        rounded-md bg-variation-500 text-white
         px-2 text-[10px]">Update Score {record.subjectName}</button> }</>
    }
  ]
  
    return <div>
        <NavigatorButton/>

        <div className="mb-3 bg-white rounded-lg border-neutral-200 border-[1px] p-3">
        <Descriptions title="User Info" items={items} />
        </div>
        <Modal okType="default" title="update writing Score" open={isModalOpen} 
        onOk={handleUpdateScore} onCancel={handleCancel}>
       <Form  className="w-full">
       <Form.Item>
            <Input disabled value={report?._id}/>
        </Form.Item>
        <Form.Item>
            <Input value={names}/>
        </Form.Item>
        <Form.Item name={"markPoint"}>
        <InputNumber max={25} defaultValue={0} 
        onChange={(value)=> setMarkPoint(value)}  className="w-full"/>
        </Form.Item>
       </Form>
      </Modal>
        <Table bordered dataSource={report?.result} columns={columns} ></Table>
        
    </div>
}