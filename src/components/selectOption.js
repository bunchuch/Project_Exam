import React from "react";






function SelectOption ({title,option}){
    return <>
<select name="cars" id="cars" className=" text-slate-700 px-2 border-[1px]
 focus:border-white rounded text-[14px] space-y-2 items-center">
    {option ? option.map((value)=><option className="bg-white " value={value[0]}>{value}</option>) : <>No List</>}
  
 
</select>

    </>
}


export default SelectOption