import React ,{useEffect, useState} from "react";
import { Button  ,Empty, Form, Radio, Card, Input, Space, Typography  } from "antd";
import { CiCircleChevLeft, CiCircleInfo, CiCirclePlus, CiTrash } from "react-icons/ci";
import Header  from "../../../components/Header"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { renderType } from "../componet/TabItems";
import { CloseOutlined } from '@ant-design/icons';

const types = [{label :"Mqc" ,value : "Mqc"}, 
{label:"Blank", value: "Blank"},
 {label :"Writing", value : "Writing"}]

export default function ExamInfo (){

    const[data ,setData] = useState([])
    const {id} = useParams()
    const navigator = useNavigate()
    const [itemId ,setItemId] = useState(1)
    const [render ,setRender] = useState(false)
    const [add , setAdd] = useState([{
      id : itemId ,
      name : 1
    }])
    const [type ,setType] = useState(false)
    const [value ,setValue] = useState('')
    const [loading ,setLoading] = useState(false)
    const [form] = Form.useForm();



    const onGetExam = async ()=>{
      axios.get(`${process.env.REACT_APP_API_KEY}exam/${id}`).then(res => {
            setData(res.data.exams)
      })
    }

    useEffect(()=> {
      onGetExam()
    }, [])


    const onRender = () =>{
      setTimeout(()=> {  
            setRender(!render)
      },[1000])
      
    }

    const onChange = (e) => {
       setType(e.target.value)
    }
   
    const onAdd = ()=>{
     
      setItemId(itemId => itemId + 1)
      console.log(itemId)
      setAdd([...add , {
            id : itemId + 1 , name : add.length+1
      }])
      console.log(add)
      setType('')
    }

    const onRemove = (value_id) =>{
      setAdd(add.filter(i => i.id !== value_id))
    }
 return <>
 
 <Button type="default" onClick={()=>navigator(-1, {replace : true})}>Back</Button>
 <div className="bg-white rounded-lg border-neutral-200 border-[1px] mt-3 px-3 py-4">
      <div className="flex justify-between pb-4">
      <Header icons={<CiCircleInfo/>} text="Exam info">
            </Header>
            <div className="flex gap-2">
            <Button onClick={onRender} icon={<CiCirclePlus/>}>Create question</Button>
            <Button  icon={<CiTrash/>}></Button>
            </div>

      </div>
           

           {/* info list */}
            <div className="grid grid-cols-3 gap-3 px-2 mt-2 text-[14px]">
            <span className="flex gap-2">
            <label name="" className="font-semibold space-x-2 text-gray-600">Exam _id :</label>
            <p className="text-gray-900">{data._id}</p>
        </span>

        <span className="flex gap-2">
            <label name="" className="font-semibold space-x-2 text-gray-600">Title :</label>
            <p className="text-gray-900">{data.title}</p>
        </span>

        <span className="flex gap-2">
            <label name="" className="font-semibold space-x-2 text-gray-600">Progress :</label>
            <p className="text-gray-900">{data.progress}</p>
        </span>

        <span className="flex gap-2">
            <label name="" className="font-semibold space-x-2 text-gray-600">question amount :</label>
            <p className="text-gray-900">{data.question ? data.question.length : null}</p>
        </span>
        <span className="flex gap-2">
            <label name="" className="font-semibold space-x-2 text-gray-600">create date :</label>
            <p className="text-gray-900">{data.updatedAt}</p>
        </span>
        </div>
      </div>


 
        {
    render ? <>        
          {
            add.map((value)=><div className="mt-3 px-4 border-[1px]
            border-neutral-200 py-3 bg-white rounded-lg">
                  <label className="py-2 border-b-[1px] w-full
                   border-neutral-200">question : {value.id}</label>
                  
             <div className="flex justify-between ">
             <Radio.Group className="py-5" onChange={onChange} value={type}  >
             <Radio value={"Mqc"}>Mulitple Choice</Radio>
             <Radio value={"Blank"}>Fill in Blank</Radio>
             <Radio value={"Writing"}>Writing</Radio>
           </Radio.Group>
           <div className="flex gap-3">
           <Button onClick={onAdd}>Add question</Button>
           <Button onClick={()=> setAdd(add.filter((i)=> i.id !== value.id))}>Remove</Button>
           </div>

             </div>
           
          {
           renderType(type)  
          }
       </div> )
          }
     </>: <div className="pb-5 mt-3">
<Empty description="Select type"/>
</div> 
  }
  
     
</>  
   
}