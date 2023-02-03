import React, { useState } from "react";



export function VocabularyCard ({clude}){

const [renderClude ,setRenderClude] = useState([...clude])
    return  <>

    
     {
        renderClude.length !== 0 ? (
            <div className="grid grid-cols-4  md:grid-cols-5 gap-1 text-center md:text-base text-[12px] py-0 bg-white border-[1px] rounded-[4px]  shadow-sm shadow-cyan-500/10">{
                renderClude.map((i,key)=><ul className="flex justify-center items-center rounded-sm  border-[1px] border-slate-300" key={key-1}>
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