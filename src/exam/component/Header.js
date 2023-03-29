import { render } from "@testing-library/react";
import React, { useState } from "react";
import Audio from "../../components/Audio";
import  {VocabularyCard}  from "../../components/VocabularyCard";
import { ReadingCard } from "../../components/ReadingCard";


const renderQuestionHeader = (result,item) =>{
  const items = {...item}
  const {src ,id,type,header} = items

 
  if(result === "LISTENING"){
    return <Audio audio={src}></Audio>
  }
  if(result === 'READING'){
    return <ReadingCard  header={header} type={type} sentence={src}/>
  }
  if(result === "WRITING"){
    return <h1 className="px-5 py-2">
      <p className="text-md tracking-wide font-semibold py-2">
        📑
        choose topic below</p>
      {src.map((i,key)=> <p
      className="mx-3 tracking-wider text-[14px] text-slate-800"
      key={key}> {key+1} - {i}  </p>)}</h1>
  }
if (result === "VOCABULARY"){
  return <VocabularyCard clude={src}></VocabularyCard>
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
               "bg-white -z-10 shadow-sm shadow-gray-500/10 border-[1px] "
            +" border-gray-200 rounded tracking-wide 2xl:mt-3 md:px-2 md:py-2 space-y-2 ": " " }>
             {renderQuestionHeader(questionType,item)}
            </div> : <></>
          }
          </>
            
        )
}