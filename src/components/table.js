import React, { Children, useState } from "react";
import { Link } from "react-router-dom";



export default function Table ({tableTh, data ,type}) {

   const [find ,setFind] = useState([...data])

    const handleChange = (e) => {
            const value = e.target.value
             const getData = find.filter((i) => i.username === value)
          
            
    }


    return <>
    
<div className="relative overflow-x-auto ">
    <div class="pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor"
                     stroke-linecap="round" 
                     stroke-linejoin="round" stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input onChange={handleChange} type="text" id="table-search" className="block p-2 pl-10 text-sm
             text-gray-900 border border-gray-300 rounded-md 
             w-80 bg-gray-50 focus:ring-blue-500
              focus:border-blue-500 " placeholder="Search for items"/>
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-
                         text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500
                          dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 
                          focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>

                {
                   tableTh.map((item, index)=><th key={index} scope="col" class="px-6 py-3">
                    {item.name}
                 </th> )
                }
            </tr>
        </thead>
        <tbody>
            
            {
              find ? find.map((value)=> <> 
                
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100
                         border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
                          dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 
                          focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" 
                class="px-6 py-4 font-medium text-purple-900 hover:underline whitespace-nowrap">
                    <Link>
                    {value.username}
                    </Link>
                </th>
                {type  === "student" ? <>
                <td class="px-6 py-4">
                    {value.birthofdate}
                </td>
                <td class="px-6 py-4">
                   {value.classe}
                </td>
                <td class="px-6 py-4">
                 {value.group}
                </td>
                <td class="px-6 py-4">
                 {value.enroll}
                </td>
                <td class="px-6 py-4">
                    {value.contact}
                </td>
                <td class="px-6 py-4">
                    {value.role}
                </td>
                </> : <>
                <td class="px-6 py-4">
                    {value.birthofdate}
                </td>
                <td class="px-6 py-4">
                    {value.email}
                </td>
              
                <td class="px-6 py-4">
                    {value.contact}
                </td>
                <td class="px-6 py-4">
                    {value.role}
                </td>
                
                </>}
             
                <td class="px-6 py-4">
                    <a href="#" className="font-medium text-purple-900 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
                
                
                </>) : <>No data aviable</>
            }
           
        
          
      
          
        </tbody>
    </table>
</div>

    </>  
    
}