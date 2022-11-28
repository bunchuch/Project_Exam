import React from "react";


export default 
function Title({ text }) {
    return (<div className="py-3 mt-5">
        <h1 className="font-medium text-[16px]">{text}</h1>
    </div>);

}