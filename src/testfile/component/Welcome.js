import React,{useState} from "react";
import Icon from "../../components/Icon";
import { BiFile } from "react-icons/bi";
import GroupInput from "../../components/GroupInput";
import { useDispatch } from "react-redux";
import { questionAction } from "../../redux/questionSlice";



const examRoule = [
    "Make sure that you are prepared for the exam",
  "You will not be allowed to leave the exam room during the exam.",
    " An exam is a race against time, try to be quick, but careful",
   "If you have any difficulty with the exam, raise your hand and wait for the invigilator to respond",
   "Only the equipment which is necessary for the exam should be kept on the desk.",
   "Keep silent during exams.",
    " Be careful that you mark multiple choice answers properly. Incorrect entries may lose you marks.",
    "If you have time when you finish the exam, check your answers.",
    "If you have finished the exam in time and wait. Do not disturb others",
    "When the exam ends the invigilator calls “TIMEIS OVER. Submit Your Task or Exam”. Please Submit all your Answer immediately and wait.",
   " Leave the class quietly and do not loiter in front of the class",


]

export default function Welcome (){
    const [ableBtn,setAbleBtn] = useState(false)
    const dispatch = useDispatch()




    return  <section className=" max-w-2xl mx-6 p-4 md:mx-auto bg-white border border-gray-200 dark:bg-gray-800 
    left-0 right-0 top absolute top-10 dark:border-gray-700 rounded">
       <div className="flex py-2 items-center ">
       <Icon name={<BiFile/>} Size="1.5rem" color="purple"/>
       <h2 className="font-semibold text-[16px] mx-2 text-gray-800 md:text-[24px] dark:text-white font-ubuntu">Welcom to examination</h2>
       </div>
       <span>
    <p className="md:mt-2 mt-1 text-sm text-gray-900 dark:text-gray-300">
    Failure to obey any of the following
     rules may result in your exam being removed and disciplinary <br></br>
    <button>
       <h1 className="font-semibold text-gray-800 mt-4
        md:text-purple-800 md:text-[16px] text-[14px]">
        Action taken against you</h1>
       </button>
       <span>
    <ol className="pl-5 grid border-[1px] border-dashed border-gray-400
     md:border-none rounded gap-2 mt-2 overflow-y-auto
      md:bg-purple-50 py-1.5 md:h-72 h-52 md  list-decimal list-inside">
    {
      <> {examRoule.map((i,index)=><li key={index} 
      className=" rounded-lg px-2 text-purple-900">{i}</li>)}</>
   
    }
    </ol>
    </span>      
        </p>
        </span>
        <hr className="my-5 hidden border-gray-400 dark:border-gray-700" />
    <div className="flex flex-col md:flex-row md:items-center w-full  justify-between mt-4 gap-x-4 shrink-0">
        <button className="text-[14px] transition-colors font-medium text-blue-800 duration-300
         dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
         <GroupInput event={()=> setAbleBtn(!ableBtn)} type="checkbox"
          Text="I comfirm that 
         i have read "></GroupInput>
        </button>

{
 ableBtn ? (
    <button onClick={()=> dispatch(questionAction.loaddingQuestion()) }
     className="rounded relative inline-flex group items-center
    justify-center px-4 w-32 py-2 m-1 cursor-pointer border-b-4 border-l-2
     active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr
      from-purple-600 to-purple-500 border-purple-700 text-white">
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full 
group-hover:w-32 md:group-hover:h-32 opacity-10"></span>
           Let's Go!
       </button>
 ) : (
    null
 )
}
    
      
    </div>
</section>
}