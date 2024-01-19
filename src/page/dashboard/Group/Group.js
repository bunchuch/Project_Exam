import {Card,Col,Row, message, Tag ,Empty} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { courseAction } from "../../../redux/courseSlice";
import { getGroup } from "../../../api/group";
import { loadingAction } from "../../../redux/loaderSlice";
import Icon from "../../../components/Icon";
import { CiMemoPad } from "react-icons/ci";


export default function Group () {
const [data ,setData] = useState([])
const dispatch = useDispatch()
const {Meta} = Card


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



    return <>
    <h1 className="text-[16px] font-medium text-variation-500 pb-2">
      Course : </h1>
     <Row gutter={[16,16]}>
      { data.length !== 0 ? data.map((course,key)=> <>
      <Col span={6}>
        <Link key={key} to= {`/dashboard/Group/${course._id}`}>
        <Card 
            >
                <Meta
          avatar={<div className="bg-neutral-50 p-2
           border-neutral-200 border-[1px]  rounded-full">
            <Icon color={"#0f3460"}
         Size="1.5rem" name={<CiMemoPad/>}></Icon>
            </div>}
          description={<>
          <h4 className="text-[16px] font-semibold text-variation-500">{course.group}</h4>
          <p className="font-semibold text-gray-600">instructor : {course.teacher}</p>
          <p className="">room : {course.class}</p>
          {
            course.level ?
          <Tag color="purple" className="mt-1">{course.level}</Tag>
           : <Tag color="yellow">none</Tag> }
          </>
          }
        />
            </Card>
</Link>
     
    </Col> 
      </>) : <div className="flex-1 flex-col justify-center" >
      <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
  />
      </div> }
  </Row>
    </>
    
   
}