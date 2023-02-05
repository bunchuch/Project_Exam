import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadding } from "../../../redux/apicall";
import { examRule } from "../../../data/data";



export default function Welcome (){
    const [ableBtn,setAbleBtn] = useState(false)
    const dispatch = useDispatch()
    const loaddings = useSelector((state)=> state.quizs)

  
    return  <section className="relative top-6 md:top-6  sm:top-[3rem] 2xl:top-[4rem]
    flex justify-center items-center mx-3  md:mx-auto overflow-y-auto">
      <div className="bg-white rounded-lg border-[1px] border-neutral-200
         2xl:max-w-sm max-w-sm md:mx-auto px-4 py-7
           font-sans shadow-md shadow-gray-50 ">
       <h2 className="text-[18px] md:text-[20px] tracking-wide
       text-center font-bold text-gray-800 2xl:text-[28px]">
       &#128209; Examinations Rule</h2>
       
       <span>
       <span>
    <ul className="pl-5 grid
      py-1.5 mt-3 ">
    {
      <> {examRule.map((i,index)=><li key={i.id} 
      className=" flex items-center cursor-pointer ">
         <div className="bg-variation-500 text-center rounded-full flex justify-center
          font-semibold items-center w-7 h-7">
            <p className="text-[16px] p-4 text-white">{index+1}</p>
         </div>
      
         <p className="2xl:text-[16px] text-sm md:text-[16px]  text-slate-800 my-2 2xl:my-3 md:mx-4 mx-2 font-sans">
            {i.text}
            </p>  
         
         </li>)}</>
   
    }
    </ul>
    </span>      
        </span>
      
    <div className="w-full mt-4 px-4 ">

    <button onClick={()=> {dispatch(loadding())
    } }
     className="rounded-md w-full px-3 py-1.5  text-[14px] md:text-[18px] font-sans
     cursor-pointer bg-variation-500 text-white tracking-wide font-semibold
      active:bg-variation-400 active:shadow-none">
          Got it!
       </button>
    </div>
  
    </div>
      
</section>
}