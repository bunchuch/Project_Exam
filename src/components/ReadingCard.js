
import React, { useState, useTransition } from "react";
import { BiChevronDown,BiChevronUp, BiFullscreen } from "react-icons/bi";
import Tooltip from "./Button/Tooltip";
import Icon from "./Icon";
import Modal from "./Modal";


export function ReadingCard ({header,sentence,type}){
 const [open, setOpen] = useState(false)
 const [style,setStyle] = useState("")
 const [fullScreen ,setFullScreen] = useState(false)
const handleOnclick = () =>{
  setOpen(!open)
  setStyle('relative transition duration-150 ease-in-out order-first')

}


    return  <>
      {
       sentence	 ?(
        <div className="flex flex-col rounded"  id="accordion-collapse" data-accordion="collapse">
        <h2 className="md:order-first order-last" id="accordion-collapse-heading-1">
          <button type="button" onClick={handleOnclick} className="flex items-center justify-between w-full
           bg-white md:p-4 p-2 font-medium text-left  
             rounded text-[14px] md:text-[16px]   focus:ring-4  focus:ring-gray-200 dark:focus:ring-gray-800
            dark:border-gray-700 dark:text-white hover:bg-gray-50 text-slate-900 dark:hover:bg-gray-800">
            <span>{header}</span>
          {
            open ? (
              <Icon name={<BiChevronUp/>} Size="1.2rem" color="purple"/>
            ):(
              <Icon name={<BiChevronDown/>} Size="1.2rem" color="purple"/>
            )
          }
          </button>
         
        </h2>
        {
          open && (
            <div 
            className={style}>
               {
              fullScreen ? (<>
                <img className="object-contain z-10 -top-6 absolute" src={sentence}/>
              </>
             
              ):(null)
            }
            <div className="border  rounded-[4px] text-start py-4 shadow-sm overflow-y-auto overflow-hidden h-52 md:h-80
             shadow-cyan-500/10 border-b-0 px-4 tracking-wide transition duration-150 ease-in-out scale-100 text-slate-600 bg-blue-50 text-[16px]
              border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {type === "text" && (    <p className="mb-2 leading-7 justify-center ">{sentence}</p>)}
                {type === "image" && (
      
                     <img className="" src= {sentence}/>
                
                 
                )}
          
            </div>
            <div className="-translate-y-10 md:hidden -translate-x-4 z-10 right-0 absolute">
              <button onClick={()=> setFullScreen(!fullScreen)}>
              <Icon name={<BiFullscreen/>} Size="1.2rem" color="gray"></Icon>
              </button>
           
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