import React from "react";


function Banner({img,title,desc}){
return <>
<img className="object-cover w-80 h-52" src={img}/>
                <div className="space-y-2">
                <h1 className="text-[20px] font-bold">{title}</h1>
                <p className="text-[16px]">{desc} </p>
                </div>

</>
}

export default Banner