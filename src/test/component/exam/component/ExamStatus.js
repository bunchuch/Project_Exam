import React from "react";



function ExamStatus ({data}){
return<>
<div className="flex w-full flex-col space-y-4">
    {/* Exam Progress status */}
    <div className=" flex px-4 py-4 w-full bg-white border-[1px] flex-row justify-between items-center rounded-md">
        <div className="">Progress bar </div>
        <div className="">Progress bar </div>
        <div className="">Progress bar </div>
    </div>


{/*Exam status bar*/}
    <div className="border-[1px] rounded-md">
<div className=" border-b-[1px] mx-1 px-2 py-4">
<h1 className=" font-medium text-[16px]">Exam status</h1>
</div>
<div className="px-4 py-4 space-y-2">
   <button onClick={()=>alert("click on")}><h1 className="uppercase font-medium text-[14px]">Writing</h1></button>
    <div className="bg-gray-100 px-4 py-2 grid grid-cols-4 gap-4 rounded-md">
<button className="bg-white px-4 py-2 rounded-full">{1}</button>
    </div>
</div>







    </div>
</div>

</>
}


export default ExamStatus