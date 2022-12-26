import React from "react";


export default function Selection ({onchange,style,value,option }){
    return <>
    <select className={style} value={value} onChange={onchange}>
        {
    option.map((items)=>
     <option value={items}>{items}</option>
)

        }
      
    </select>
    </>

}