import Alert from "./Alerts";
import Tooltip from "./Button/Tooltip"
import { useEffect, useRef, useState } from "react"




export const TextArea = ({onpast, onsubmit})=>{
const [text ,setText] = useState('')
const [wordCount, setWordCount] = useState(0);
const [sentence ,setSentence] = useState()
const [alert ,setAlert] = useState(false)
const alertRef = useRef(false)

const preventCopyPast = (e: ClipboardEvent<HTMLInputElement>)=>{
  e.preventDefault();
  setAlert("Not Allow to copy and past")
 }


    const recalculate = e => {
        setText(e.target.value);
      };
    
      useEffect(()=>{
        const word = text.split(' ')
        let wordCount =  0
        word.forEach((word)=>{
            if(word.trim() !== ''){
                wordCount++
            }
        })
        setWordCount(wordCount)
      },[text])


  const handleChange = (e) =>{
    e.preventDefault()
    console.log(text)
    alert(`uploading...${text}`)

  }

    return (
        <div className={styleWriting["divtag3 "]}>
          
  <p className="text-end text-[16px] font-sans text-gray-600">{wordCount}/200</p>
  <form onsubmit={()=>handleChange}>
  <textarea maxLength={2000} spellCheck="false" rows="10" 
      className={styleWriting.textarea} onCopy={onpast} 
      onPaste={preventCopyPast}
      onChange={recalculate}
       placeholder="Write here..." required>
            </textarea>
            <div className="w-32 mt-3">
            <Tooltip tooltip="Are you sure ?">
            <button type="submit "  className="bg-purple-800 px-4
                py-2 rounded-full text-[14px] tracking-wider
               font-medium text-white hover:bg-gradient-to-r
                hover:from-purple-700 hover:to-purple-700 transition-all ease-out 
                duration-300">Submit</button>
            </Tooltip> 
            </div>
  </form>                   
  </div> 
    )
}

const styleWriting = {
  "divtag2" : "py-4",
  "divtag3 " : " rounded-t-lg space-y-2 ",
  "divtag4" : " flex pl-0 space-x-1 sm:pl-2",
  "textarea" : "w-full rounded-xl 2xl:h-[20rem] tracking-widest text-sm border-[1px] border-gray-300 border-dashed text-gray-900 bg-white p-2  ",
  "divtag5" : "flex items-center justify-between px-3 mt-1  ",
  "btn-style" : " inline-flex items-center py-2 px-4 text-xs font-medium text-center "
  +" text-white bg-purple-800 rounded-[4px] focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800",
  "label-style" : "inline-flex justify-center cursor-pointer p-2 ",
  "input-style" : " ",  
}
