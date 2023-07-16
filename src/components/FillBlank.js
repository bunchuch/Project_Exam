import React, { useState } from "react"
import reactStringReplace from "react-string-replace"


const styleFillBlank = {
    "main": "",
    "selectbox": "border-b-[1px] rounded-[4px]",
    "spantag-style": "px-2   rounded-md leading-tight tracking-wide",
    "divtag-style-main": "flex justify-center border-t-[1px] py-5 md:py-14",
    "divtag-ul_list": "",
    "li_tag_stlye": "bg-gray-50 text-center  px-2 rounded-full md:rounded-[4px] text-[10px] shadow-sm shadow-gray-500/10 md:text-[14px] cursor-pointer",
    "divtag-paragrah": "tracking-wider text-[14px] leading-relaxed",
    "paragrah": "tracking-wide text-start text-[16px] md:text-[18px] px-3 md:px-16 leading-loose text-slate-700"
}



export default function FillBlanks({event ,sentence , values}) {
  
    const [change, setChange] = useState(null)
    const [value ,setValue]  = useState({})

   const handleChange = (e) => {
   setValue(value)

   }

    const regExp = "<"
    const reactaStringReplace = reactStringReplace(sentence, regExp , (macth, i) =>
    (
    
         <span className={styleFillBlank["spantag-style"]}>
            <input  className="border-[1px] rounded w-28
             border-gray-400 " value={value} name=""  onChange={handleChange}/>
        {/* <select className={styleFillBlank.selectbox}>
            <option value="selcetd"></option>
            {props.clude.map((value) => <option key={value} value={value}>{value}</option>)}
        </select> */}
    </span>
  ))
    return <div className={styleFillBlank["divtag-style-main"]}>
        <div className={styleFillBlank["divtag-paragrah"]}>
            <p className={styleFillBlank.paragrah}>{reactaStringReplace}</p>
        </div>
    </div>
}