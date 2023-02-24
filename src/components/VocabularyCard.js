import React, { useState } from "react";



export function VocabularyCard ({clude}){

const [renderClude ,setRenderClude] = useState([...clude])
    return  <>

    
     {
        renderClude.length !== 0 ? (
            <div className="grid grid-cols-4 md:grid-cols-5 border-dashed border-[1px] border-purple-900 gap-1 px-2 py-2 text-center md:text-base
             text-[12px]  bg-white  rounded-lg  shadow-sm shadow-cyan-500/10">{
                renderClude.map((i,key)=><ul className="flex justify-center  items-center 
                 bg-purple-50 text-purple-900 rounded-lg" key={key-1}>
                <div className="flex px-2   rounded-sm  ">
                <li className="border-1 px-2 py-3 font-serif divide-x-2 ">{i}</li>
                </div>
               
               </ul>
               
               )
            }</div>
        ):(<></>)
          
        }
    </>
       
    
   
}