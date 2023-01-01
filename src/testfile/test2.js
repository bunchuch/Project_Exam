

import React, { useState } from "react";


export default function Test2(){

    const [name,setName] = useState({
        "fname" : "d",
        "lname" : "f",
    }
       )
 let answer = false
const update ={ 
"fname" :"dra",
"lname" : "tra"}
    return <>
    <p>
{
 answer?  name.fname+name.lname : setName({fname:"dara",lname:"Thida"})
    
 
}
    </p>

    <p></p>
    </>
}