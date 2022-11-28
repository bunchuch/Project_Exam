import React from "react";
import Statuslist from "./statuslist";

const Statusbar = () =>{
    return <>
    <div className="py-[15px] px-3 rounded-[5px] 
 bg-white flex justify-between border-[1px]">
          <div className="flex items-center space-x-4">
 <div className="bg-yellow-200 px-2 text-green-600  rounded-full">1/6</div>
 <div className="items-center">
 <div className="w-32 lg:bg-blue-300 xl:bg-blue-300 sm:bg-black md:bg-yellow-200 bg-gray-300 rounded-md">
 <div className="w-10 rounded-md bg-blue-500 py-1"></div>
 </div>

 </div>

</div>
{/* processbar */}
{/* time */}
  <div className=" flex items-center space-x-2 text-blue-600 px-2 py-2 rounded-full">
    <img src="https://img.icons8.com/material/24/2D23A4/alarm-clock--v2.png" alt="timeicon"/>
       <p className="font-medium text-[18px]">45:00</p>
  </div>
       </div>
       
       <div className="bg-white border-[1px] rounded-[5px]">
       <div className="py-[15px] px-3 rounded-tr-sm 
       rounded-tl-sm border-b-[1px] mx-1 ">
          <h1 className="text-lg font-medium">Exam status</h1>
          <p className="text-[12px] font-normap text-gray-400">
             orem ipsum dolor sit amet, consectetur adipisicing elit.
          Porro beatae error laborum ab amet sunt recusandae? Reiciendis.</p>
       </div>

       <div className="px-4">
          <Statuslist header="Listening" title="01"></Statuslist>
          <Statuslist header="Writing" title="01"></Statuslist>
          <Statuslist header="Vocululary" title="01"></Statuslist>
          <Statuslist header="Reading" title="01"></Statuslist>
       </div>
       </div>
       </>
       
   

}

export default Statusbar