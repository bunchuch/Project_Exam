import React from "react";
import { getGroupReport } from "../../../api/report";
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { loadingAction } from "../../../redux/loaderSlice";
import {message,Card} from 'antd'
import { useState } from "react";
import { useEffect } from "react";
import moment from 'moment'


export default function GroupExamReport(){
    const dispatch = useDispatch()
    const {id}  = useParams()
    const [report ,setReport] = useState([])
    const { Meta } = Card;

    const getData = async ()=> {
        try {
          dispatch(loadingAction.ShowLoading())
          const response = await getGroupReport({course : id}) 
          dispatch(loadingAction.HideLoading())
          if(response.success){
              setReport(response.result)
          }else{
            message.error(response.data.message)
          }
        } catch (error) {
         message.error(error) 
        }
     }
    

     useEffect(()=> {
        getData()
     },[])


    return <div>
        <div className="grid grid-cols-4 gap-3">
            {
                report?.map((report, key)=><>
        <Card>
        <Meta
          avatar={<></>}
          title={report?.exam_title}
          description={moment(report?.exam_date).format('LL')}
        />
      </Card>
                
                </>)
            }
        </div>
    </div>
}