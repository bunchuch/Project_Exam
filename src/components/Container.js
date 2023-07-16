import { useEffect } from "react";


export default function Container ({children,style,Log}){
    


    return <div  className= { `${style ? "bg-purple-50" :  "bg-purple-50"} 
    box-border ${Log  ? "top-14" : "top-0"} md:min-h-screen h-auto font-inter tracking-normal relative lg:px-0 md:px-2`}>
            {children}
    </div>
}