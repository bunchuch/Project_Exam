import React from "react";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import Icon from "../../../components/Icon";
import Timer from "../../../testfile/Timer";



const number = [1,2,3,4,5,6,7,9]

function Title (props){
return <h1 className="font-medium text-[14px] text-gray-900 my-2 border-b-[1px] border-gray-200 tracking-wide">{props.text}</h1>
}


function ExamStatus ({data}){
return <div className="mt-10  ">
{/* 
   Timer Loading */}
  <div className="my-4">
<Title text="Timer"/>
<div className="flex items-center justify-center  border-dashed border-[1px] bg-white border-gray-400 rounded-[4px]">
<Timer></Timer>
<Icon name={<BiTime/>} Size="1.5rem"/>
</div>
 
</div>

{/* Exam status or process */}
<div className="my-2 ">
<Title text="Exam status"/>
<ul className="grid  grid-cols-4 gap-2 border-dashed border-[1px] bg-white mt-4 border-gray-400 rounded-[4px] py-4 px-4">
  {
    number.map((value)=><li className="my-2">
      <a href="#" class="px-3 py-2  leading-tight text-gray-900 bg-white border rounded-md
       border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
        dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{value}</a>
    </li>
    )
  }

</ul>
</div>

{/* Rule of Exam */}
<div className="">
<Title text="Rule of Exam"/>
  <article className="border-[1px] border-blue-500 text-gray-800 
  border-dashed mt-4 bg-blue-100 
  rounded-[4px] px-3 py-4 font-base text-sm">    
        <ol class="px-2  space-y-1 list-decimal list-inside">
            <li>You might feel like you are being really "organized" o</li>
            <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
            <li>Nesting tons of folders in your source code is also not helpful.</li>
        </ol>
    

</article>
</div>
</div>
}


export default ExamStatus