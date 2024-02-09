import React from "react";
import Icon from "./Icon";
import {CiUser} from "react-icons/ci"


export default function Avatar({image , name}){
    return <>
    {
        image ?    <img class="w-10 h-10 rounded-full" src={image} alt="Rounded avatar"/> :
        <div class="relative inline-flex items-center justify-center
         w-8 h-8 p-2 overflow-hidden bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full ">
    <span class="font-medium text-gray-600 ">{name ? name.slice(0 ,2).toUpperCase() : 
    <Icon Size={"1.5rem"} name={<CiUser/>}/>
    
    }</span>
</div>

    }
 
    </>    
}

