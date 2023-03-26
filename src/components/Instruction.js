import Icon from "./Icon"
import {BiLibrary,BiBarChartAlt ,BiUserVoice, BiBookOpen,BiFontColor, BiLoader} from "react-icons/bi";
import {TbWriting} from "react-icons/tb"
import { styleInstruction } from "../style/style"



const descrition = {
  "listening" : {
    "desc" : "Listen to a audio and then check the correct answers",
    "icon" : <BiUserVoice/>
  },
  "reading" : {
    "desc" : "Reading the text and choose the correct answere bleow",
    "icon" : <BiBookOpen/>
  },
  "vocabulary" : {
    "desc" : "Use the word in the box and make a correct answer of the sentences",
    "icon" : <BiFontColor/>
  },
  "grammar" : {
    "desc" : "Choose to sentence and Make a correct answer ",
    "icon" : <BiLibrary/>
  },
  "writining" : {
    "desc" : "choose the topic below and write a 120 word in paragraph",
    "icon" : <TbWriting/>
  }
}


export default function Instruction ({tagname,icon,desc, headers}){
     const header =  headers.toUpperCase()


       return <div className={styleInstruction.main}>
       
         { header === "LISTENING" && <Icon name={descrition.listening.icon} Size="1.2rem"/>}
         { header === "READING" && <Icon name={descrition.reading.icon} Size="1.2rem"/>}
         { header === "GRAMMAR" &&  <Icon name={descrition.grammar.icon} Size="1.2rem"/>}
         { header === "VOCABULARY" &&  <Icon name={descrition.vocabulary.icon} Size="1.2rem"/>}
         { header === "WRITING" && <Icon name={descrition.writining.icon} Size="1.2rem"/>}
       
     <article className={styleInstruction.article}>
      <h1 className={styleInstruction.header}>  {header}</h1>
        <p className={styleInstruction.paragrah}>
          
           { header === "LISTENING" && descrition.listening.desc}
          { header === "READING" && descrition.reading.desc}
          { header === "GRAMMAR" && descrition.grammar.desc}
          { header === "VOCABULARY" && descrition.vocabulary.desc}
          { header === "WRITING" && descrition.writining.desc}
          
        </p>
     </article>
     </div>
    
    
 }