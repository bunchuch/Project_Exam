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
import { deleteReport, getGroupReport, updateStudentScore } from "../../../api/report";
import { getStudent, removeStuent, resetPasswordStudent } from "../../../api/student";
import Icon from "../../../components/Icon";
import { CiTrash } from "react-icons/ci";
import StudentExam from "./studentExam";
import { studentBoard } from "../componet/TabItems";

export default function StudentProfile () {

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

   const handleDeleteReport = async (id) => {
      try {
        const response = await deleteReport(id)
        if(response.success){
          message.success(response.message)
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

 
  
    return <div className="font-ubuntu">
        <NavigatorButton/>
        <div className="mb-3
          py-3">
        <Descriptions className="font-ubuntu" title={
          <div className="flex justify-between">
          <p>Student Info</p>


          <div className="flex flex-wrap gap-2">
        {/* <button disabled className="flex  gap-4 p-1 text-[10px]
         bg-variation-500 rounded-md text-white">
          <CSVLink className="disabled
        text-white rounded-md px-2" 
        filename="studnetRport.csv" data={csvData}>
        Export to PDF
      </CSVLink></button> */}
      <button onClick={()=>{ 
      showModal()
      }
    }  className="flex 
      gap-2 py-1 px-2 rounded-md text-[10px]
         bg-gray-900 text-white">
         Rest Student Password
         </button>
         <button className="flex gap-2 py-1 px-2 rounded-md text-[10px]
         bg-gray-50 border-gray-300 text-gray-900 ">
          <Link to={`/dashboard/update-student/${id}`}>Edit</Link>
         </button>
         <button onClick={()=> handleDeleteStudent(id)}  className
         ="flex gap-2 py-1 px-2 rounded-md text-[10px]
         bg-gray-50 border-gray-300 text-gray-900 ">
          Delete
         </button>
        </div>

          </div>
          
          }>
            <Descriptions.Item label="Firstname">
              {user?.firstname}
            </Descriptions.Item>
            <Descriptions.Item label="Lastname">
              {user?.lastname}
            </Descriptions.Item>
            <Descriptions.Item label="Username">
              {user?.username}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">
              {user?.gender == "F" && "Female" }
              {user?.gender == 'M' && "Male"}
              {user?.gender == "optional" && 'Optional'}
            </Descriptions.Item>
            <Descriptions.Item label="Room">
              { user?.class}
            </Descriptions.Item>
            <Descriptions.Item label="Course">
              { user?.courseName}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {user?.address}
            </Descriptions.Item>
            <Descriptions.Item label="Parent Phone">
              {user?.parentPhone}
            </Descriptions.Item>
            <Descriptions.Item label="Remarks">
             {user?.description ?  user?.description : "none"}
            </Descriptions.Item>
            <Descriptions.Item label="Phone number">
            { user?.personalPhone ? user?.personalPhone : "+855-000-000"}
            </Descriptions.Item>
            <Descriptions.Item label="Date Of Birth">
            {moment(user?.dateBirth).format("LL")}
            </Descriptions.Item>
            <Descriptions.Item label="Registerd">
              {moment(user?.createdAt).format('LL')}
            </Descriptions.Item>
            </Descriptions>
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
      <Tabs defaultActiveKey="1" items={studentBoard}/> 
    </div>
}