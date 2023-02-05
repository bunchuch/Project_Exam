import {message,
  Button,Radio,Form,Input,Upload ,Card,Typography, InputNumber} from "antd"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { CiCircleMinus, CiCirclePlus,
   CiExport, CiUndo } from "react-icons/ci";
import Icon from "../../../components/Icon"
import { useForm } from "antd/es/form/Form"
import { CiSaveUp1 } from "react-icons/ci"
import NavigatorButton from "../../../components/navigatorButton";
import { TitleRender } from "../../../components/Title";
import { Blank } from "../componet/Blank";
import { Mqc } from "../componet/Mqc";
import { WritingForm } from "../componet/WritingForm";


export default function CreateQuestion() {
    const [form] = useForm()
    const [values ,setValues] = useState()
    const [check , setCheck] = useState(true)
    const {id, title, qid} = useParams()
    const [questionId , setQuestionId] = useState()
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const titles = title.toLocaleLowerCase()
    const [updateData ,setUpdateData] = useState()
 
   
    
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
    const QueryQuestion = () => {
      axios.post(`${process.env.REACT_APP_API_KEY}question`, {id : qid}).then(res => {
        setUpdateData(res.data.result)
        form.setFieldsValue(res.data?.result)
      })
    }   

      const handleUpload = async (value) => {
        const formData = new FormData();
        console.log(fileList)
         fileList.forEach((file) => {
          formData.append('file', file);
          console.log(file)
        });  
        setUploading(true);
        // You can use any AJAX library you like
        await axios.post(`${process.env.REACT_APP_API_KEY}question/test/${id}`, 
        formData)
        .then(res => {
          setUploading(false)
          setQuestionId(res.data.questionId)
          message.success("upload successfully")
          
        }).catch(error =>{
          setUploading(false)
          message.error("upload unsuccessfully")
          console.log(error)
          setUploading(false)
        } )
        setUploading(false)
      };
      const fillId = ()=>{
        form.setFieldsValue({
          subId : id,
          questionId : questionId,
        })
      }

     

    const onFinish = async (value)=>{
      console.log(value)
        qid ? alert("helowrold") :
         await axios
         .post(`${process.env.REACT_APP_API_KEY}question/create/${id}`,
           value)
          .then(res => message.success(res.data.message))
          .catch(err =>
                  {
                  message.error(err.message)
                  alert(err.data.message)})
                }
            
     useEffect(()=>{
      QueryQuestion()
      form.setFieldsValue(updateData)
      TitleRender("CreateQuestion")
     }, [])           

    return <>
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
    <div
      style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap : 10 }} >
            <Card
              size="small"
              title={` ${qid ? "Update" : "Create"} ${title} Question `}
            >
          <div className="flex
           justify-between items-center gap-2"> 
          <Form.Item name={"name"} rules={[
            {
              required: true,
              message: 'Type is undefine',
              },
              ]} 
              label="Select Type" 
              valuePropName={values}>
              <Radio.Group
              onChange={fillId}
              size={"small"}
             buttonStyle="solid">
            <Radio.Button
            disabled={title !== "writing"
             ? false : true}
              onClick={()=>setCheck(true)}
              value="Mqc">MQC</Radio.Button>
            <Radio.Button 
            disabled={title !==
             "writing" ? false : true} 
              onClick={()=>setCheck(false)} 
              value="Blank">Blank</Radio.Button>
            <Radio.Button disabled 
               value="writing">Q&A</Radio.Button>
                <Radio.Button disabled={title
               !== "writing" ? true : false}  
               onClick={()=>setCheck(false)} 
               value="writing">Writing</Radio.Button>
        </Radio.Group>
              </Form.Item>
              <div className="flex items-center gap-3">
    <Form.Item name={"questionId"}>
    </Form.Item>
    <Form.Item name={"subId"}>
    </Form.Item>
    </div>
           <div className="flex gap-2">
          <Button icon={<Icon Size={"1.2rem"} 
          name={<CiUndo/>}></Icon>} 
          onClick={()=> form.resetFields()}
           className="bg-yellow-300 flex items-center">reset</Button>
          <Button htmlType="submit" icon={<Icon Size={"1.2rem"} 
          name={<CiSaveUp1/>}></Icon>} 
      className="flex  bg-variation-500
       text-white justify-center items-center">
        save
          </Button>
            </div>
          </div>

    {/* file upload and mark a point */}
    <div className="flex items-center gap-2">
          <Form.Item label="Point" name={'markPoint'}>
                <InputNumber/>
              </Form.Item>
          {/* file upload */}
       <div className="space-y-2 mt-1 mb-1 ">
      <Upload accept=".png, .jpg, .jpeg, .mp4, .mp3" listType="picture" {...props}>
        <Button icon={<CiExport/>}>Upload file from computer</Button>
      </Upload>
      <Button
      className="float-right"
        onClick={handleUpload}
        hidden={fileList.length === 0}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </div>
    </div>
    {/* file upload and mark a point */}

    {/* question operation */}
          {title !== "writing" ? <>
          {/* none writing form */}
          <div>
              {
                check ? <div className="grid grid-cols-2 gap-2">

                  <Mqc/>
                </div> : <Blank form={form}/>
              }
              </div> 
          </>  : <>
          {/* writing form */}
        <WritingForm/> 
          </>
}
 {/* question operation */}
            </Card>
        </div>
    <Form.Item noStyle shouldUpdate>
      {() => (
        <Typography className="overflow-y-auto h-32">
          <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
        </Typography>
      )}
    </Form.Item>
  </Form>
    </>
}







