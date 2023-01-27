import React, { useEffect,ClipboardEvent, useState } from "react";
import axios from 'axios';
import { BiImage, BiPen } from "react-icons/bi";
import Icon from "../../../components/Icon";
import Instruction from "../../../components/Instruction";
import { TbWriting } from "react-icons/tb";

import { styleWriting } from "../../../style/style";





export default function Writing (){
 const [images, setImages] = useState([])
 const [imageURLs, setImagesURLs] = useState([])
 const [showimage ,setShowwimage] = useState()
 const [count,setCount] = useState()
 const [alert,setAlert] = useState(null)





const[selectedFile, setSelectFile] = useState(null)

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
  <div className="text-[14px] bg-white py-2 rounded-[4px] shadow-sm shadow-cyan-500/10">
    <ol className="text-gray-800 tracking-wider pl-5  space-y-1 list-decimal list-inside">
        <li>
            Describe three advantages of living aboard
        </li>
        <li>Describe three advantages of traveling aboard</li>
        <li>Describe you happay memory in life</li>
        
    </ol>
  </div>

  <p className="text-red-500 font-medium text-[14px]
  bg-red-200 rounded-[4px] px-2">{alert}</p>
<form>
   <div className={styleWriting.container}>
       <div className={styleWriting["divtag3 "]}>
       {
        imageURLs?(
            <div className={styleWriting.divtag2}>
            {imageURLs.map(imte=>
               <img className="w-20 h-20" src={imte}/>)}
            </div>
        ):(
            <></>
        )
    }
           <textarea  maxLength={1000} spellCheck="false" id="comment" rows="10" 
           className={styleWriting.textarea} onCopy={(e)=>preventCopyPast(e)} 
           onPaste={(e)=> preventCopyPast(e)}
            placeholder="Write here..." required>
                 </textarea>
                
       </div>
       
       <div className={styleWriting.divtag5}>
           <div className={styleWriting.divtag4}>
    <label className={styleWriting["label-style"]}>
        <Icon name={<BiImage/>} Size="1.5rem" />
                   <input id="dropzone-file" type="file" accept="image/*"
                    onChange={onImageChange} className="hidden" />  
    </label>
           </div>
       </div>
   </div>
</form>


      
      
    </div> 
    

}