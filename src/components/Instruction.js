import Icon from "./Icon"
import { styleInstruction } from "../style/style"
import {FcIdea} from "react-icons/fc"


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


export default function Instruction ({headers}){
     const header =  headers.toUpperCase()
       return <div> 
     <article className={styleInstruction.article}>
     <h1 className="md:text-[18px]"><Icon Size="1.5rem" name={<FcIdea></FcIdea>}>
      </Icon></h1> 
        <p className={styleInstruction.paragrah}>
           { header === "LISTENING" && descrition.listening.desc}
          { header === "READING" && descrition.reading.desc}
          { header === "GRAMMAR" && descrition.grammer.desc}
          { header === "VOCABULARY" && descrition.vocabulary.desc}
          { header === "WRITING" && descrition.writining.desc}
          
        </p>
     </article>
     </div>
    
    
 }