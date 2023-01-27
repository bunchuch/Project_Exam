import React from "react"
import reactStringReplace from "react-string-replace"

const text = ["I am a teacher< ","yes your < ",
"sunt < facere repellat provident occaecati. < reprehenderit quia et < Recusandae consequuntur expedita < reprehenderit < ut "]
const textHide = ["aut","optio","et","suscipit","cum","molestiae"]



const text2 = [
    {
        "number:":"tyeh< the",
        "number": "they < on",
    }
]
const newTexthide = [...textHide]
   
     
    
   


export default function FillBlanks(){
const regExp = "<"
const reactaStringReplace = reactStringReplace(text,regExp,(macth, i)=>(<span className="rounded-md">
    <select className="border-b-[1px] ">
        <option value="selcetd"></option>
       {textHide.map((value)=><option key={value} value={value}>{value}</option>)}
    </select>
</span>))
    return <div className="border-b-[1px] px-2 py-4 ">
        <div className="">
            <ul className="inline-flex space-x-2 font-medium m-3 cursor-pointer">
                {newTexthide.map((value)=><li>{value}</li>)}
            </ul>
        </div>
    {reactaStringReplace}
    
    </div>
}