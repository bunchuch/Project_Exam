import React, { useEffect, useState } from "react";
import Audio from "../../../components/Audio";
import GroupInput from "../../../components/GroupInput";
import FillBlanks from "./FillBlank/FillBlank"
import { ReadingCard } from "../../../components/ReadingCard";
import Writing from "./Writing";
import Stepper from "../../../components/Stepper";






export default function QuestionCard ({question, onChange, type}){
    
  
  const [questions, setQuestion] = useState([])
    // feature random question

 const shuffleArray = (array)=>{
  let i = array.length -1
  for(; i>0;i--){
    const j = Math.floor(Math.random()*(i+1))
    const temp = array[i];
    array[i] = array[j]
    array[j] = temp
  }

  return array

 }

//  random all the question but number is also random

    return (
     
        type === "writing" ? (
          <Writing/>
        ) : (
          <div>

            <Stepper/>
    {question.map((items,index)=><>
    {
      type === "listening" && (
        <Audio audio={items.audio} title="Adjitive Class Listening"/>
      
      )
    }
    {
      type === "reading" && (
       <ReadingCard sentence={items.text} header={items.header}/>
      )
    }
    {
      type === "vocabulary" && (
        <ul className="flex flex-wrap mt-1
         rounded-[4px] shadow-sm shadow-cyan-500/10 justify-center bg-white py-4  px-4 ">
        {
          items.clude.map((i)=>
          <div className="flex flex-row">
<p className="border-[1px] rounded-[4px] mx-2 my-2 py-2 px-2">{i}</p>
          </div>
      
        )
        }
        </ul>
      )

        
}

    {
      type === "grammar" && (
      <></>
      )
    }
    <div className="bg-white shadow-sm shadow-gray-500/10 rounded-[4px] tracking-wide mt-3">
      <div className="mx-2  px-4 py-4 space-y-2 ">
         <div className="space-y-2 flex items-center justify-between">
         <h1 className ="text-md trackgin-wide font-medium ">Question {index+1}</h1>
        </div>
          <div>
            {
             items.categories!== "multiple Chocice" ? <div className="hidden"></div> : 
             <p className="text-[14px] text-gray-800">{items.question}</p>
             
            }
       
      </div>
      {
         items.categories === "multiple Chocice" && (
             <div className="inline-flex flex-col ">
                {
                  
                  items.type === "checkbox" && (
                  items.clude.map((cludeItem)=><>
                      <GroupInput type={items.type} 
                      Text={cludeItem.choice}
                       name={cludeItem.choice} 
                       onChange={onChange} />
                      </>)
                  )
                }
                {
                  items.type === "radio" &&(
                     items.clude.map((itmesClude)=>
                     <>
                     <GroupInput 
                     key={items.clude.id*2}
                      type={items.type} 
                      Text={shuffleArray(itmesClude.choice)}/>
                      name={items.clude}
                     </>)
                  )
                }
             </div>
         )
      }
      {
          items.categories === "Fill in blank" && (
               <FillBlanks
                sentence={items.question}
                 clude={items.clude}
                 type={items.type}
                 onChange={onChange}
              
                
                 >
                 </FillBlanks>
            )
      }
   

      
     </div>
      </div>
    </>)}
   
    
    </div>
        )
        
      
    )
}