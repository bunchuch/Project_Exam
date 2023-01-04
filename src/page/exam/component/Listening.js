import GroupInput from "../../../components/GroupInput";
import Audio from "../../../components/Audio";
import Icon from "../../../components/Icon";
import { BiBookAlt, BiEditAlt ,BiUserVoice} from "react-icons/bi";
import Instruction from "../../../components/Instruction";
import {Question} from "../../../data/data"
import FillBlanks from "./FillBlank/FillBlank";
import RenderQuestion from "./RenderQuestion";



const styleListenning = {
   "main" : "bg-white border rounded-[4px] tracking-wide",
   "divtag1" : "mx-2 px-4 py-4 space-y-6 ",
   "p-tag-style" : "font-medium text-[14px]",
   "divtag2" : "space-y-2",
  
}




export default function Lisenting ({question}){
    let answer = false; 
    let Type ="checkbox"
 
    return <>
    <Instruction 
    header="Listening" 
    desc= "recommand for use headephone or hearphone for best expreicese"
    icon={<BiUserVoice/>}
    />
    {
      Question.map((value)=><>
      {Question.value ?(
         <>
         <div>No data avilble</div>
         </>
      ):(
<>
<Audio audio={value.audio}/>
    <div className={styleListenning.main}>
       <div className={styleListenning.divtag1}>
          <div className={styleListenning.divtag2}>
         {
<RenderQuestion number={value.id} type={value.type} clude={value.clude} 
question={value.question} categories={value.categories} 
Type={Type}/>
         }
       <div className="flex  md:flex-row
        justify-end md:items-center mt-[10px]">
          <button  className="bg-purple-800 px-4 py-2 rounded-[4px] text-[14px] 
          font-medium text-white">Answer</button>
          </div> 
       </div>
    </div>
    </div>

</>
      )}
    
      </>)
   
   
      } 
      
    </>
  }