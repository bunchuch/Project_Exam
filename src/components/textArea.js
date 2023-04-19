import Tooltip from "./Button/Tooltip"
import { styleWriting } from "../style/style"
import { useEffect, useState } from "react"




export const TextArea = ({onpast, onsubmit})=>{
const [text ,setText] = useState('')
const [wordCount, setWordCount] = useState(0);
const [sentence ,setSentence] = useState()

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
  <p className="text-end text-[16px] font-ubuntu text-gray-600">{wordCount}/200</p>
  <form onsubmit={onsubmit}>
  <textarea maxLength={2000} spellCheck="false" rows="10" 
      className={styleWriting.textarea} onCopy={onpast} 
      onPaste={onpast}
      onChange={recalculate}
       placeholder="Write here..." required>
            </textarea>
            <div className="w-32">
            <Tooltip tooltip="Are you sure ?">
            <button type="submit " onClick={handleChange} className="bg-purple-800 px-4
                py-2 rounded text-[14px] tracking-wider
               font-medium text-white hover:bg-gradient-to-r
                hover:from-purple-700 hover:to-purple-700 transition-all ease-out 
                duration-300">Submit</button>
            </Tooltip> 
            </div>
  </form>                   
  </div> 
    )
}