import React from "react";
import { IconContext } from "react-icons/lib";


export default function Icon ({name,Size}){

    return<>
    <IconContext.Provider value={{color:"#6b7280",size:`${Size}`}}>
     {name}
    </IconContext.Provider>
    </>

}