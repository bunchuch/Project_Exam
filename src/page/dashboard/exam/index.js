import { Link, Outlet } from "react-router-dom"
import { Button, Card, Tabs } from "antd"
import { TabExamItem } from "../componet/TabItems"
import Header from "../../../components/Header"
import { CiRuler } from "react-icons/ci"




export default function DashboardExam () {
   

    return<div className="">
      <Header text="Exam" icons={<CiRuler/>}/>
    <div className=" ">
 <Tabs
    defaultActiveKey="1"
    items={TabExamItem}
    indicatorSize={(origin) => origin - 16}
  />

 <Outlet/>
 
    </div>

</div>
}