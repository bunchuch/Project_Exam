
import React, { useState } from "react";



const ShowStatue = ({isStatus,text})=>{
    return <div>{
        isStatus?(
            <div className="bg-green-200 px-2 py-[2px]  text-[12px]
             text-center rounded-full font-semibold ">{text}</div>
        ):(
        <></>
        )
        }
 
    </div>
}


function Banner({img,title,desc,status,statusText,style}){



return <div className={style}>
<img className="object-cover w-48 h-32" src={img}/>
                <div className=" flex space-x-2 mt-10 items-center">
                <h1 className="text-[18px] tracking-wide font-bold">{title}</h1>
        <ShowStatue isStatus={status} text={statusText}></ShowStatue>
                
                </div>
                <div className="my-4">
                <p className="text-[16px]">{desc} </p>
                </div>

</div>
}

export default Banner