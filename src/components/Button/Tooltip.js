import React from "react";

export default function Tooltip ({children,tooltip ,right,top,bottom}) {
    return (
        <div className="group relative ">
        {children}
        <span className={`absolute top-10 ${ right ? "right-3 w-full" : " "} ${top ? "top-4": " "} scale-0 transition-all rounded
         bg-white font-roboto p-2 text-xs text-slate-900 border group-hover:scale-100`}>📢{tooltip}</span>
      </div>


    )
}