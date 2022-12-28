import React from "react";


const Description = ({header,desc})=>{
    return  <div className="px-4 py-4 w-full rounded-[4px] border-[1px] bg-white space-y-4 ">
    <h1 className="font-medium">{header}
    </h1>
    <p className="text-[14px]">{desc}</p>
</div>

}


export default Description