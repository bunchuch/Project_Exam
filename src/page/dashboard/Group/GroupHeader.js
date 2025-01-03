import { Outlet } from "react-router-dom"
import { Tabs } from "antd"
import { CourseTabItem} from "../componet/TabItems"
import Header from "../../../components/Header"
import { FiLayers } from "react-icons/fi"




export default function GroupHeader () {
   

    return<div className="mt-4">
      <Header text="Group and Course" icons={<FiLayers/>}/>
    <div className=" mt-5">
 <Tabs
    defaultActiveKey="1"
    items={CourseTabItem}
    indicatorSize={(origin) => origin - 16}
  />

 <Outlet/>
 
    </div>

</div>
}