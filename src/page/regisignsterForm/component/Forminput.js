import React from "react";



export default function Forminput (props){
    return  <div className="flex w-full">
<div className="flex flex-col w-full">
        <label className="regist_lablestyle-style-05">
            {props.label}
        </label>
<input 
className="regist_inputstlye-style-forminput-02"
name={props.name} value={props.value}
onChange={props.onchange}
type={props.type}
/>
        
    </div>
    </div>
    
}