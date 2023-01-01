import React from "react"



export default function Audio({audio}){
    return <>
<div className="w-full rounded-[4px]  border-[1px] border-purple-200 ">
    <audio className="w-full bg-gray-100  " controlsList="nodownload" controls>
     <source src={audio} type="audio/mpeg" />
    </audio>
  </div>
    
    </>
}