import { useEffect } from "react";


export default function Container ({children,style,Log}){
    


    return <div  className= { `bg-white mt-5
    box-border container mx-auto ${Log  ? "top-1" : "top-0"} 
   font-ubuntu tracking-normal  lg:px-0`}>
            {children}
    </div>
}