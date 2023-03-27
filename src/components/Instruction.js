import Icon from "./Icon"
import {BiLibrary,BiBarChartAlt ,BiUserVoice, BiBookOpen,BiFontColor, BiLoader} from "react-icons/bi";
import {TbWriting} from "react-icons/tb"
import { styleInstruction } from "../style/style"



const descrition = {
  "listening" : {
    "desc" : "Listen to an audio and then check the correct answers",
   
  },
  "reading" : {
    "desc" : "Reading the text and choose the correct answere bleow",
   
  },
  "vocabulary" : {
    "desc" : "Use the word in the box and make a correct answer of the sentences",
   
  },
  "grammer" : {
    "desc" : "Choose to sentence and Make a correct answer ",
 
  },
  "writining" : {
    "desc" : "Write at less 100 word in paragraph",
   
  }
}


export default function Instruction ({tagname,icon,desc, headers}){
     const header =  headers.toUpperCase()


       return <div className={styleInstruction.main}>
       
    <h1 className="text-[18px]">💡</h1>
       
     <article className={styleInstruction.article}>
        <p className={styleInstruction.paragrah}>
          
           { header === "LISTENING" && descrition.listening.desc}
          { header === "READING" && descrition.reading.desc}
          { header === "GRAMMER" && descrition.grammer.desc}
          { header === "VOCABULARY" && descrition.vocabulary.desc}
          { header === "WRITING" && descrition.writining.desc}
          
        </p>
     </article>
     </div>
    
    
 }