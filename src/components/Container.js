import { useEffect } from "react";


export default function Container ({children,style,Log}){
    


    return <div  className= { `${style ? "bg-white" :  "bg-gray-50"} 
    box-border ${Log  ? "top-14" : "top-0"} h-screen relative font-inter tracking-normal  lg:px-0`}>
            {children}
    </div>
}