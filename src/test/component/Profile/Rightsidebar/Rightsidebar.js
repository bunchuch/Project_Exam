import React from "react";
import Archivement from "./RightbarComponet/archivement";
import Headertag from "./rbnavbar";
import Description from "./RightbarComponet/description";
import PersonalInfo from "./RightbarComponet/info";
import Title from "./RightbarComponet/Title";
import Button from "../../Button";

function Rightsidebar({info,desc,arch}) {

    return (<div className="flex-initail w-[70%] mx-4 ">
                      <Headertag />
                      <Title text="Personal Information" />
                      <div className="grid grid-cols-4 gap-4 ">
                      {info.map((value)=><PersonalInfo title={value.title} icon={value.icon} desc={value.desc}/>)}
                      </div>
                      <Title text="Personal Description" />
                      {desc.map((items)=><Description header={items.header} desc={items.desc}/>)}
                      <Title text="Personal Archivement" />
                      <div className="grid grid-cols-2 gap-4">
                         {arch.map((items)=><Archivement title={items.title} summary={items.summary} />)}
                      </div>
                      <div className="flex justify-center items-center mt-[20px]  py-2">
                          <Button style={"bg-blue-200 px-3 py-2 rounded-[5px] font-semibold w-52 text-blue-700 hover:bg-blue-900 hover:text-white"} text="see more"></Button>
                      </div>
                  </div>);
  }


  export default Rightsidebar