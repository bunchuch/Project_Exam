import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, json, useLocation, useParams } from "react-router-dom";
import moment from "moment";
import { Empty, Button, Popconfirm, message, Tooltip } from "antd";
import { CiEdit, CiTrash } from "react-icons/ci";
import Icon from "../../../components/Icon";
import { TitleRender } from "../../../components/Title";
import NavigatorButton from "../../../components/navigatorButton";

export default function ViewQuestion (){
    const {id} = useParams()
    const [data ,setData] = useState([])
    const name = useLocation()

    const getQuestion = async ()=>{
        await axios.get(`${process.env.REACT_APP_API_KEY}quiz/${id}`)
        .then(response =>{
            setData(response.data.quizs.question)
            console.log(response.data.quizs.question)
        })
    }

    const handDeleteQuestion = (id , subId) => {
        axios.post(`${process.env.REACT_APP_API_KEY}question/delete/${id}/${subId}`).then(res => {
            setData(res.data.result)
            message.success(res.data.message)
            console.log(data)
        }).catch(error => {
            message.error(error.message)
        })
    }

    useEffect(()=>{
        TitleRender("QuestionView")
        getQuestion()
    }, [])



    return <> 
    <NavigatorButton/>
    <div className="mt-2">
   <h1 className="font-semibold text-lg">currect Quiz Id {id} and {name.state}
   <Link to={`/dashboard/Quiz/${id}/${name.state}`}>
   <Button  className="bg-variation-500 text-white mx-3">Create New Question</Button>
   </Link>
   </h1> 
<div className="grid grid-cols-2 gap-2">
{
             data.length > 0 ?  data.map((v, k)=> <div 
                 className="border border-neutral-50 mt-2
                 rounded-lg p-4 bg-white text-[14px]" 
                key={k}>
                    <div className="flex float-right ">
                        <Tooltip placement="bottom" title="Update Question">
                        <Link to={`/dashboard/Question/${v._id}/${name.state}/update`}>
                        <Button
                            className="border-none shadow-none"
                            icon={<Icon color={"blue"} Size={"1.2rem"}
                            name={<CiEdit/>}></Icon>}
                                />
                        </Link>
                        </Tooltip>
                      
                    <Popconfirm 
                    onConfirm={async ()=> await handDeleteQuestion(v._id ,v.subId)}
                    okType="default"
                    title="Are you sure to this question ?">
                    <Button
                    className="border-none shadow-none"
                    icon={<Icon color="red" Size={"1.2rem"}
                    name={<CiTrash/>}></Icon>}
                    />
                    </Popconfirm>
                  
                    </div>
                    <div className="space-y-1">
                        <span className="">
                            <label className="flex font-medium text-gray-600">
                            id :
                            <p className="font-normal mx-2 break-words">{v._id}</p> 
                            </label>
                        </span>
                        <span className="">
                            <label className="flex font-medium text-gray-600">
                            type :
                            <p className="font-normal mx-2">{v.name}</p> 
                            </label>
                        </span>
                        <span className="">
                            <label className="flex font-medium text-gray-600">
                            File :
                            <p  className="font-normal mx-2 break-words flex flex-wrap">{v.upload?.path 
                            ? v.upload?.path + v.upload?.type : "None"}</p> 
                            </label>
                            {
                               v.upload?.type ? v.upload?.type == "audio/mpeg" ? 
                               <div>
                               <audio
                                controls
                                src={`${process.env.REACT_APP_API_KEY + v.upload?.path}`}></audio>
                               </div>
                               
                                : <img src={v.upload?.path}></img> : <></>
                            }
                        </span>
                        <span className="">
                            <label className="flex font-medium text-gray-600">
                            question :
                            <p className="font-normal mx-2">{v.question}</p> 
                            </label>
                        </span>
                        <span className="">
                            <label className="flex font-medium text-gray-600">
                            onAnswer :
                            <p className="font-normal mx-2">{v?.onAnswer}</p> 
                            </label>
                        </span>
                        <span className="">
                            <label className="flex font-medium text-gray-600">
                            Description :
                            <p  className="font-normal mx-2 break-words">{v.description}</p> 
                            </label>
                        </span>
                <span>{v.name === 'Blank' ? <p>{v.options ? v.options.map(i => i) : [0]}</p> 
                : v.options ? v.options.map((i,k) => <>
                    <label  className="flex font-medium text-gray-600 break-words">
                    Option{k + 1} : 
                    <p  className="font-normal mx-2 break-words">{i.value}</p>  
                    </label>
                </>) :null}</span>


                <span className="my-3">
                            <label className="flex font-medium text-gray-600">
                            Create:
                            <p className="font-normal mx-2">
                             { moment(v.createdAt).format("DD-MM-YYYY")}</p> 
                            </label>
                        </span>
                    </div>
              
                </div>) :  <div className="flex justify-center items-center">
                    <Empty/>
                </div>
            }
</div>
           
    </div>
</>

}