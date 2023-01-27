import React, { useEffect, useState } from "react"
import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom"
import SmallFooter from "../../components/Footer/smallFooter"
import ExamStatus from "./component/ExamStatus"
import HeaderBar from "./component/HeaderBar"
import TaskArea from "./component/TaskArea"



function get_random(list) {
   return list[Math.floor((Math.random() * list.length))];
}




function Exam({ data }) {
   const [hide, setHide] = useState("-order-1 md:order-last md:mt-12 md:mx-2  md:w-[20rem]")
   const [isState, setState] = useState(false)
   const naviagtor = useNavigate()
   const [types, setTypes] = useState(["reading", "vocabulary", "grammar", "listening"])


   const handleClickHide = () => {
      naviagtor(`/exam/${get_random(types)}`)

      setState(true)
   }
   return <>
      <div className="bg-gray-50 min-h-screen box-border font-inter tracking-normal relative">
         <div className="bg-white">
            <div className="md:max-w[70rem] mx-auto py-2">
               <HeaderBar></HeaderBar>
            </div>

         </div>

         <div className=" mx-auto p-2 md:max-w-[70rem] sm:max-w-xl">


            {
               isState ? (
                  <>
                     <div className="flex lg:flex-row flex-col">
                        <div className="w-full order-last md:order-1">
                           <TaskArea />
                        </div>

                        <div className="lg:w-[460px] lg:order-last md:mx-4 relative">
                           <ExamStatus></ExamStatus>
                        </div>

                     </div>

                     <SmallFooter></SmallFooter>

                  </>
               ) : (
                  <div className="mt-8 tracking-wide">
                     <div className=" max-w-4xl pb-6 text-gray-700 mx-auto flex flex-col gap-4 items-center 
               rounded-[4px] shadow-sm shadow-cyan-500/10 bg-white py-4">
                        <h1 className="font-medium text-[28px] text-center ">Welcome to Exam </h1>
                        <p className="font-base text-[14px] text-center">Every rule and policy have been
                           do while you click on start buttom.
                           <br></br> So please try to do you task do not
                           be share any information to other people.
                        </p>
                        {/* <img className="w-40 object-contain"
                   src="https://cdni.iconscout.com/illustration/premium/thumb/graphic-designer-4322825-3649329.png" alt="greeting image"/> */}
                        <button className="bg-purple-900 px-4 w-28
          py-2 rounded-[4px] text-[14px] 
         font-medium text-white" onClick={handleClickHide}>Start Now!</button>

                     </div>
                  </div>
               )
            }

         </div>



         {/* header */}


         {/* selction Status */}

      </div>
   </>
}




export default Exam