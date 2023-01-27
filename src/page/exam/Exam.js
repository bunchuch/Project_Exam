import React, { useState } from "react"
import { Outlet, useSearchParams } from "react-router-dom"
import SmallFooter from "../../components/Footer/smallFooter"
import ExamStatus from "./component/ExamStatus"
import HeaderBar from "./component/HeaderBar"
import QuestionBox from "./component/QuestionBox"





function Exam({data}) {

   const [hide,setHide] = useState("-order-1 md:order-last md:mt-12 md:mx-2  md:w-[20rem]")

   const handleClickHide =()=>{
      setHide("-order-1 md:order-last md:mt-12 md:mx-2  md:w-[20rem] hidden")
   }
   return <>
   <div className="bg-gray-50 min-h-screen box-border font-inter tracking-normal">
         <div className="md:border rounded-[4px] md:bg-white ">
            
   
              
         </div>
      <div className=" mx-auto p-2 md:max-w-[70rem] sm:max-w-xl">
      <HeaderBar></HeaderBar>
      <div className="flex lg:flex-row flex-col">
         <div className="w-full order-last md:order-1">
       <QuestionBox/>
         </div>
   
      <div className="lg:w-[460px] lg:order-last md:mx-4">
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



   
    export default Exam