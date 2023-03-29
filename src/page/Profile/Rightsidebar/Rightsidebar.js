import React from "react";
import Archivement from "./RightbarComponet/archivement";
import Description from "./RightbarComponet/description";
import PersonalInfo from "./RightbarComponet/info";
import Title from "./RightbarComponet/Title";
import Button from "../../../components/Button/Button";
import { BiBookReader, BiCool,BiHealth,BiHive } from "react-icons/bi";

function Rightsidebar({info,desc,arch}) {

    

    return (<div className="flex flex-col md:flex-initail md:w-[70%] mx-4 ">
                      <Title text="Personal Information" />
                      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 border-[1px] rounded-md md:rounded-none md:border-0  ">
                      {info.map((value)=>
                      
                      <PersonalInfo title={value.title} 
                      icon={<BiHive/>} desc={value.desc}/>
                      
                      )}
                      </div>
                      <Title text="Personal Description" />
                      {desc.map((items)=><Description header={items.header} desc={items.desc}/>)}
                      <Title text="Personal Archivement" />
                      <div className="md:grid md:grid-cols-2 md:gap-4">
                         {arch.map((items)=><Archivement title={items.title} summary={items.summary} />)}
                      </div>
                      <div className="flex justify-center items-center mt-[20px]  py-2">
                          <Button style={"px-3 py-2 bg-blue-900 md:bg-blue-200 text-white rounded-[4px] w-52 md:text-blue-700 hover:bg-blue-200 hover:text-white"} text="see more"></Button>
                      </div>
                  </div>);
  }


  export default Rightsidebar