import Icon from "./Icon"

import { styleInstruction } from "../style/style"


export default function Instruction ({tagname,icon,desc, header}){
       return <div className={styleInstruction.main}>
       <Icon name={icon} Size="1.2rem"/>
     <article className={styleInstruction.article}>
      <h1 className={styleInstruction.header}>  {header}</h1>
        <p className={styleInstruction.paragrah}>{desc}</p>
     </article>
     </div>
    
    
 }