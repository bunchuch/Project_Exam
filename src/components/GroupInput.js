import React from "react";
import { styleGroupInput } from "../style/style";






export default function GroupInput ({ Text, type ,onChange,name })  {
    return <div className={styleGroupInput.main}>
       <input id="default-radio-1" type={type}  value="" onChange={onChange} name={name}
          className={styleGroupInput["input-style"]}/>
       <label htmlFor="text"  className={styleGroupInput["label-style"]}>{Text}</label>
    </div>
 }