
import React, { useState, useTransition } from "react";
import { FiArrowUpCircle,FiArrowDownCircle } from "react-icons/fi";
import Icon from "./Icon";


export function ReadingCard ({header,sentence}){
 const [open, setOpen] = useState(false)
 const [style,setStyle] = useState("")
const handleOnclick = () =>{
  setOpen(!open)
  setStyle('relative transition duration-150 ease-in-out order-first')

}


    return  <>
      {
       sentence	 ?(
        <div className="flex flex-col rounded-[4px] "  id="accordion-collapse" data-accordion="collapse">
        <h2 className="md:order-first order-last" id="accordion-collapse-heading-1">
          <button type="button" onClick={handleOnclick} className="flex items-center justify-between w-full bg-blue-500 p-4 font-medium text-left text-white border
            border-gray-200 rounded-[4px]  focus:ring-4  focus:ring-gray-200 dark:focus:ring-gray-800
            dark:border-gray-700 dark:text-white hover:bg-red-800 transition duration-150 ease-in-out dark:hover:bg-gray-800">
            <span>{header}</span>
          {
            open ? (
              <Icon name={<FiArrowUpCircle></FiArrowUpCircle>} Size="1.2rem" color="white"/>
            ):(
              <Icon name={<FiArrowDownCircle/>} Size="1.2rem" color="white"/>
            )
          }
          </button>
        </h2>
        {
          open && (
            <div className={style}>
            <div className="border  rounded-[4px] text-start py-4 shadow-sm overflow-y-auto md:overflow-hidden h-52 md:h-full
             shadow-cyan-500/10 border-b-0 px-4 tracking-wide transition duration-150 ease-in-out text-slate-600 bg-blue-50 text-[16px]
              border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 leading-7 justify-center ">{sentence}</p>
            </div>
          </div>
          )
        }
       
        </div>
        ):(
          <></>
        )
      }
    </>
}