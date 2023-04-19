import React from "react";



export default function Container ({children,style}){
    return <div className= { `${style ? "bg-purple-50" :  "bg-purple-50"} min-h-screen
    box-border font-inter tracking-normal relative lg:px-0 md:px-2`}>

{children}

    </div>
}