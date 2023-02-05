import React from "react"

export const VocabularyCard = ({src}) =>{
    return  <div className=" font-roboto  my-4
     py-2 text-center md:text-base
     text-[12px]  rounded-xl">
        <ul className="font-medium flex flex-wrap  
                   text-purple-900 rounded-lg">
      {src.map((i,index)=><li draggable="true"
                  className="border-1 py-2 m-2 bg-purple-200 px-2 rounded-xl cursor-pointer">
        
        {index+1}. {i}
        </li>)}</ul>
    </div>
}