import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"
import SmallFooter from "../Footer/smallFooter"
import Navbar from "../Navbar/Navbar"
import ExamStatus from "./component/ExamStatus"
import HeaderBar from "./component/HeaderBar"
import QuestionBox from "./component/QuestionBox"




function ExamSide({data}) {

   const [hide,setHide] = useState("-order-1 md:order-last md:mt-12 md:mx-2  md:w-[20rem]")

   const handleClickHide =()=>{
      setHide("-order-1 md:order-last md:mt-12 md:mx-2  md:w-[20rem] hidden")
   }
   return <>
   <Navbar></Navbar>
   <div className="bg-gray-50 min-h-screen box-border font-inter tracking-normal">
         <div className="md:border rounded-[4px] md:bg-white ">
            
             <div className="max-w-[70rem] mt-3 px-2 md:px-0 md:mt-0 mx-auto md:max-w-0">
             </div>
              
         </div>
      <div className=" mx-auto p-2 md:max-w-[70rem] sm:max-w-xl">
      <HeaderBar></HeaderBar>
      <div className="flex">
      <QuestionBox></QuestionBox>
      <div className="w-[460px] mx-4">
      <ExamStatus></ExamStatus>
      </div>
      
      </div>
         
         <SmallFooter></SmallFooter>
         </div>
         
       
            
               {/* header */}
              

            {/* selction Status */}
         
   </div>
</>
}



   
    export default ExamSide