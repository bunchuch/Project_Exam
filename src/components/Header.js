import React from "react";
import Icon from "./Icon";


export default function Header({text, icons}){
        return <h1 className="text-[14px] font-medium
          flex items-center gap-2">
             <Icon Size={"1.2rem"} name={icons} />
            {text}</h1>
}