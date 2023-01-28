import React, { useState } from "react"
import reactStringReplace from "react-string-replace"
import { Question } from "../../../../data/data"

const styleFillBlank = {
    "main": "",
    "selectbox": "border-b-[1px] rounded-[4px]",
    "spantag-style": "px-2 py-2  rounded-md leading-tight tracking-wide",
    "divtag-style-main": "",
    "divtag-ul_list": "",
    "ul_style": "md:inline-flex md:flex-wrap grid grid-cols-3 gap-2",
    "li_tag_stlye": "bg-gray-50 text-center  py-[2px] px-2 rounded-full md:rounded-[4px] text-[10px] shadow-sm shadow-gray-500/10 md:text-[14px] cursor-pointer",
    "divtag-paragrah": "md:mt-5 mt-2 py-2 px-2  tracking-wider text-[14px] leading-relaxed",
    "paragrah": "tracking-wide leading-8 text-start"
}



export default function FillBlanks(props) {
  
    const [change, setChange] = useState(null);

    const regExp = "<"
    const reactaStringReplace = reactStringReplace(props.sentence, regExp, (macth, i) =>
    (
    
         <span className={styleFillBlank["spantag-style"]}>
            <input  className="border-[1px] w-28 py-1" onChange={props.onChange}/>
        {/* <select className={styleFillBlank.selectbox}>
            <option value="selcetd"></option>
            {props.clude.map((value) => <option key={value} value={value}>{value}</option>)}
        </select> */}
    </span>
  ))
    return <div className={styleFillBlank["divtag-style-main"]}>
        <div className={styleFillBlank["divtag-ul_list"]}>
            <ul className={styleFillBlank.ul_style}>
                {props.clude.map((value) => <>
                    <li key={value} className={styleFillBlank.li_tag_stlye}>{value}</li>
                </>
                )}
            </ul>
        </div>
        <div className={styleFillBlank["divtag-paragrah"]}>
            <p className={styleFillBlank.paragrah}> {reactaStringReplace}</p>
        </div>
    </div>
}