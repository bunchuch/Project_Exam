import { Form, Input, Select, message, Tag, Button, InputNumber,
     TimePicker, DatePicker, ConfigProvider, Modal } from "antd";
import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import Header from "../../../components/Header";
import { CiRuler} from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import NavigatorButton from "../../../components/navigatorButton";
import { createExam,examGetById, updateExam } from "../../../api/exam";
import { useEffect } from "react";
import { loadingAction } from "../../../redux/loaderSlice";
import locale from 'antd/es/locale/en_US';





export default function CreateExam(){
    const courseName = useSelector(state => state.course.courseName)
    const {id} = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [time ,setTime] = useState()
    const [date , setDate] = useState()
    const [form] = Form.useForm()
    const dispactch = useDispatch()
    const dateFormat = "YYYY-MM-DD"
    const timeFormat = "HH:mm"
    const {Option} = Select
    const [messageApi , contextHolder] = message.useMessage()

    const onCreate = async (value)=>{
        try {
            dispactch(loadingAction.ShowLoading())
            const request = id ? await updateExam(id , value) 
            : await createExam(value)
            dispactch(loadingAction.HideLoading())
            if(request.success){
                messageApi.success(request.message) 
            }else{       
            messageApi.error(request.data.message) 
            }
        } catch (error) {
           messageApi.info(error)
        }
       
    }
   
    const onGetExam = async ()=>{
        dispactch(loadingAction.ShowLoading())
        const response = await examGetById(id)
        dispactch(loadingAction.HideLoading())
        if(response.success){
            messageApi.success(response.message) 
            if(id){
                form.setFieldsValue(response.result)
            }
        }else{
          messageApi.error(response.data.message) 
        }
    }

    const handleOk = async ()  => {
        try {
            dispactch(loadingAction.ShowLoading())
            const response = await updateExam(id ,{
                date : date,
                time : time,
                onfinish : false,
                description : 'recover',
            })
            dispactch(loadingAction.HideLoading())
            if(response.success){
            messageApi.success(response.message) 
            }else{
                messageApi.error(response.data.message)
            }
        } catch (error) {
            messageApi.error(error) 
        }
      }

    
      const showModal = (name) => {
        setIsModalOpen(true);
      }
      const handleCancel = () => {
        setIsModalOpen(false);
      }
    
    const updateDateAndTime = () => {
        return <Modal onOk={handleOk} okType="default"
         open={isModalOpen} onCancel={handleCancel} title="update Date & Time">
                <ConfigProvider locale={locale}>
                    <Form>
            <Form.Item name="date">
          <DatePicker format={`${dateFormat}`} onChange={(date)=> setDate(date)} showTime />
                </Form.Item>
                <Form.Item name="time">
            <TimePicker onChange={(time) => setTime(time)} format={`${timeFormat}`}/>
            </Form.Item>
                    </Form>
                 </ConfigProvider>
        </Modal> 
    }

    const assignExamToGroup = () =>{
        return <Modal >
            <Form>
            <Form.Item>
                <Select>

                </Select>
            </Form.Item>
            </Form>
        </Modal>
    }

    useEffect(()=>{
        if(id){
            onGetExam()
        }
    
    },[])
   

    return <div> 
        {contextHolder}
   <NavigatorButton/>
    <div className="bg-neutral-50 rounded-lg
      p-4">
        <Header text={ id ? `update exam ${id}`
         : `Create Exam`}/>

        
        {
            id && <div className="my-3 flex gap-3">
                <button className="bg-variation-500 text-[12px] 
            py-[1.5px] px-2 active:bg-variation-400
            rounded-md text-white" 
            onClick={showModal}>Update date & time</button>
                    {updateDateAndTime()}
            </div>
        }
    <Form
    onFinish={onCreate}
    layout="vertical"
    form={form}
    className="mt-4 "
    >
        <div className="grid gap-2 grid-cols-2 2xl:grid-cols-1">
            <Form.Item
            rules={[
                {
                    message :"please provide title",
                    required : true
                }
            ]}
            label="title" name="name">
                <Input></Input>
            </Form.Item>
            {
                id ? <></>:
            
            <div className="flex gap-3">
            <Form.Item required label="select date" name="date">
                
                <DatePicker 
            format={`${dateFormat}`}
            />
               
            </Form.Item>
            <Form.Item required label="pick time" name="time">
              <TimePicker  format={`${timeFormat}`}/> 
            </Form.Item>
            </div>
}
            <Form.Item required label="duration" name="duration">
                <InputNumber className="w-full"/>
            </Form.Item>
            <Form.Item required label="pass percentage(%)" name="pass_score">
                <InputNumber className="w-full"/>
            </Form.Item>
            <Form.Item 
            rules={[
                {
                    required :true,
                    message : 'please provide course name',
                    whitespace: true,
                }
            ]}
            label="assign to course" name="course">
                <Select disabled={id ? true : false}>
                    {
                        courseName.map((i, k) => 
                        <Option key={k} value={i}>{i}</Option>
                            )
                    }
                   
                </Select>
            </Form.Item>
            </div>
            <div>
            <Form.Item label="description" name="description">
               <TextArea rows={6}></TextArea>
            </Form.Item>
                        </div>
            <Form.Item className="flex justify-end">
                <Button
                className="rounded-lg bg-gray-900 text-gray-50"
                htmlType="submit">
                    submit
                </Button>
            </Form.Item>
         </Form>
    </div>
  
     
    
    </div>
}