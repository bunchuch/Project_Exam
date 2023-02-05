import React, { useState } from "react"
import reactStringReplace from "react-string-replace"






export default function FillBlanks({event ,sentence , values}) {
  
    const [change, setChange] = useState(null)
    const [value ,setValue]  = useState({})


    const sentences = "I sometime get< about how and when to use past simple and pressent ferfect."
    +" Teacher said that I had to paractice doing more excrcise to get better.I sometime get"+
    "< about how and when to use past simple and pressent ferfect. Teacher said that I had to < "
    +"doing more excrcise to get better." 
     +" Teacher said that I had to paractice doing more excrcise to get better.I sometime get"  
     +" Teacher said that I had to paractice doing more excrcise to get better.I sometime get"
     +" Teacher said that I had to paractice doing more excrcise to get better.I sometime get"
     +" Teacher said that I had to paractice doing more excrcise to get better.I sometime get"
   const handleChange = (e) => {
   setValue(value)

   }

    const regExp = "<"
    const reactaStringReplace = reactStringReplace(sentences, regExp , (macth, i) =>
    (
    
         <span className={fillBlankStyle.spanTag}>
            <input  className={fillBlankStyle.inputTag} name="" />
        {/* <select className={styleFillBlank.selectbox}>
            <option value="selcetd"></option>
            {props.clude.map((value) => <option key={value} value={value}>{value}</option>)}
        </select> */}
    </span>
  ))
    return <div className={fillBlankStyle.divTagMain}>
       
            <p className={fillBlankStyle.paragrah}>{reactaStringReplace}</p>
       
    </div>
}

const fillBlankStyle = {
    "main": "",
    "inputTag" : "w-[5rem] rounded-xl border-[1px] border-gray-400 px-2 py-1",
    "selectBox": "rounded-[4px]",
    "spanTag": "px-2 rounded-md leading-tight tracking-wide ",
    "divTagMain": "flex justify-center ",
    "divTagulList": "",
    "liTags": "bg-gray-50 text-center  px-2 "
                    +" rounded-full md:rounded-[4px] text-[10px] shadow-sm "
                    +" shadow-gray-500/10 md:text-[14px] cursor-pointer",
    "paragrah": "tracking-wider text-start text-[16px] md:text-[18px] 2xl:text-[20px] px-3 font-sans 2xl:leading-[4rem] leading-[3.5rem] text-slate-700"
}