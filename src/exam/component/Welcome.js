import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadding } from "../../redux/apicall";
import { examRule } from "../../data/data";



export default function Welcome (){
    const [ableBtn,setAbleBtn] = useState(false)
    const dispatch = useDispatch()
    const loaddings = useSelector((state)=> state.quizs)

  
    return  <section className="relative 2xl:top-[10rem] md:top-[4rem]
   sm:top-[4rem] top-[9rem]
    flex justify-center items-center mx-3 p-4 md:mx-auto">
      <div>
      <div className="bg-white rounded-xl
          max-w-sm md:mx-auto px-4 py-7
           font-sans shadow-md shadow-gray-100 ">
       <h2 className="text-[18px] tracking-wide font-sans 
       text-center font-bold text-gray-800 md:text-[28px]">
       &#128209; Examinations Rule</h2>
       
       <span>
       <span>
    <ul className="pl-5 grid 
      py-1.5 mt-3 ">
    {
      <> {examRule.map((i,index)=><li key={i.id} 
      className=" flex items-center ">
         <div className="bg-yellow-300 text-center rounded-full flex justify-center
          font-semibold items-center w-7 h-7">
            <p className="text-[16px] p-4">{index+1}</p>
         </div>
      
         <p className="md:text-[16px] text-sm  text-slate-800 my-2 2xl:my-3 md:mx-4 mx-2 font-sans">
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
     cursor-pointer bg-yellow-400 text-slate-900 tracking-wide font-semibold
      active:bg-yellow-200 active:shadow-none">
          Got it!
       </button>
    </div>
  
    </div>
    <div 
            className="login-section-bg rounded-br-xl
             rounded-bl-xl bg-yellow-800 py-2 w-full">

</div>
      </div>
      
    
</section>
}