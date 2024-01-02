import react, {useState , useEffect} from "react"
import { useParams,Link, useNavigate } from "react-router-dom"
import axios from "axios"
import NavigatorButton from "../../../components/navigatorButton"
import { Descriptions, Card, Table, Tag, Modal, Form ,Input,
  Empty, 
  InputNumber,Button,Tabs, message} from 'antd';
import moment from "moment";
import { useForm } from "antd/es/form/Form"
import { CSVLink } from "react-csv";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../../redux/loaderSlice";
import { getGroupReport, updateStudentScore } from "../../../api/report";
import { getStudent, removeStuent, resetPasswordStudent } from "../../../api/student";


export default function StudentResult () {

    const {id} = useParams()
    const [user ,setUser] = useState()
    const [report ,setReport] = useState()
    const [data ,setData] = useState([])
    const [password ,setPassword] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const navigator = useNavigate()


    const GetUser = async () => {
      dispatch(loadingAction.ShowLoading())
      const response = await getStudent(id)
      dispatch(loadingAction.HideLoading())
      if(response){
          setUser(response.result)
        }else{
          message.error(response.data.message)
        }
      }
   
    //find user with exam report
     const getData = async ()=> {
        try {
          dispatch(loadingAction.ShowLoading())
          const response = await getGroupReport({userId : id}) 
          dispatch(loadingAction.HideLoading())
          if(response.success){
              setReport(response.result)
          }else{
            message.error(response.data.message)
          }
        } catch (error) {
         message.error(error) 
        }
     }
    
     const resetPassword = async () =>{
      dispatch(loadingAction.ShowLoading())
        const response = await resetPasswordStudent(id ,{
          password : password
        })
        dispatch(loadingAction.HideLoading())
        if(response.success){
          message.success(response.message)
        }else{
          message.error(response.data.message + password)
        }
     }
  

   const handleDeleteStudent = async (id) => {
        try {
          dispatch(loadingAction.ShowLoading())
          const response = await removeStuent({
            stuId : id,
            courseName : user?.courseName
          })
          dispatch(loadingAction.HideLoading())
          if(response.success){
            message.success(response.message)
            navigator(-1 ,{replace : true})
          }else{
            message.error(response.data.message)
          }
        } catch (error) {
          message.error(error)
        }
   }

     const showModal = (name) => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

// console.log(report)
// console.log(user)
      
useEffect(()=> {
    getData()
    GetUser()
} ,[data])


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
      key: 'classes',
      label: 'classe',
      children: user?.class,
    },
    {
      key: '2',
      label: 'ParentPhone',
      children: user?.parentPhone ? user?.parentPhone : "###-###-###",
    },
    {
      key: '3',
      label: 'Live',
      children: user?.address,
    },
    {
      key: 'course',
      label: 'course',
      children: user?.courseName,
    },
    {
      key: '4',
      label: 'Remark',
      children: user?.description ? user?.description : "none",
    },
    {
      key: '5',
      label: 'Personal Phone',
      children: user?.personalPhone ? user?.personalPhone : "##-###-###",
    },
    {
        key: '6',
        label: 'Date of Brith',
        children: <a className="flex gap-2">
          {moment(user?.dateBirth).format("DD/MM/YYYY")}
       </a> ,
      },
      {
        
        key: '7',
        label: 'actions',
        children:<div className="flex flex-wrap gap-2">
        <button disabled className="flex gap-4 p-1 text-[10px]
         bg-variation-500 rounded-md text-white">
          <CSVLink className="disabled
        text-white rounded-md px-2" 
        filename="studnetRport.csv" data={csvData}>
        Export to PDF
      </CSVLink></button>
      <button onClick={()=>{ 
      showModal()
      }
    }  className="flex 
      gap-2 py-1 px-2 rounded-md text-[10px]
         bg-green-600 text-white">
        resetPassword
         </button>
         <button className="flex gap-2 py-1 px-2 rounded-md text-[10px]
         bg-yellow-300 ">
          <Link to={`/dashboard/update-student/${id}`}>update</Link>
         </button>
         <button onClick={()=> handleDeleteStudent(id)}  className
         ="flex gap-2 py-1 px-2 rounded-md text-[10px]
         bg-rose-500 text-white">
          delete
         </button>
        </div>
      }
  ];

 

 const tableItem = [
  {
    key: '2',
    label: 'Result',
    children: <div className="grid grid-cols-4 gap-2">
    {
    report ? report?.map((items, key)=>
    <Link  to={`/dashboard/student/report/${items._id}`}>
      <Card key={key}>
       <p className="font-roboto">Exam Date</p>
        <p> 
        {moment(items.createdAt).format('LL')}
        </p>
      </Card>
      
      </Link>) : <Empty className="flex justify-center"></Empty>
    }
    </div> 
  }
 ] 
  
    return <div className="font-roboto">
        <NavigatorButton/>
        <div className="mb-3 bg-white rounded-lg
         border-neutral-200 border-[1px] p-3">
        <Descriptions title={
          <>
          <p>User Info</p>
          </>
          
          } items={items} />
        </div>
        <div>
        <Modal okText="update" okType="default" title={
        "reset password"} open={isModalOpen} 
          onOk={resetPassword}
          onCancel={handleCancel}>
            <>
              <Form   
              className="w-full">
              <Form.Item
              name="password"
          >
            <Input.Password
            onChange={(e)=> setPassword(e.target.value)}
            ></Input.Password>
          </Form.Item>
          </Form>
        </>
      </Modal>
      </div>
      <Tabs defaultActiveKey="1" items={tableItem}/> 
    </div>
}