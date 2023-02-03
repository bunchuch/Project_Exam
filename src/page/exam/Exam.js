import React, { useEffect, useState } from "react"
import { BiHighlight } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, } from "react-router-dom"
import SmallFooter from "../../components/Footer/smallFooter"
import GroupInput from "../../components/GroupInput"
import Icon from "../../components/Icon"
import { questionAction } from "../../redux/questionSlice"
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
   const handleClickHide = () => {
      naviagtor(`/exam/listening`)
      setState(true)
   }


   return  <div className="bg-gray-50 min-h-screen
    box-border font-inter tracking-normal relative">

   {
      isState ?  (
         <TaskArea 
          />
       
      ):(
         //welcome exam componet
         <div className="tracking-wide relative">
         <div className=" max-w-xl  md:mx-auto mx-10  flex flex-col items-center 
   rounded-[4px] shadow-sm shadow-cyan-500/10 bg-white py-8 absolute top-20 right-0 left-0 ">
   <div className="bg-purple-100 rounded-full w-14 h-14 flex justify-center items-center">
       <Icon name={<BiHighlight/>} Size="2rem" color="#591c87"></Icon></div>
            <div className="space-y-2 py-1.5 px-2">
            <h1 className="font-medium text-[20px] text-center">Welcome to Exam </h1>
            <p className="font-base text-[14px] text-center
             text-gray-800">Every rule and policy have been
               do while you click on start buttom.
               <br></br> So please try to do you task do not
               be share any information to other people.
            </p>
            <hr></hr>
            <GroupInput type="checkbox" Text="I agreen with"/>
            </div>
           <div className="">
          
            <button className="bg-purple-900 px-4 mt-6 w-full
py-2 rounded-[4px] text-[14px] hover:bg-gradient-to-r
 hover:from-purple-700
 hover:to-purple-800 transition-all ease-out duration-300
font-medium text-white"  onClick={handleClickHide}>Start Now!</button>
           </div>
        
         
         </div>
      </div>
   
      )
   }
     
</div>
}




export default Exam