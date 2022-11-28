import React, { useDebugValue } from "react";


const descArea = [{

    "id": "What we Serve?",
    "title" : "Discord is about giving people the power to create space to find belonging in their lives."+
                " We want to make it easier for you to talk regularly with the people you care about."
},

{
    "id": "What we do?",
    "title" : "Discord is about giving people the power to create space to find belonging in their lives."+
                " We want to make it easier for you to talk regularly with the people you care about."
}
]


function ColFour({img,title,desc}){
    return <>
                <div className="basis-1/2">
                <img className="object-fill w-112 h-auto mx-auto " src={img}/>
                </div>

                <div className="basis-1/2 text-start px-5 items-center py-10 space-y-6">

                    {descArea.map((value)=><>
                        <div className="space-y-2">
                        <DescriptionArea title ={value.id} desc={value.title}/>
                  </div>
                   
                    </>)}
                


                   
              

                </div>
            
    </>
}



    function DescriptionArea({title,desc}) {
      return (<div className="space-y-2 rounded-md">
                    <h1 className="text-[34px] font-bold">{title}</h1>
                <p className="text-[18px]"> {desc}</p>
                    </div>);
    }
  export default ColFour