import { Link, Outlet } from "react-router-dom"
import { Input } from "../../../components/Input"
import { useState } from "react"
import { BiMinus, BiMinusCircle, BiPlug, BiPlus, BiPlusCircle, BiPulse, BiX } from "react-icons/bi"
import Icon from "../../../components/Icon"
import Table from "../../../components/table"
import { TextArea } from "../../../components/textArea"
import Tab from "../../../components/Tab"
import SelectOption from "../../../components/selectOption"


export const MQC = ()=>{
    const [check ,setCheck] = useState(false)
    const [inputFields , setInputFields] = useState([{clude: ""}])

const addInputFields = () =>{
   setInputFields([...inputFields,{clude: ""}])
}

const removeInputFields = (index) => {
    let data = [...inputFields]
    data.splice(index, 1)
    setInputFields(data)
}

    return <>
     <div className="mt-3">
     <label htmlFor="Username"
        className="block mb-2 text-sm font-medium text-gray-900 ">Question</label>
    <Input type="input" Text="Question"></Input>
    </div>
   
    <div className="grid gap-6 mb-3 md:grid-cols-3 bg-white mt-2  py-5">
       {
        inputFields.map((value,index)=><div>
         <label htmlFor="Username"
        className="block mb-2 text-sm font-medium text-gray-900 ">Clude { index + 1}</label>
        <Input type="input"></Input>
        <div className="flex gap-2 text-purple-900 text-sm">
            {
                inputFields.length >= 10 ? <>
                </> : <button onClick={addInputFields}>Add</button>
            }
        {
            inputFields.length < 2 ? " " 
          :   <button onClick={()=>removeInputFields(index)}>Remove</button>
        }
        </div>
        </div>)
       }
        </div>
    <label for="message" class="block mb-2 text-sm font-medium
     text-gray-900 dark:text-white">Description</label>
      <TextArea reszie={false} row={5}/>
    
    </>
}







export const CreateExam = () => {

const TabList = [
    {"name": "MQC","Link" : "/dashboard/Exam/create/MCQ"},
    {"name": "Fill in blank" , "Link" : "/dashboard/Exam/create/Blank"},
     {"name" : "Writing", "Link" : "/dashboard/Exam/create/Writing"}]


    return <div className="bg-white rounded-md border-[1px] px-6 py-5 mt-2 ">
        <div className="w-6 h-6 rounded-full  bg-gray-100  float-right">
            <Link to={"/dashboard/Exam"}>
            <Icon name={<BiX/>} ></Icon>
            </Link>
           
        </div>
        <h1 className="font-semibold pb-3">Select an Type</h1>
        <div className="mb-2 flex gap-3 items-center">
            <label>Title</label>
                <SelectOption option={["Reading","Listenning","Vocabulary","Reading","Writing"]} ></SelectOption>
                    <label>Group</label>
           <SelectOption option={["Reading","Listenning","Vocabulary","Reading","Writing"]} ></SelectOption>
         <label>Class</label>
         <SelectOption option={["Reading","Listenning","Vocabulary","Reading","Writing"]} ></SelectOption>
         <label>File</label>
            <input className="w-4 h-4" type="checkbox"/>
        </div>
   
        <Tab List={TabList}></Tab>
        <hr></hr>
        <Outlet/>
   

    </div> 
}


export const ExamList = () => {

    return <div className="bg-white rounded-md border-[1px] mt-2 py-5 px-6">
        <h1 className="font-semibold pb-3 text-purple-900">List</h1>
        <Table tableTh={[{"name": "Title",},{"name" :
         "Categories"}]} data={[{username : "reading"},{username: "Writing"}]}/>
    </div>

}


export default function DashboardExam () {
    return<div className="">
        <h1 className="text-2xl font-semibold pb-3 text-purple-900">Exam Dashboard</h1>
    <div className=" ">
 <div className="flex justify-start gap-2">
 <button className="text-purple-900 px-2 py-1.5 font-semibold
        rounded text-center after:text-purple-700 text-[14px] hover:underline active:text-purple-700">
            <Link to = {"/dashboard/Exam/create"} >
            Create exam
            </Link>
            </button>
         
 </div>
 <Outlet/>
 <ExamList/>
    </div>

</div>
}