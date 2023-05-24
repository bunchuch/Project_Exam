import React from "react";
import Icon from "./Icon";

export const Card = ({title,icons, desc, chilren, textSize}) => {
    return <div>
    <span className="inline-block p-2 text-blue-500 bg-blue-100
      rounded-xl  dark:text-white dark:bg-blue-500">
        <Icon name={icons} Size="1.5rem" color="purple"></Icon>
     </span>
 
     <div>
         <h1 className={`${ textSize ? textSize : "text-xl"} font-semibold text-gray-700 dark:text-white`}>{title}</h1>
 
         <p className="mt-2 text-md text-gray-500 dark:text-gray-300">
            {desc}
         </p>
         {
            chilren ? <p className="text-purple-900 py-2 font-medium">{chilren}</p> : null
         }
     </div>
 </div>
    
}
