import React from "react";



const data = ["Fill in Black","Multiple Choice",""]


function SelectOption ({title,}){
    return <>
<select name="cars" id="cars" className="bg-blue-200 text-slate-700 px-2 py-2
 focus:border-white rounded-full font-medium text-[14px] space-y-2 items-center">
    {data.map((value)=><option className="bg-white " value={value[0]}>{value}</option>)}
  
 
</select>

    </>
}


export default SelectOption