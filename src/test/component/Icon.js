import React from "react";
import { IconContext } from "react-icons/lib";


export default function Icon ({name}){

    return<>
    <IconContext.Provider value={{color:"#6b7280",size:"1.2rem"}}>
     {name}
    </IconContext.Provider>
    </>

}