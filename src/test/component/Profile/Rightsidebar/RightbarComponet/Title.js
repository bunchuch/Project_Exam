import React from "react";


export default 
function Title({ text }) {
    return (<div className="py-3 mt-2">
        <h1 className="line-none text-[16] font-semibold  md:font-normal md:text-[14px]">{text}</h1>
    </div>);

}