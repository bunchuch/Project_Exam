import Icon from "../../components/Icon"
import { Link } from "react-router-dom"
import {  BiCategoryAlt } from "react-icons/bi"
import {FaRegQuestionCircle} from "react-icons/fa"
import { ProgressBar } from "./progressBar"
import { useSelector } from "react-redux"


export function QuizCard ({title,desc,event,number,link,progressPercentage}){
  const titles = title.toUpperCase()
  const renderColor = (name)=>{
    if (name === 'READING')   { return `bg-purple-400`}
    if(name=== 'WRITING')   { return `bg-red-400 `}
    if(name=== 'GRAMMER')     { return `bg-green-400`}
    if(name=== 'VOCABULARY')  {  return `bg-yellow-200`}
    if(name=== 'LISTENING')  { return `bg-blue-400`}

  }
    return <div class="w-full mx-auto overflow-hidden bg-white rounded shadow-lg">
    <div class="md:px-6 px-4 py-4">
        <h1 class="text-xl tracking-wider font-semibold font-ubuntu text-gray-800">{title}</h1>
        <div className={"flex items-center rounded-full pb-1.5 mt-4 text-gray-700 "}>
           <div className="w-5 h-5">
            <Icon color="purple" name={<FaRegQuestionCircle/>} ></Icon>
           </div>
            <p className="px-2 text-sm"><span className="font-medium">{number}</span></p>
        </div>
        <div className="py-4"> <ProgressBar progressPercentage={progressPercentage}></ProgressBar></div>
      
        <div class="flex md:flex-row md:items-center
         space-y-3 md:space-y-0 flex-col justify-between mt-3
          text-gray-700 ">
          <div className="flex items-center py-1.5">
          <div className="w-6 h-6">
            <Icon color="purple"  name={<BiCategoryAlt/>} ></Icon>
           </div>
            <h1 class="px-2 font-mono tracking-wider font-bold text-[14px]">{desc}</h1>
          </div>
  
          <Link to={link}>
        <a onClick={event}
          href="" className="px-4 text-white
           bg-purple-800 border-purple-500
           rounded before:text-blue-400
           after:text-blue-400 active:undeline  active:after:text-red-400 py-1.5 
           text-center  font-medium  hover:bg-purple-700
             font-roboto tracking-wider
           text-sm">
  Start 
  </a>
  </Link>
       </div>
  
        <div className="flex items-center mt-4 text-gray-700 ">
           
        </div>
    </div>
       <div className ={` w-full h-[7px] ${renderColor(titles)}`}></div>
  </div>
  }