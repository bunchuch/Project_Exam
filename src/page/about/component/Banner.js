
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
                <div className=" flex flex-col  space-x-2 absoulte ">
                <h1 className="text-[40px]  drop-shadow-md font-teko left-0  tracking-wide font-bold">{title}</h1>  
                <img className="object-cover  md:w-[20rem] md:h-[20rem] rounded-full md:border-none border-[1px] w-[10rem] [h-10rem] -translate-y-4  -translate-x-1"  src={img}/>
                <p className="md:text-[20px] text-[18px] drop-shadow-md ">{desc} </p> 
                </div>
            

</div>
}

export default Banner