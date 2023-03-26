import React, { useEffect,ClipboardEvent, useState } from "react";
import axios from 'axios';
import { BiImage, BiPen,BiMessageSquareDetail } from "react-icons/bi";
import Icon from "./Icon";
import {styleWriting} from "../style/style"
import Alert from "./Alerts";
import UploadImages from "./UploadImage";
import Tooltip from "./Button/Tooltip";




export default function Writing ({data}){
 const [images, setImages] = useState([])
 const [imageURLs, setImagesURLs] = useState([])
 const [showimage ,setShowwimage] = useState()
 const [count,setCount] = useState()
 const [alert,setAlert] = useState(null)
const[selectedFile, setSelectFile] = useState(null)
const [stateChange ,setState] = useState(false)


const preventCopyPast = (e: ClipboardEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setAlert("Not Allow to copy and past")
       }

 useEffect(()=>{
    if(images.length < 1) return;
    const newImageUrls = []
    images.forEach(image=> newImageUrls.push(URL.createObjectURL(image)))
    setImagesURLs(newImageUrls)
 },[images])

 function onImageChange(e){
    setImages([...e.target.files])
 }



 const handleUpload = async (event)=>{
  event.preventDefault()
  const formData = new FormData()
  formData.append('selectedFile',selectedFile)
  try{
 const response = await axios ({
    method : "post",
    url : "#",
    data : formData,
    headers:{'Content-Type': "multipart/form-data"},
 })

if(response){
    alert("succefully upload")
}
alert('error upload')

  }catch(err){
console.log(err)
  }
 }


    return   <div className={styleWriting.main}>     
 <Alert info="warning" desc={alert}/>
 <div className="w-full  flex mx-auto space-x-4">
 <button onClick={()=>{
  setState(true)
 }}>
<div className="max-w-sm p-2 text-[14px] bg-purple-100 border border-purple-200 rounded
 hover:bg-purple-50 font-semibold text-purple-800 dark:bg-gray-800 dark:border-gray-700">
  <div className="flex justify-center items-center gap-2">
    <Icon name={<BiImage/>} Size="1.2rem" color="purple"></Icon>
    upload image
  </div>
</div>
</button>
<button onClick={()=>{
  setState(false)
}}>
<div className="max-w-sm p-2 text-[14px] bg-purple-100 border border-purple-200 rounded
 hover:bg-purple-50 font-semibold text-purple-800 dark:bg-gray-800 dark:border-gray-700">
  <div className="flex justify-center items-center gap-2">
    <Icon name={<BiPen/>} Size="1.2rem" color="purple"></Icon>
    Wrting
  </div>

    
</div>
</button>

 </div>
<form>
 <div className={styleWriting.container}>
  {
    stateChange ? (
            <div className={styleWriting.divtag2}>
           <UploadImages/>
            </div>
       ):(    
 <div className={styleWriting["divtag3 "]}>
      <textarea  maxLength={1000} spellCheck="false" id="comment" rows="10" 
      className={styleWriting.textarea} onCopy={(e)=>preventCopyPast(e)} 
      onPaste={(e)=> preventCopyPast(e)}
       placeholder="Write here..." required>
            </textarea>
            <Tooltip tooltip="Are you sure ?">
            <button onClick={()=>alert("uploading")} className="bg-purple-800 px-4
                py-2 rounded text-[14px] 
               font-medium text-white hover:bg-gradient-to-r
                hover:from-purple-700 hover:to-purple-700 transition-all ease-out 
                duration-300">Submit</button>
            </Tooltip>          
  </div> 
    )
  }
      
       
     
   </div> 
</form>


      
      
    </div> 
    

}