import React from "react";
import Table from "../../../components/table";
import { Link, Outlet } from "react-router-dom";


export default function User () {
    return <div className="">
    <h1 className="text-2xl font-semibold pb-3 text-purple-900">User Dashboard</h1>
        <div className="bg-white rounded-md border-[1px] py-5 px-6">
        <button className="bg-purple-900 px-2 py-1.5 
        rounded text-center float-right after:bg-purple-700 text-[14px] active:bg-purple-700 text-white">
            <Link >
                Add user
            </Link>
            </button>
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500
          border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="mr-2">
        <Link to={"/dashboard/User"}>
        <a href="#" aria-current="page" class="inline-block 
        py-2
           active:bg-gray-50 hover:bg-gray-50">User</a>
        </Link>
       
    </li>
    <li class="mr-2">
        <Link to={"/dashboard/User/Student"}>
        <a href="#" class="inline-block p-2
         hover:text-gray-600 hover:bg-gray-50
          dark:hover:bg-gray-800 dark:hover:text-gray-300">Student</a>
        </Link>

    </li>
   
</ul>
<hr></hr>

       
       <Outlet/>
        </div>
     
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