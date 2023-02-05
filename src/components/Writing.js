import React, { useEffect,ClipboardEvent, useState } from "react";
import axios from 'axios';
import Alert from "./Alerts";
import UploadImages from "./UploadImage";
import { TextArea } from "./textArea";
import Aos from "aos"
import 'aos/dist/aos.css'






export default function Writing ({data}){

const [alert,setAlert] = useState(null)
const[selectedFile, setSelectFile] = useState(null)
const [stateChange ,setState] = useState(false)
const [showAlert,setShowAlert] = useState(false)


useEffect(()=>{
   Aos.init({duration:2000})
 },[])


const preventCopyPast = (e: ClipboardEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setAlert("Not Allow to copy and past")
       }

 

    return <div className="bg-white">
         <div className="w-full h-[2rem] space-x-4 tracking-wider">
   <button className={styleWriting.switchBtn} onClick={()=>setState(true)}>
     📷 Upload Image
   </button>
   <button className={styleWriting.switchBtn} onClick={()=> setState(false)}>
     &#128209; Write
   </button>
</div>
         {
            stateChange ? <div className="mt-4" dat-aos= "fade-up">
            <UploadImages/> 
            </div> : <TextArea />
         }


     </div>
 
   
    

}

const styleWriting = {
   "main" : "rounded-lg w-full  space-y-2 h-[100%]",
   "container" : "w-full shadow-gray-500/100 rounded-xl",
   "divtag2" : "",
   "divtag3 " : "bg-white rounded-t-lg ",
   "divtag4" : " flex pl-0 space-x-1 sm:pl-2",
   "textarea" : "w-full rounded-lg tracking-widest text-sm border-[1px] border-gray-300 border-dashed text-gray-900 bg-white p-2  ",
   "divtag5" : "flex items-center justify-between px-3 mt-1  ",
   "btn-style" : " inline-flex items-center py-2 px-4 text-xs font-medium text-center "
   +" text-white bg-purple-800 rounded-[4px] focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800",
   "label-style" : "inline-flex justify-center cursor-pointer p-2 ",
   "input-style" : " ", 
   "switchBtn" : "max-w-sm px-2 tracking-wide py-1.5 text-[14px] bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-50 text-gray-800 ",   
}