import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"
import SmallFooter from "../Footer/smallFooter"
import Navbar from "../Navbar/Navbar"
import ExamStatus from "./component/ExamStatus"
import HeaderBar from "./component/HeaderBar"
import QuestionBox from "./component/QuestionBox"
import Rule from "./component/Rule"



function ExamSide({data}) {

   const [hide,setHide] = useState("-order-1 md:order-last md:mt-12 md:mx-2  md:w-[20rem]")

   const handleClickHide =()=>{
      setHide("-order-1 md:order-last md:mt-12 md:mx-2  md:w-[20rem] hidden")
   }
   return <>
   <Navbar></Navbar>
   <div className="bg-gray-50 min-h-screen box-border font-inter tracking-normal">
         <div className="md:border rounded-[4px] md:bg-white ">
             <HeaderBar></HeaderBar>
             <div className="max-w-[70rem] mt-3 px-2 md:px-0 md:mt-0 mx-auto md:max-w-0">
             <ExamStatus></ExamStatus>
             </div>
              
         </div>
      <div className=" mx-auto p-2 md:max-w-[80rem] sm:max-w-xl">
         <div className="flex flex-col md:flex-row"> 
         <div cla></div>
         <div className="w-full">
         <QuestionBox></QuestionBox>
         <SmallFooter></SmallFooter>
         </div>
         
         <div className={hide}>
         <h1>Rule of examination</h1>
         <div className=" border-dashed border-[1px] rounded-[4px] md:mx-2 font-base text-base px-2 py-2 relative ">
             <ol type="1" className="text-[14px] font-ubuntu">
               <li>Try to do your task</li>
               <li>Do not talking in exam tione</li>
               <li>Make sure your submit all the task</li>
             </ol>
             <div className="px-2 absolute top-0 right-0">
             <button onClick={handleClickHide}
             >x</button>
             </div>
            
            </div>
          
         </div>
            
               {/* header */}
              

            {/* selction Status */}
         </div>
        
      </div>
   </div>
</>
}



   
    export default ExamSide