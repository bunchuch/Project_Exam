import React, { useState } from "react";
import { ReadingCard } from "../../components/ReadingCard";
import {Audio} from "../../components/Audio"
import "../../style/style.css"
import Writing from "../../components/Writing";
import FillBlanks from "../../components/FillBlank";
import {VocabularyCard} from "../../components/VocabularyCard"
import { Input } from "../../components/Input";
const renderQuestionHeader =  (result,item) =>{
  const items =  {...item}
  const {src ,type,header} = items

  if(result === "LISTENING"){
    return <Audio audio={src}  />
  }
  if(result === 'READING'){
    return <ReadingCard  header={header} type={type} sentence={ src }/>
  }
  // if(result === "WRITING"){
  //   return <h1 className="px-5 py-2">
  //     <p className="text-md tracking-wide font-semibold py-2">
  //       📑
  //       choose topic below</p>
  //     {src.map((i,key)=> <p
  //     className="mx-3 tracking-wide text-slate-800"
  //     key={key}> {key+1} - {i}  </p>)}</h1>
  // }
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

export default function QuestionBox ({item, categorie}) {

console.log(item ? " " :item.question.map((i)=> i.file.src.map((value)=> value)))
console.log(categorie.type)
    
  return (
    <div className="w-full gap-4 flex md:flex-row flex-col  h-[100%] ">  

    <div className="bg-white w-full basis-[30%] rounded-xl overflow-y-auto h-[100%]
    shadow-md shadow-slate-200 border-[1px] border-gray-200 p-7">
       <p className="font-sans font-semibold text-xl space-y-4">
        {categorie.type === "Blank" ? <div>
        <p>Fill in the Blank</p>
        <VocabularyCard src={["Dra","dara","border","dred","shadow-md","bg-gary-200"]}/>
        </div>  : <>
      
        <p>Q . Why do introvert adn extroverts react so differently? </p>
     {/* <Audio audioSrc={"https://www.123listening.com/freeaudio/adjectives1-1.mp3"}/> */}
     <ReadingCard sentence={"https://www.ieltsjacky.com/images/MatchingInformationCarsText.jpg"} type="image"/>
         </>
        
       }</p>
     
              
   </div>
   <div className="bg-white w-full basis-[70%] p-4 overflow-y-auto h-[100%] rounded-xl 
    shadow-md shadow-slate-200 border-[1px] border-gray-200">
      {
       categorie.type === "writing" && <Writing/>
      }
      {
        categorie.type == "MQC" && <div className="w-full relative">
          <Input type="checkbox" Text="had be born/ would have "/>
          <Input type="checkbox" Text="had taken/would not have"/>
          <Input type="checkbox" Text="had taken/would not have"/>
          <Input type="checkbox" Text="had taken/would not have"/>
          <Input type="checkbox" Text="had taken/would not have"/>
        </div>
      }
      {
        categorie.type === "Blank" && <FillBlanks/>
      }
 
     


   </div>

  </div> 
            
        )
}