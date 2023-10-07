import React from "react";
import Icon from "./Icon";

export const Card = ({title,icons, desc, chilren, textSize ,bgImage, color,hight }) => {
    return <div className={ bgImage ? "rounded-xl relative  text-white " 
    : " bg-login p-4 rounded-xl border-[1px]"}>
{bgImage ? <>  <div className="">
             <img 
            className={`object-cover rounded-xl w-full ${hight}  hover:scale-125 transition duration-500 cursor-pointer`}
            src={bgImage}></img> </div>   
            <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-xl font-medium z-20 top-0 text-blue-900 absolute ">{desc}</h3>
  </div>
             </> 
            : <> 
            {icons ? <span className="inline-block p-2 text-blue-500
          bg-gradient-to-bl from-red-200 to-yellow-300
      rounded-xl "> <Icon name={icons} Size="1.5rem" color="purple"></Icon> </span> : <></>}
            <div className={bgImage ? "" : ""}>
            <h1 className={`${ textSize ? textSize : "text-xl"} 
            font-semibold`}>{title}</h1>
    
            <p className="mt-2 text-[16px]  ">
               {desc}
            </p>
            {
               chilren ?
                <p className="text-purple-900 py-2 font-medium">{chilren}</p> : <></>
            }
       
           
        </div>
        </>
         }




    
 </div>
    
}
