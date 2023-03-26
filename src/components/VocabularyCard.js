import React, { useState } from "react";



export function VocabularyCard ({clude}){

const [renderClude ,setRenderClude] = useState([...clude])
    return  <>

    
     {
        renderClude.length !== 0 ? (
            <div className="grid grid-cols-3 font-roboto md:grid-cols-5 gap-1 
            px-2 py-2 text-center md:text-base
             text-[12px]  bg-white rounded">{
                renderClude.map((i,key)=><ul className="flex justify-center  items-center 
                md:bg-purple-50 text-purple-900 rounded-lg" key={key-1}>
                <div className="flex md:px-2   rounded-sm  ">
                <li className="border-1 px-2 py-3  divide-x-2 ">{key+1}. {i}</li>
                </div>
               
               </ul>
               
               )
            }</div>
        ):(<></>)
          
        }
    </>
       
    
   
}