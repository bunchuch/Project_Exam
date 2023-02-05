import { Button, Card,Col,Row, message } from "antd";
import { formatTimeStr } from "antd/es/statistic/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiUndo } from "react-icons/ci";
import { Link } from "react-router-dom";




export default function Main () {
const [data ,setData] = useState([])
const [messageApi, contextHolder] = message.useMessage()
const [loadding , setLoading] = useState(false)

const getApi = async () => {
  axios.get("http://localhost:4000/group")
    .then(res => {
      setData([...res.data.groups])
    }).catch(err => {
      messageApi.open({
        key : 'updatable',
        type: 'error',
        content : `${err}`
      })
    })
}

   useEffect(()=> {
     getApi()
   }, [])

 const onReload = () =>{
  getApi()
 }


    return <>

    <h1 className="text-[16px] text-variation-500 pb-2">
      Select Group : <Button onClick={onReload} type="default"
       icon={<CiUndo/>} loading={loadding} >Reload</Button> </h1>
     <Row gutter={[16,16]}>
      {contextHolder}

      {data.map((value)=> <>
      <Col key={value._id} span={6}>
        <Link to= {`/dashboard/Exam/${value._id}`}>
      <Card className="active:bg-neutral-50"  bordered={false}>
        <p className="text-lg font-semibold">Group : {value.group}</p>
        <p className="text-md font-semibold">Teacher : {value.teacher}</p>
        <p className="text-md ">Class : {value.class}</p>
        <p className="text-md">Level : {value.level}</p>
      </Card>
</Link>
     
    </Col> 
      </>)}
    
    
    
  </Row>
    </>
    
   
}