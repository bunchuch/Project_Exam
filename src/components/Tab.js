import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tab ({List,text}) {
    const [list , setList] =  useState([...List])
    return <>
         <ul className="flex flex-wrap font-semibold font-sans text-sm text-center text-gray-500
          border-gray-200 dark:border-gray-700 dark:text-gray-400 tracking-wide space-x-4">
     {
        list.map((item,index)=> <>
        <Link to ={`${item.Link}`}>
        <li key={index - 1} className="mr-3">
        <a  aria-current="page" class="inline-block 
        py-2
           active:bg-gray-50  hover:text-purple-900">{item.name}</a>
    </li>
        </Link>
       
        </>
        )
    }
   
</ul>
   

    </>
}