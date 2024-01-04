import { Form, Input, Select, message, Tag, Button, InputNumber,
     TimePicker, DatePicker, ConfigProvider, Modal } from "antd";
import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import Header from "../../../components/Header";
import { CiCircleChevLeft, CiRuler, CiUser } from "react-icons/ci";
import Icon from "../../../components/Icon";
import { useSelector, useDispatch } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import NavigatorButton from "../../../components/navigatorButton";
import { createExam,examGetById, updateExam } from "../../../api/exam";
import { useEffect } from "react";
import { loadingAction } from "../../../redux/loaderSlice";
import locale from 'antd/es/locale/en_US';





export default function CreateExam(){
    const navigate = useNavigate()
    const courseName = useSelector(state => state.course.courseName)
    const {id} = useParams()
    const [selectedDate, setSelectedDate] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [time ,setTime] = useState()
    const [date , setDate] = useState()
    const [form] = Form.useForm()
    const dispactch = useDispatch()
    const dateFormat = "YYYY-MM-DD"
    const timeFormat = "HH:mm"
    const {Option} = Select


    const onCreate = async (value)=>{
        try {
            dispactch(loadingAction.ShowLoading())
            const request = id ? await updateExam(id , value) 
            : await createExam(value)
            dispactch(loadingAction.HideLoading())
            if(request.success){
                message.success(request.message)
            }else{
                   
                    message.error(request.data.message)
            }
        } catch (error) {
            alert(error)
        }
       
    }
   
    const onGetExam = async ()=>{
        dispactch(loadingAction.ShowLoading())
        const response = await examGetById(id)
        dispactch(loadingAction.HideLoading())
        if(response){
            message.success('fetch data..')
            if(id){
                form.setFieldsValue(response.exams)
            }
        }else{
            message.error(response.data.message)
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
                message.loading('loading...')
                setTimeout(()=>{
                    message.success(response.message)
                },2000)
            }else{
                message.error(response.data.message)
            }
        } catch (error) {
            message.error(error)
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
   <NavigatorButton/>
    <div className="bg-white rounded-lg
     border-[1px] border-neutral-200 p-4">
        <Header text={ id ? `update exam ${id}`
         : `Create Exam`} icons={<CiRuler/>}/>

        
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
                    message :"please assign group",
                    required : true
                }
            ]}
            label="Title" name="name">
                <Input></Input>
            </Form.Item>
            {
                id ? <></>:
            
            <div className="flex gap-3">
            <Form.Item label="Select Date" name="date">
                
                <DatePicker 
            format={`${dateFormat}`}
            />
               
            </Form.Item>
            <Form.Item label="Pick Time" name="time">
              <TimePicker  format={`${timeFormat}`}/> 
            </Form.Item>
            </div>
}
            <Form.Item label="Duration" name="duration">
                <InputNumber className="w-full"/>
            </Form.Item>
            <Form.Item label="Pass Percentage(%)" name="pass_score">
                <InputNumber className="w-full"/>
            </Form.Item>
            <Form.Item label="Assign to Groups" name="course">
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
            <Form.Item label="Description" name="description">
               <TextArea></TextArea>
            </Form.Item>
                        </div>
            <Form.Item className="flex justify-end">
                <Button style={{
                    color : "#ffff"
                }} className="bg-variation-500 " htmlType="submit">
                    submit
                </Button>
            </Form.Item>
         </Form>
    </div>
  
     
    
    </div>
}