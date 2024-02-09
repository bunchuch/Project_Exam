import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import moment from "moment";
import {  Button, Popconfirm, message, Tooltip, Descriptions,
    Card, Tag,Image, Input  } from "antd";
import { CiEdit, CiTrash, CiCirclePlus } from "react-icons/ci";
import Icon from "../../../components/Icon";
import { TitleRender } from "../../../components/Title";
import NavigatorButton from "../../../components/navigatorButton";
import axiosInstance from "../../../api";
import {useDispatch} from "react-redux"
import { loadingAction } from "../../../redux/loaderSlice";

export default function ViewQuestion (){
    const {id} = useParams()
    const [data ,setData] = useState([])
    const name = useLocation()
    const { TextArea } = Input;
    const dispactch = useDispatch()


    const getQuestion = async ()=>{
        dispactch(loadingAction.ShowLoading())
        await axiosInstance
        .get(`${process.env.REACT_APP_API_KEY}quiz/${id}`)
        .then(response =>{
            setData(response.data.quizs.question)
            dispactch(loadingAction.HideLoading())
        }).catch((error)=>
            message.error(error.response.data.message)
        )
    }

    const handDeleteQuestion = (q_id) => {
        dispactch(loadingAction.ShowLoading())
        axiosInstance
        .delete(`${process.env.REACT_APP_API_KEY}question/delete/${q_id}/${id}`)
        .then(res => {
            message.success(res.data.message)
            // getQuestion()
            dispactch(loadingAction.HideLoading())
        }).catch(error => {
            message.error(error.response.data.message)
            getQuestion()
            dispactch(loadingAction.HideLoading())
        })
    }

    useEffect(()=>{
        TitleRender("QuestionView")
        getQuestion()
    }, [])

    
    return <> 
    <NavigatorButton/>
    <div className="mt-2">
    <Descriptions 
    className="bg-neutral-50 shadow-sm p-4 rounded-xl" 
    title="question Info">
  <Descriptions.Item label="section">{name.state}</Descriptions.Item>
  <Descriptions.Item label="question length">{data?.length}</Descriptions.Item>
  <Descriptions.Item label="create">{moment(data?.createdAt).format('LL')}</Descriptions.Item>
  <Descriptions.Item label="last update">{moment(data?.updatedAt).format('LL')}</Descriptions.Item>
  <Descriptions.Item label="actions">
  <Link to={`/dashboard/Quiz/${id}/${name.state}`}>
   <a
    className="text-variation-500 
    cursor-pointer
    flex gap-2 items-center px-2 ">
      <Icon Size={"1rem"} name={<CiCirclePlus/>}/>  
      <p className="font-semibold hover:underline">add question</p></a>
   </Link>
  </Descriptions.Item>
</Descriptions>


<div className="mt-5 grid grid-cols-3 gap-4" accordion>
        {data.map((items, key) => (
          <div className="bg-neutral-50
          p-4 rounded-xl
          shadow-sm
           border-none"
           key={key}>
           <div>
             <div className="flex justify-between">
                {
                items.name == 'writing' ? <div></div>
               : <TextArea 
                readOnly
                value={items?.question}
                className="text-[12px] bg-white rounded-xl
                 h-10 
                 p-2 text-gray-600">{key+1} 
                . {items.question}</TextArea>
                }
                <div className="flex float-right ">
                <Tooltip placement="bottom" title="Update Question">
                 <Link to={`/dashboard/Question/${items._id}/${name.state}/update`}>
                <Button
                className="border-none shadow-none"
                icon={<Icon color={"blue"} Size={"1rem"}
                name={<CiEdit/>}></Icon>}
                />
             </Link>
             </Tooltip>
            <Popconfirm 
            onConfirm={()=> 
                handDeleteQuestion(items?._id)}
            okType="default"
            title="Are you sure to this question ?">
            <Button
        className="border-none shadow-none"
        icon={<Icon color="red" Size={"1rem"}
        name={<CiTrash/>}></Icon>}
            />
        </Popconfirm>
        </div>
        </div>
        <>
                     <div className="space-y-4">
                        <span className="flex flex-wrap gap-2 my-2">
                        <Tag color=
                            {items?.name == 'Mqc' ? 'yellow' : 'purple'}>
                                type : 
                            {items.name === 'Blank' && 'fill in blank' }
                            {items.name === 'writing' && 'writing' }
                            {items.name === 'Mqc' && 'multiple-choice question'}
                            </Tag>
                       <Tag color={items?.upload?.path ? 'gold' : "red"}> 
                       <p  className=
                       "font-normal break-words flex flex-wrap">
                      file : {items.upload?.path 
                            ? "file" : "none"}</p> </Tag> 
                            <Tag color="blue">{items.point}pt</Tag>
                        </span>                     
                        <span>                
                            {
                               items.upload?.type ? 
                               items.upload?.type == "audio/mpeg" ? 
                               <div>
                               <audio
                               className="h-5"
                                controls
                                src={`${process.env.REACT_APP_API_KEY 
                                + items?.upload?.path}`}>

                                </audio>
                               </div>
                               
                                : <Image className="object-cover
                                 rounded-md my-2 border
                                 border-neutral-200" height={100}  
                                width={250} 
                                src={process.env.REACT_APP_API_KEY
                                     + items?.upload?.path}/> : null
                            }
                        </span>
                        <p  className=
                        "font-normal text-[14px] break-words">
                            {items.description ? 
                       items.description : "None"}</p>
                   <span className="mt-5">{items.name === 'Blank' ?
                    <>{items.options ? items.options.map(i => <Tag>
                    {i}
                   </Tag>) : [0]}</> 
                    : items.options ? items.options.map((i,k) => <>
                      <label 
                       className="flex text-[14px]
                        text-gray-600 break-words"> 
                      <input type="checkbox" 
                       className="font-normal mx-2 break-words"/>
                      {i.value}
                       </label>
                </>) :null}</span>
                    </div>
                    <div className="flex justify-between
                     flex-wrap gap-2">  
                        <p className="text-[14px] ml-2">
                    correctAnswer     
                        {
                            items.name === "Blank" ?
                             null : <>
                            {
                        items?.correctAnswer?.map((value)=>
                         <p className="
                         border px-1 text-green-600
                         text-[12px]
                         bg-green-50 m-1 
                         rounded-md border-green-600
                          truncate w-auto">{value}</p>)
                    }
                            </>
                        }   
                                </p>         
                    </div>
                    </>
        </div>
          </div>
        ))}
      </div>
    </div>
</>

}
