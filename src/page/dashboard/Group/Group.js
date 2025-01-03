import {Card,Col,Row, message, Tag ,Empty, Form, Input} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { courseAction } from "../../../redux/courseSlice";
import { getGroup } from "../../../api/group";
import { loadingAction } from "../../../redux/loaderSlice";
import Icon from "../../../components/Icon";
import { CiMemoPad } from "react-icons/ci";
import moment from "moment";


export default function Group () {
const [data ,setData] = useState([])
const dispatch = useDispatch()



const getApi = async () => {
  try {
    dispatch(loadingAction.ShowLoading())
    const response = await getGroup()
    dispatch(loadingAction.HideLoading())
    if(response.success){
      setData(response.groups ? response.groups : [])
      const courseNames = response.groups.map(i => i.group )
      dispatch(courseAction.addCourseOption({course : courseNames}))  
    }else{
     message.error(response.data.error)
    }
  } catch (error) {
    message.error(error)
  }
}

   useEffect(()=> {
     getApi()
   }, [])



    return <div className="font-ubuntu text-slate-600 text-[14px]">
      {/* <Form>
        <Form.Item>
          <Input placeholder="filter"/>
        </Form.Item>
      </Form> */}
     <Row gutter={[16,16]}>
      { data.length !== 0 ? data.map((course,key)=> <>
      <Col span={6}>
        <Link key={key} to= {`/dashboard/Group/${course._id}`}>
      <div className="bg-neutral-50 font-ubuntu border border-neutral-50 rounded-lg px-4 py-3">
        <div className="flex items-center gap-3 justify-between">
        <p className="font-medium text-[14px]">{course?.group}</p>
        <div>
        <p>{course?.teacher}</p>
        <p className="text-[12px]">{moment(course?.time[0]).format("LT")} 
        - {moment(course?.time[1]).format("LT")}</p>
          </div>
      
        </div>
       
        <p className="text-variation-400">{course?.level}</p>

        
      </div>
</Link>
     
    </Col> 
      </>) : <div className="flex-1 flex-col justify-center" >
      <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
  />
      </div> }
  </Row>
    </div>
    
   
}