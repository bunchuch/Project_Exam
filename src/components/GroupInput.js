import React from "react";
import { styleGroupInput } from "../style/style";


export default function GroupInput ({ Text, type ,event })  {
    return <div className={styleGroupInput.main}>
       <input id="default-radio-1" type={type}  value="" name="default-radio"
          className={styleGroupInput["input-style"]}/>
       <label for="default-radio-1" className={styleGroupInput["label-style"]}>{Text}</label>
    </div>
 }