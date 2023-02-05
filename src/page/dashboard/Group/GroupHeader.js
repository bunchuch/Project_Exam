import { Outlet } from "react-router-dom"
import { Tabs } from "antd"
import { TabExamItem } from "../componet/TabItems"
import Header from "../../../components/Header"
import { CiStar } from "react-icons/ci"




export default function GroupHeader () {
   

    return<div className="">
      <Header text="Group & Course" icons={<CiStar/>}/>
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