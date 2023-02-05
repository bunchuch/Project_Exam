import React, { useEffect,ClipboardEvent, useState } from "react";
import axios from 'axios';
import { BiImage } from "react-icons/bi";
import {TfiWrite} from "react-icons/tfi"
import Icon from "./Icon";
import {styleWriting} from "../style/style"
import Alert from "./Alerts";
import UploadImages from "./UploadImage";
import Tooltip from "./Button/Tooltip";
import { TextArea } from "./textArea";
import { SmallSpinner } from "./load/SmallSpinner";





export default function Writing ({data}){
 const [images, setImages] = useState([])
 const [imageURLs, setImagesURLs] = useState([])
 const [showimage ,setShowwimage] = useState()
 const [count,setCount] = useState()
 const [alert,setAlert] = useState(null)
const[selectedFile, setSelectFile] = useState(null)
const [stateChange ,setState] = useState(false)
const [showAlert,setShowAlert] = useState(false)

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
 <div className="w-full tracking-wide flex mx-auto space-x-4">
 <button onClick={()=>{
  setState(true)
 }}>
<div className={styleWriting.switchBtn}>
    📷 upload image
</div>
</button>
<button onClick={()=>{
  setState(false)
}}>
<div className={styleWriting.switchBtn}>
   📝 Wrting    
</div>
</button>

 </div>
 <div className={styleWriting.container}>
  {
    stateChange ? (
            <div className={styleWriting.divtag2}>
           <UploadImages onsubmit={(event)=> {event.preventDefault()}}/>
            </div>
       ):(    
         <TextArea onsubmit={(event)=>{event.preventDefault()}}
          onpast={(e)=> preventCopyPast(e)}  />
    )
  }
      
       
     
   </div> 
    </div> 
    

}