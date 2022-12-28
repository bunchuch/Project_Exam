import React from "react";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import Timer from "../../../../testfile/Timer";
import Icon from "../../Icon";
const number = [1,2,3,4,5,6,7,9]

function Title (props){
return <h1 className="font-medium text-[14px] text-gray-700 my-2 border-b-[1px] border-gray-200 tracking-wide">{props.text}</h1>
}


function ExamStatus ({data}){
return <div className="mt-10  ">
  <div className="my-2">
<Title text="Timer"/>
<div className="flex items-center justify-center  border-dashed border-[1px] bg-white border-gray-400 rounded-[4px]">
<Timer></Timer>
<Icon name={<BiTime/>} Size="1.5rem"/>
</div>
 
</div>
<div className="">
<Title text="Exam status"/>
<ul className="grid  grid-cols-4 gap-2 border-dashed border-[1px] bg-white border-gray-400 rounded-[4px] py-5 px-4">
  {
    number.map((value)=><li className="my-2">
      <a href="#" class="px-3 py-2  leading-tight text-gray-500 bg-white border rounded-md
       border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
        dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{value}</a>
    </li>
    )
  }

</ul>
</div>


<div className="">
<Title text="Rule of Exam"/>
  <article className="border-[1px] border-gray-400 border-dashed bg-white rounded-[4px] px-3 py-4 font-base text-sm">    
        <ol class="px-2 text-gray-500 space-y-1 list-decimal list-inside">
            <li>You might feel like you are being really "organized" o</li>
            <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
            <li>Nesting tons of folders in your source code is also not helpful.</li>
        </ol>
    

</article>
</div>
</div>
}


export default ExamStatus