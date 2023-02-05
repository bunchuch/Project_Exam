import React, { useState } from "react";
import { ReadingCard } from "../../components/ReadingCard";
import { styleAudio } from "../../style/style";
import { Loader } from "../../components/load/Loader";
import Icon from "../../components/Icon";
import { FcAudioFile } from "react-icons/fc";
import "../../style/style.css"
const renderQuestionHeader =  (result,item) =>{
  const items =  {...item}
  const {src ,type,header} = items

 
  if(result === "LISTENING"){
    return <div className={styleAudio.main}>
      <div className="flex justify-center  items-center ">
        <h1>
<div className="text-[18px] px-2 md:p-2">
  🎶
</div>
        </h1>
        <audio className={styleAudio.audio} controlsList="nodowload" controls>
          <source src={src} type ="audio/mpeg"></source>
        </audio>
      </div>
    </div>
  }
  if(result === 'READING'){
    return <ReadingCard  header={header} type={type} sentence={ src }/>
  }
  if(result === "WRITING"){
    return <h1 className="px-5 py-2">
      <p className="text-md tracking-wide font-semibold py-2">
        📑
        choose topic below</p>
      {src.map((i,key)=> <p
      className="mx-3 tracking-wide text-slate-800"
      key={key}> {key+1} - {i}  </p>)}</h1>
  }
if (result === "VOCABULARY"){
  return <div className="grid grid-cols-3 font-roboto md:grid-cols-5 gap-1 
  px-2 py-2 text-center md:text-base
   text-[12px]  bg-white rounded">
    {src.map((i,index)=><ul className="flex font-medium justify-center  items-center 
                 text-purple-900 rounded-lg"><li 
                className="border-1 px-2 py-3 cursor-pointer  divide-x-2">
      
      {index+1}. {i}
      </li></ul>)}
  </div>
}
  return true
}

export default function Header ({item, categorie}) {

  const {src} = item
  const questionType = categorie.toUpperCase()
    
  return (
          <>
          {
          src ? <div className= {renderQuestionHeader() ?
               "bg-white  border-[1px] "
            +" border-gray-200  rounded tracking-wide 2xl:mt-3 md:px-2 md:py-2 space-y-2 ": " " }>
             {renderQuestionHeader(questionType,item)}
            </div> : <></> 
          }
          </>
            
        )
}