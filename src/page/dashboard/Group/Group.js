import {Card,Col,Row, message} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { courseAction } from "../../../redux/courseSlice";
import { getGroup } from "../../../api/group";
import { loadingAction } from "../../../redux/loaderSlice";



export default function Group () {
const [data ,setData] = useState([])
const [messageApi, contextHolder] = message.useMessage()
const dispatch = useDispatch()



const getApi = async () => {
  try {
    dispatch(loadingAction.ShowLoading())
    const response = await getGroup()
    dispatch(loadingAction.HideLoading())
    if(response){
      console.log(response)
      setData(response.groups ? response.groups : [])
      const courseNames = response.groups.map(i => i.group )
      dispatch(courseAction.addCourseOption({course : courseNames}))  
    }else{
      messageApi.open({
        key : 'updatable',
        type: 'error',
        content : `${response.data.message}`
      })
    }
  } catch (error) {
    messageApi.open({
      key : 'updatable',
      type: 'error',
      content : `${error}`
    })
  }
}

   useEffect(()=> {
     getApi()
   }, [])



    return <>
    <h1 className="text-[16px] font-medium text-variation-500 pb-2">
      Course : </h1>
     <Row gutter={[16,16]}>
      {contextHolder}

      {data.map((value)=> <>
      <Col key={value._id} span={6}>
        <Link to= {`/dashboard/Group/${value._id}`}>
      <Card  className="active:bg-neutral-50 " >
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