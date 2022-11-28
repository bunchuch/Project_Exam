import React from "react"

import "../LandingPage/Herosection/Hero.css"
import Navbar from "../Navbar/Navbar"
import ExmaHeader from "./header"
import Statusbar from "./statusbar"
import Answer from "./taskbox"
import QuestionCols from "./QuestionCols"



function ExamSide({data}) {
   return <>
   <Navbar></Navbar>
   <div className=" bg-white min-h-screen box-border font-inter tracking-normal">
      <div className="container mx-auto p-2  right-0 left-1">
         <div className="xl:flex xl:flex-cols justify-between  mx-2 my-2 md:max-lg:flex-col md:flex md:flex-row">
            {/*ExamSide*/}
            <div className="w-full px-2">
               {/* header */}
              <ExmaHeader title="Vocalulary" type="Multiple Chocie" grade="English "></ExmaHeader>
               <QuestionCols/>
            </div>
            <div className=" w-full basis-1/3 sm:order-2  border-gray-200 
             rounded-[5px] h-[50%] overflow-auto trackig-normal mx-2 space-y-2">
               <Statusbar></Statusbar>
            </div>
           
            {/* selction Status */}
         </div>
      </div>
   </div>
</>
}



   
    export default ExamSide