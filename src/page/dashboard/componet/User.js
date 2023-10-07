import React from "react";
import Table from "../../../components/table";
import { Link, Outlet } from "react-router-dom";
import Tab from "../../../components/Tab";


const TabList = [
    {"name": "user","Link" : "/dashboard/User/"},
    {"name": "student" , "Link" : "/dashboard/User/Student"},
     ]

export default function User () {

    return <div className="">
    <h1 className="text-2xl font-semibold pb-3 text-purple-900">User Dashboard</h1>
        <div className="bg-white rounded-md border-[1px] py-5 px-6">
        <button className="bg-purple-900 px-2 py-1.5 
        rounded text-center float-right after:bg-purple-700 text-[14px] active:bg-purple-700 text-white">
            <Link to={`/dashboard/User/Add`} >
                Add user
            </Link>
            </button>
            <Tab List={TabList} ></Tab>
<hr></hr>
       <Outlet/>
        </div>
     
    </div>
}


export const AddUser = () => {
    return <div className="bg-white rounded-md border-[1px]">
        <h1>Add user</h1>
    </div>
}


export const UserTable = ()=>{

    const headerTable =
     [{id: "01",name:"Username"}, 
     {name:"Date"},{name:"Email"},
      {name:"Contact"},
       {name:"Role"},{
        name: "Active"
       }]
const table = [{
    "username" : "Jonhy",
    "birthofdate" : "20-05-2000",
    "email" : "emial@gameil.com",
    "contact" : "02222-9990",
    "role"   : "Teacher"
 },
 {
    "username" : "Line",
    "birthofdate" : "20-05-2000",
    "email" : "emial@gameil.com",
    "contact" : "02222-9990",
    "role"   : "Sale"
 },
 {
    "username" : "thida",
    "birthofdate" : "20-05-2000",
    "email" : "emial@gameil.com",
    "contact" : "02222-9990",
    "role"   : "Admin"
 },
 {
    "username" : "songha",
    "birthofdate" : "20-05-2000",
    "email" : "emial@gameil.com",
    "contact" : "02222-9990",
    "role"   : "Owner"
 }

]

    return <>
    <div className="mt-4"></div>
        <Table type="user" data={table} tableTh={headerTable}></Table>
    </>
}


export const StudentTable = () => {

    const table = [{
        "username" : "dara",
        "birthofdate" : "20-05-2000",
        "classe" : "M14",
        "group"  : "D",
        "enroll" : "02-03-2020",
        "contact" : "0122302",
        "role"   : "student"
     },
     {
        "username" : "voch",
        "birthofdate" : "20-05-2000",
        "classe" : "M14",
        "group"  : "D",
        "enroll" : "02-03-2020",
        "contact" : "0122302",
        "role"   : "student"
     },
     {
        "username" : "thida",
        "birthofdate" : "20-05-2000",
        "classe" : "M14",
        "enroll" : "02-03-2020",
        "contact" : "0122302",
        "group"  : "D",
        "role"   : "student"
     },
     {
        "username" : "seryoun",
        "birthofdate" : "20-05-2000",
        "classe" : "M14",
        "group"  : "D",
        "enroll" : "02-03-2020",
        "contact" : "0122302",
        "role"   : "student"
     }
    
    ]


    const headerTable = 
    [{id: "01",name:"Username"},
     {name:"Date"},{name:"class"}, 
     {name:"group"},{name:"enroll"},{name: "contact"},{name:"status"},
     {name:"active"},]
    return  <>
    <div className="mt-4"></div>
        <Table type="student" data={table} tableTh={headerTable}></Table>
      
    </>
}