import React from "react";

export default function Tooltip ({children,tooltip ,right,top,bottom}) {
    return (
        <div className="group relative ">
        {children}
        <span className={`absolute top-10 ${ right ? "right-3" : " "} ${top ? "top-4": " "} scale-0 transition-all rounded
         bg-gray-800 p-2 text-xs text-white group-hover:scale-100`}>{tooltip}</span>
      </div>


    )
}