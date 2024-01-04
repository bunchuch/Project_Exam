import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import moment from "moment";
import { Empty, Button, Popconfirm, message, Tooltip, Descriptions,
    Card, Tag,Image  } from "antd";
import { CiEdit, CiTrash } from "react-icons/ci";
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
    const { Meta } = Card;
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

    const handDeleteQuestion = (id , subId) => {
        dispactch(loadingAction.ShowLoading())
        axiosInstance
        .delete(`${process.env.REACT_APP_API_KEY}question/delete/${id}/${subId}`)
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
    className="bg-white p-4 rounded-md border border-neutral-200" 
    title="question Info">
  <Descriptions.Item label="question name">{name.state}</Descriptions.Item>
  <Descriptions.Item label="question amuont">{data?.length}</Descriptions.Item>
  <Descriptions.Item label="actions">
  <Link to={`/dashboard/Quiz/${id}/${name.state}`}>
   <button 
    className="bg-variation-500 px-2 rounded-md text-white mx-3">
        Create New Question</button>
   </Link>
  </Descriptions.Item>
</Descriptions>


<div className="mt-5 grid grid-cols-2 gap-4" accordion>
        {data.map((items, key) => (
          <Card header={items.question} key={key}>
           <Meta
            description={<div>
             <div className="flex justify-between">
                <p className="text-[16px] font-semibold text-gray-600">{key+1} 
                . {items.question}</p>
                <div className="flex float-right ">
                <Tooltip placement="bottom" title="Update Question">
                 <Link to={`/dashboard/Question/${items._id}/${name.state}/update`}>
                <Button
                className="border-none shadow-none"
                icon={<Icon color={"blue"} Size={"1.2rem"}
                name={<CiEdit/>}></Icon>}
                />
             </Link>
             </Tooltip>
            <Popconfirm 
            onConfirm={async ()=> await 
                handDeleteQuestion(items._id ,items.subId)}
            okType="default"
            title="Are you sure to this question ?">
            <Button
        className="border-none shadow-none"
        icon={<Icon color="red" Size={"1.2rem"}
        name={<CiTrash/>}></Icon>}
            />
        </Popconfirm>
        </div>
        </div>
        
        <div className="bg-white">
                     <div className="space-y-4">
                        <span className="flex my-2">
                        <Tag>{items.name}</Tag>
                       <Tag><p  className="font-normal mx-2 break-words">{items.description ? 
                       items.description : "None"}</p></Tag>
                       <Tag> <p  className="font-normal break-words flex flex-wrap">
                        {items.upload?.path 
                            ? "File" : "No File"}</p> </Tag>
                            <Tag><p className="font-normal mx-2">
                             { moment(items.createdAt).format("DD-MM-YYYY")}</p></Tag>  
                        </span>                     
                        <span className="my-6">                
                            {
                               items.upload?.type ? items.upload?.type == "audio/mpeg" ? 
                               <div>
                               <audio
                               className="h-5"
                                controls
                                src={`${process.env.REACT_APP_API_KEY + items.upload?.path}`}>

                                </audio>
                               </div>
                               
                                : <Image className="object-cover rounded-md my-2 border
                                 border-neutral-200" height={100}  
                                width={250} src={items.upload?.path}/> : <></>
                            }
                        </span>
                   <span className="mt-5">{items.name === 'Blank' ?
                    <>{items.options ? items.options.map(i => <Tag>
                    {i}
                   </Tag>) : [0]}</> 
                    : items.options ? items.options.map((i,k) => <>
                      <label  className="flex font-medium text-gray-600 break-words"> 
                      <input type="checkbox"  className="font-normal mx-2 break-words"/>
                      {i.value}
                       </label>
                </>) :null}</span>
                    </div>
                    <div className="flex justify-end gap-2">
                    correctAnswer   
                        {
                            items.name === "Blank" ?
                             items?.correctAnswer?.map((value ,key)=>
                             <Tag>{JSON.stringify(value)}</Tag>) : <>
                            {
                        items?.correctAnswer?.map((value)=>
                         <Tag color="green">{value}</Tag>)
                    }
                            </>
                        }                  
                    </div>
                    </div>
        </div>
           }
        />
          </Card>
        ))}
      </div>
    </div>
</>

}
