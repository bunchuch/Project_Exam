import { Outlet } from "react-router-dom"
import { Tabs } from "antd"
import { ExamTabBoard, GroupInfoTab } from "../componet/TabItems"
import Header from "../../../components/Header"
import { CiReceipt } from "react-icons/ci"




export default function ExamHeader () {
   

    return<div className="">
     <Header text={"Exam"} icons={<CiReceipt/>}/>
    <div className=" mt-5">
 <Tabs
    defaultActiveKey="1"
    items={ExamTabBoard}
    indicatorSize={(origin) => origin - 16}
  />

 <Outlet/>
 
    </div>

</div>
}