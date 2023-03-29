import React from "react";



export default function Container ({children,style}){
    return <div className= { `${style ? "bg-purple-50" :  "bg-gray-50"} min-h-screen
    box-border font-inter tracking-normal relative`}>

{children}

    </div>
}