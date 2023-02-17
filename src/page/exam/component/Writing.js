import React, { useEffect,ClipboardEvent, useState } from "react";
import axios from 'axios';
import { BiImage, BiPen,BiMessageSquareDetail } from "react-icons/bi";
import Icon from "../../../components/Icon";
import { styleWriting } from "../../../style/style";
import Alert from "../../../components/Alerts";
import 'aos/dist/aos.css'
import Aos from "aos";
import UploadImages from "../../../components/UploadImage";
import Tooltip from "../../../components/Button/Tooltip";




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
     <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 shadow-sm
      shadow-cyan-500/10 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <div className="flex-shrink-0 inline w-5 h-5 mr-3" >
    <Icon name={<BiMessageSquareDetail/>} Size="1.2rem" color="purple"></Icon>
  </div>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Find The Topic Below</span>
      <ul class="mt-1.5 ml-4 list-disc list-inside">
      {
        data.map((items,key)=><li key={items.id}>{items.choice}</li>)
     }
    </ul>
  </div>
</div>
 <Alert info="warning" desc={alert}/>

 <div className="grid grid-cols-2 gap-4">
 <button onClick={()=>{
  setState(true)
 }}>
<div class="max-w-sm p-2 bg-purple-100  border border-purple-200 rounded-lg
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
<div class="max-w-sm p-2 bg-purple-100 border border-purple-200 rounded-lg
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
            <button onClick={()=>alert("uploading")} className="bg-purple-900 px-4
                py-2 rounded-lg text-[14px] 
               font-medium text-white hover:bg-gradient-to-r
                hover:from-purple-700 hover:to-purple-800 transition-all ease-out 
                duration-300">Submit</button>
            </Tooltip>
          
                          
                   
  </div> 
    )
  }
      
       
     
   </div> 
</form>


      
      
    </div> 
    

}