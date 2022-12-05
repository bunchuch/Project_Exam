import React from "react"
import Navbar from "../Navbar/Navbar"
import ExamStatus from "./component/ExamStatus"
import QuestionBox from "./component/QuestionBox"



function ExamSide({data}) {
   return <>
   <Navbar></Navbar>
   <div className=" bg-white min-h-screen box-border font-inter tracking-normal">
      <div className="container mx-auto p-2  right-0 left-1">
         <div className="xl:flex xl:flex-cols justify-between 
          mx-2 my-2 md:max-lg:flex-col md:flex md:flex-row">
          
            <div className="w-full px-2">
            <QuestionBox isNone={false}></QuestionBox>
               {/* header */}
            </div>
            <div className=" w-full basis-1/3 sm:order-2  border-gray-200 raletive
             rounded-[5px] h-[50%] overflow-auto trackig-normal mx-2 space-y-2">
              <ExamStatus ></ExamStatus>
            </div>
           
            {/* selction Status */}
         </div>
      </div>
   </div>
</>
}



   
    export default ExamSide