import {message,
  Button,Radio,Form,Upload ,Card,Typography,Modal, InputNumber, Tabs} from "antd"
import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import {  CiExport, CiUndo } from "react-icons/ci";
import Icon from "../../../components/Icon"
import { useForm } from "antd/es/form/Form"
import { CiSaveUp1, CiFileOn } from "react-icons/ci"
import NavigatorButton from "../../../components/navigatorButton";
import { TitleRender } from "../../../components/Title";
import { Blank } from "../componet/Blank";
import { Mqc } from "../componet/Mqc";
import { WritingForm } from "../componet/WritingForm";
import { createQuestion, updateQuestion } from "../../../api/exam";
import axiosInstance from "../../../api";
import {useDispatch , useSelector} from 'react-redux'
import {loadingAction} from "../../../redux/loaderSlice"
import { RiQuestionAnswerFill, RiCheckDoubleFill} from "react-icons/ri";
import { BiMessageAltEdit } from "react-icons/bi";
import { MdOutlineEditNote } from "react-icons/md";


export default function CreateQuestion() {
    const [form] = useForm()
    const [values ,setValues] = useState()
    const [check , setCheck] = useState(true)
    const {id, title, qid} = useParams()
    const [questionId , setQuestionId] = useState()
    const userRole = useSelector(state => state.auth.userRole)[0]
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const dispactch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const titles = title.toLocaleLowerCase()
    const [updateData ,setUpdateData] = useState()
    const { Dragger } = Upload;
    const [messageApi, contextHolder] = message.useMessage()
   
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    
    const props = {
        onRemove: (file) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          setFileList(newFileList);
        },
        beforeUpload: (file) => {
          setFileList([...fileList, file]);
          return false;
        },
        fileList,
       
      }  

     //questionQuestion from update state 
    const QueryQuestion = async () => {
      await axiosInstance.post(`${process.env.REACT_APP_API_KEY}question`,
       {id : qid}).then(res => {
        setUpdateData(res.data.result)
        form.setFieldsValue(res.data?.result)
       
      }).catch((error)=>{
        messageApi.error(error.res.data.message)
       
      })
     
    }   


    //hanlde upload first file function
      const handleUpload = async (value) => {
        const formData = new FormData();
         fileList.forEach((file) => {
          formData.append('file', file);
        });  
        setUploading(true);
        // You can use any AJAX library you like
        await axiosInstance.post(`${process.env.REACT_APP_API_KEY}question/test/${id}`, 
        formData)
        .then(res => {
          setUploading(false)
          setQuestionId(res.data.questionId)
          messageApi.success("upload successfully")
          form.setFieldsValue({
            questionId : res.data.questionId
          })
          
        }).catch(error =>{
          setUploading(false)
          messageApi.error("upload unsuccessfully")
          setUploading(false)
        } )
        setUploading(false)
      };

      //fill new a question form with section id 
      //and question id after upload file
      const fillId = ()=>{
        form.setFieldsValue({
          subId : id,
        })
      }

     
    //update question and create question function handle
    const onFinish = async (value)=>{
        try { 
          const response = qid ? await updateQuestion(qid , value) :
                            await createQuestion(id , value) 
          if(response.success){
            messageApi.success(response.message)
          }else{
            messageApi.error(response.data.message)
          }
        } catch (error) {
          messageApi.error(error)
        }
        }
            

     useEffect(()=>{
      dispactch(loadingAction.ShowLoading())
      QueryQuestion()
      dispactch(loadingAction.HideLoading())
      form.setFieldsValue(updateData)
      TitleRender("CreateQuestion")
     }, [])           


     const uploadForm = () => {
      return <Modal
        okType='default'
        okText="upload"
       title="upload file"
      open={isModalOpen}
       onOk={handleUpload} 
      onCancel={handleCancel}>
       <div className="flex flex-col bg-neutral-50 
       border-dashed border items-center 
       border-neutral-200
       justify-center rounded-xl h-[10rem] ">
          {/* file upload */}
          {
            qid ? <></> :
          <div className="space-y-2 mb-1">
      <Upload className="flex w-full"
       accept=".png, .jpg, .jpeg, .mp4, .mp3" listType="picture" {...props}>
        {
          fileList.length > 0 ? null :
          <Button className="border border-dashed"
          icon={<CiExport/>}>Upload file from computer</Button>
        }
      </Upload>
    </div>
}
    </div>
    </Modal>
     }

    return <>
    {contextHolder}
    {uploadForm()}
    <NavigatorButton/>
    <Form
    layout="vertical"
    labelCol={{
    }}
    wrapperCol={{
      span: 29,
    }}
    form={form}
    onFinish={onFinish}
    name="dynamic_form_complex"
    autoComplete="off">
    <div className="flex flex-col gap-2">
          <Form.Item
    className="mt-4 border-b border-neutral-200 pb-2"
    name={"name"} rules={[
            {
              required: true,
              message: 'Type is undefine',
              whitespace : true,
              },
              ]} 
              valuePropName={values}>
              <Radio.Group
              style={{
                border: 'none'
              }}
              onChange={fillId}
             >
            <Radio.Button
            style={{
              border: 'none',
            }}
            onChange={()=> setCheck(true)}
            disabled={titles !== "writing"
             ? false : true}
              onClick={()=>setCheck(true)}
              value="Mqc">
                <span className="flex gap-1 items-center">
                <Icon Size={"1.2rem"} name={<RiCheckDoubleFill />}/>
               <p> multiple choice</p>
               </span>
              </Radio.Button>
            <Radio.Button
             style={{
              border: 'none',
            }} 
            disabled={titles !==
             "writing" ? false : true} 
              onClick={()=>setCheck(false)} 
              value="Blank">
                <span className="flex items-center gap-2">
                <Icon Size={"1.2rem"} name={<BiMessageAltEdit />}/>
                <p>fill in blank </p>
                </span>
               </Radio.Button>
            <Radio.Button
             style={{
              border: 'none',
              
            }} 
            disabled 
               value="Q&A">
                <span className="flex items-center gap-2">
                <Icon Size={"1.2rem"} name={<RiQuestionAnswerFill/>}/>
                <p>Q&A </p>
                </span>
               </Radio.Button>
                <Radio.Button 
                 style={{
                  border: 'none',
                  borderRadius : '0px'
                }}
                disabled={titles
               !== "writing" ? true : false}  
               onClick={()=>setCheck(false)} 
               value="writing">
                <span className="flex items-center gap-2">
                <Icon Size={"1.2rem"} name={<MdOutlineEditNote/>}/>
                <p>writing</p>
                </span>
                </Radio.Button>
        </Radio.Group>
              </Form.Item>
            <Card
            className="bg-neutral-50 border-none"
              size="small"
              title={` ${qid ? "Update" : "Create"} ${title} Question `}
            >
          <div className="flex
           justify-between items-center gap-2"> 
<p className="text-[12px] px-2 rounded-md 
bg-[#fef9c3] font-semibold pb-1 text-rose-600">
  ✨if question contain file please 
    upload file first before create question</p>
              <div className="flex items-center gap-3">
    <Form.Item name={"questionId"}>
    </Form.Item>
    <Form.Item name={"subId"}>
    </Form.Item>
    </div>
           <div className="flex gap-2">
        <Button
         className="flex rounded-xl items-center"
        icon={<Icon Size={"1.2rem"} 
        name={<CiFileOn/>}></Icon>}
         onClick={showModal}>
        upload file
        </Button>
          <Button icon={<Icon Size={"1.2rem"} 
          name={<CiUndo/>}></Icon>} 
          onClick={()=> form.resetFields()}
           className="bg-yellow-300 rounded-xl flex items-center">reset</Button>
          <Button htmlType="submit" icon={<Icon Size={"1.2rem"} 
          name={<CiSaveUp1/>}></Icon>} 
      className="flex rounded-xl  bg-variation-500
       text-white justify-center items-center">
        {qid ? "update" : "save"}
          </Button>
            </div>
          </div>
    <div className="border-b mb-2 border-gray-300"></div>

    <Form.Item label="score" name={'point'}>
                <InputNumber/>
              </Form.Item>
    {/* file upload and mark a point */}
    {/* question operation */}
          {titles !== "writing" ? <>
          {/* none writing form */}
          <div>
              {
                check ? <div>

                  <Mqc form={form}
                  correctAnswer={form.getFieldsValue().options}
                  />
                </div> : <Blank form={form}/>
              }
              </div> 
          </>  : <>
          {/* writing form */}
        <WritingForm form={form}/> 
          </>
}
 {/* question operation */}
            </Card>
        </div>
        {
          userRole === "developer" ?  <Form.Item noStyle shouldUpdate>
      {() => (
        <Typography className="overflow-y-auto h-32">
          <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
        </Typography>
      )}
    </Form.Item> : <></>
      }
  </Form>
    </>
}







