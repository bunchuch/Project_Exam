import { Link, Outlet } from "react-router-dom"
import { Input } from "../../../components/Input"
import { useState } from "react"
import { BiPlug, BiPlus, BiX } from "react-icons/bi"
import Icon from "../../../components/Icon"
import Table from "../../../components/table"


export const CreateExam = () => {

const [check ,setCheck] = useState(false)

const handleChange = () => {
    setCheck(!check)
}


    return <div className="bg-white rounded-md border-[1px] px-6 py-5 mt-5 ">
        <div className="w-6 h-6 rounded-full  bg-gray-100  float-right">
            <Link to={"/dashboard/Exam"}>
            <Icon name={<BiX/>} ></Icon>
            </Link>
           
        </div>
        <h1 className="font-semibold pb-3">Select an Type</h1>
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500
          border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="mr-2">
        <a href="#" aria-current="page" class="inline-block 
        py-2
           active:bg-gray-50 hover:bg-gray-50">Mutilple Chioce</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-2
         hover:text-gray-600 hover:bg-gray-50
          dark:hover:bg-gray-800 dark:hover:text-gray-300">Fill in Blank</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-2
         hover:text-gray-600 hover:bg-gray-50
          dark:hover:bg-gray-800 dark:hover:text-gray-300">Writing</a>
    </li>
   
</ul>
        <hr></hr>
    <div className="mt-3">
    <Input type="input" Text="Question"></Input>
    </div>
   
    <div class="grid gap-6 mb-3 md:grid-cols-2 bg-white mt-2   py-5 ">
    
      <Input type="input" Text="clude 1"/>
      <Input type="input" Text="clude 2"/>
      <Input type="input" Text="clude 3"/>
      <Input type="input" Text="clude 4"/>
      <button className="py-1 
      items-center text-[14px] text-purple-500 active:text-purple-200  rounded flex gap-2 ">
        <div className="bg-purple-900 rounded-full">
        <Icon Size={"1.2rem"} color="white" 
        name={<BiPlus></BiPlus>}></Icon>
        </div>
        Add More Clude
      </button>
        </div>

    </div> 
}


export const ExamList = () => {

    return <div className="bg-white rounded-md border-[1px] mt-4 py-5 px-6">
        <h1 className="font-semibold pb-3 text-purple-900">List</h1>
        <Table tableTh={[{"name": "Title",},{"name" : "Categories"}]} data={[{username : "reading"},{username: "Writing"}]}/>
    </div>

}


export default function DashboardExam () {
    return<div className="">
        <h1 className="text-2xl font-semibold pb-3 text-purple-900">Exam Dashboard</h1>
    <div className="  mt-2">
 <div className="flex justify-start gap-2">
 <button className="bg-purple-900 px-2 py-1.5 
        rounded text-center after:bg-purple-700 text-[14px] active:bg-purple-700 text-white">
            <Link to = {"/dashboard/Exam/create"} >
            Create exam
            </Link>
            </button>
            <button className="bg-purple-900 px-2 py-1.5 
        rounded text-center after:bg-purple-700 text-[14px] active:bg-purple-700 text-white">
            <Link >
            Delete
            </Link>
            </button>
         
 </div>
 <Outlet/>
 <ExamList/>
    </div>

</div>
}