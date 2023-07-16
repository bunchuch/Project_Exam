import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadding } from "../../redux/apicall";
import { examRule } from "../../data/data";



export default function Welcome (){
    const [ableBtn,setAbleBtn] = useState(false)
    const dispatch = useDispatch()
    const loaddings = useSelector((state)=> state.quizs)

  
    return  <section className="relative 2xl:top-44 md:top-10
   top-[4rem]
    flex justify-center items-center mx-3 p-4 md:mx-auto">
         <div className="bg-white max-w-6xl md:mx-auto px-6 py-5 rounded shadow-md shadow-gray-100 ">
       <div className="flex py-2 items-center ">
       <h2 className="text-[16px] font-semibold text-gray-800 font-roboto md:text-[20px]">
       📝 Examinations</h2>
       </div>
       <span>
    <p className=" mt-1 text-sm text-gray-900 ">
       <h1 className="font-semibold text-gray-800 
        md:text-purple-800 md:text-[16px] text-[14px]">
        Action taken against you</h1>
       <span>
       Failure to obey any of the following
     rules may result in your exam being removed and disciplinary <br></br>
    <ol className="pl-5 grid border-[1px] border-dashed border-gray-400
     rounded gap-2 mt-2 overflow-y-auto
      py-1.5 md:h-72 h-52 md  list-decimal list-inside">
    {
      <> {examRule.map((i,index)=><li key={i.id} 
      className=" rounded-lg px-2 text-purple-900">{i.text}</li>)}</>
   
    }
    </ol>
    </span>      
        </p>
        </span>
        <hr className="my-5 hidden border-gray-400 " />
    <div className="flex flex-row items-center w-full  justify-between mt-4  shrink-0">
    <div class="flex">
    <input onChange={(e)=> setAbleBtn(!ableBtn)} id="default-checkbox" type="checkbox"
     value="" className="w-4 h-4 text-blue-600
     bg-gray-100 border-gray-300 rounded focus:ring-purple-500 
       focus:ring-2"/>
    <label for="default-checkbox"
     className={`ml-2 ${ ableBtn ?  "truncate md:w-full w-20" : "block"} 
     text-sm  text-gray-900 `}>I agree with the
   terms and conditions.</label>
</div>

{
 ableBtn ? (
    <button onClick={()=> {dispatch(loadding())
    } }
     className="rounded relative inline-flex group items-center
     justify-center px-3 py-1.5 text-[14px] font-roboto 
     cursor-pointer bg-purple-800 text-white
      active:bg-purple-600 active:shadow-none">
          Go to the Exam !
       </button>
 ) : (
    null
 )
}
    
      
    </div>
    </div>
</section>
}