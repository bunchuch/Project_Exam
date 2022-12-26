import React from "react"
import SmallFooter from "../Footer/smallFooter"
import Navbar from "../Navbar/Navbar"
import ExamStatus from "./component/ExamStatus"
import HeaderBar from "./component/HeaderBar"
import QuestionBox from "./component/QuestionBox"



function ExamSide({data}) {
   return <>
   <Navbar></Navbar>
   <div className="bg-gray-50 min-h-screen box-border font-inter tracking-normal">
   <HeaderBar></HeaderBar>
      <div className=" mx-auto p-2 md:max-w-[70rem] sm:max-w-xl">
         <div className="flex flex-col mt-5"> 
         <div className="border rounded-[4px] bg-white">
               <ExamStatus></ExamStatus>
         </div>
               
            <QuestionBox></QuestionBox>
               {/* header */}

              
           
           
           
            {/* selction Status */}
         </div>
         <SmallFooter></SmallFooter>
      </div>
   </div>
</>
}



   
    export default ExamSide