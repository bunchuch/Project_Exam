import React from "react";



export default function Container ({children,style}){
    return <div className= { `${style ? "bg-purple-50" :  "bg-purple-50"} 
    box-border top-14 font-inter min-h-screen  tracking-normal relative lg:px-0 md:px-2`}>

{children}


    </div>
}