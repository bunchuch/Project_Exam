import React, { useState } from "react"
import reactStringReplace from "react-string-replace"
import { Question } from "../../../../data/data"

const styleFillBlank = {
    "main": "py-4",
    "selectbox": "border-b-[1px] rounded-[4px]",
    "spantag-style": "px-2 py-2 mt-2 rounded-md leading-tight tracking-wide",
    "divtag-style-main": "py-4",
    "divtag-ul_list": "mt-2",
    "ul_style": "md:inline-flex md:flex-wrap grid grid-cols-3 md:space-y-0 space-y-2 font-medium md:space-x-2",
    "li_tag_stlye": "bg-gray-100 text-center py-1.5 px-2 rounded-full md:rounded-lg text-[12px] md:text-[14px] cursor-pointer",
    "divtag-paragrah": "mt-5 tracking-wider text-[15px] leading-relaxed",
    "paragrah": "tracking-wide leading-8 text-start"
}



export default function FillBlanks(props) {

    const [change, setChange] = useState(null);

    const regExp = "<"

    const reactaStringReplace = reactStringReplace(props.sentence, regExp, (macth, i) =>
    (
    
         <span className={styleFillBlank["spantag-style"]}>
        <select className={styleFillBlank.selectbox}>
            <option value="selcetd"></option>
            {props.clude.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
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