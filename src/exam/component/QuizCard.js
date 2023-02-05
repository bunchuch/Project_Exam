import Icon from "../../components/Icon"
import { Link } from "react-router-dom"
import { ProgressBar } from "./progressBar"
import { FcFaq, FcList, FcQuestions, FcSurvey } from "react-icons/fc"


export function QuizCard ({title,desc,event,number,link,progressPercentage}){
  const titles = title.toUpperCase()
  const renderColor = (name)=>{
    if (name === 'READING')   { return `bg-purple-400`}
    if(name=== 'WRITING')   { return `bg-red-500 `}
    if(name=== 'GRAMMAR')     { return `bg-green-500`}
    if(name=== 'VOCABULARY')  {  return `bg-orange-400`}
    if(name=== 'LISTENING')  { return `bg-blue-400`}

  }
    return <div className={`w-full mx-auto overflow-hidden
     bg-white shadow-md  shadow-gray-100 rounded-xl border-[1px]`}>
    <div className="md:px-6 px-4 py-4 2xl:py-6 2xl:space-y-4">
        <h1 className="text-xl 2xl:text-[24px] tracking-wider font-semibold font-roboto
         text-gray-800">{title}</h1>
        <div className={"flex items-center rounded-full pb-1.5 mt-4 text-gray-700 "}>
           <div className="w-5 h-5 2xl:w-8 2xl:h-8">
            <Icon color="purple" name={<FcFaq/>} ></Icon>
           </div>
            <p className="px-2 text-sm 2xl:text-[20px]">
              <span className="font-medium">{number}</span></p>
        </div>
        <div className="py-4"> <ProgressBar
         progressPercentage={progressPercentage}></ProgressBar></div>
      
        <div className="flex md:flex-row md:items-center
         space-y-3 md:space-y-0 flex-col justify-between mt-3
          text-gray-700 ">
          <div className="flex items-center py-1.5">
          <div className="w-6 h-6 2xl:w-8 2xl:h-8">
            <Icon  name={<FcSurvey/>} ></Icon>
           </div>
            <h1 className="px-2 2xl:text-[18px]  
            font-mono tracking-wider
             font-bold text-[14px]">{desc}</h1>
          </div>
  
          <Link to={link}>
        <a onClick={event}
          href="#" className="px-4 border-[1px]
           bg-gray-100 text-purple-800 border-gray-200
           rounded-full before:text-blue-400 
           after:text-blue-400 active:undeline 
            active:after:text-red-400 py-1.5 
           text-center hover:bg-purple-100 hover:border-purple-200
             font-roboto tracking-wider
           text-sm">
  Go to the task
  </a>
  </Link>
       </div>
  
        <div className="flex items-center mt-4 text-gray-700 ">
           
        </div>
    </div>
       {/* <div className ={` w-full h-[7px] ${renderColor(titles)}`}></div> */}
  </div>
  }