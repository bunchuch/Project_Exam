import { Link } from "react-router-dom"
import { ProgressBar } from "./progressBar"
import Icon from "../../../components/Icon"
import { CiChat2, CiCircleQuestion, CiEdit,
   CiHeadphones, CiText, CiViewList } 
   from "react-icons/ci"



export function QuizCard ({title,desc,event,number,link,progressPercentage}){
  const names = title.toUpperCase()
  
  
  const renderIcon = (name)=>{
    if (names === 'READING')   { 
      return <CiViewList/> 
    }
    else if(names == "WRITING"){
        return <CiEdit/>
    }else if(names === "VOCABULARY"){
      return <CiText/>
    }else if (names === "GRAMMER"){
      return  <CiChat2/>
    }else if (names === "LISTENNING"){
      return <CiHeadphones/>
    }
    else{
      return <CiCircleQuestion/>
    }
 

  }


const renderColorBg = (title)=>{

const names = title.toUpperCase()

  if (names === 'READING')   { 
    return "bg-gradient-to-r from-[#745fb5]  to-[#9a6dbb] text-white"
  }
  else if(names == "WRITING"){
      return  "bg-gradient-to-r from-[#f43f5e] to-[#fb7185] text-white"
  }else if(names === "VOCABULARY"){
    return "bg-gradient-to-r from-[#0891b2] to-[#0e7490] text-white"
  }else if (names === "GRAMMER"){
    return  "bg-gradient-to-r from-[#ec4899] to-[#fb7185] text-white"
  }else if (names === "READING"){
    return  "bg-gradient-to-r from-[#14af83] to-[#15b89a] text-white"
  }else if (names === "LISTENNING"){
    return  "bg-gradient-to-r from-[#14af83] to-[#15b89a] text-white"
  }
  else{
    return "bg-gradient-to-r from-[#0d9488]  to-[#0f766e] text-white "
  }


}




    return <Link to={`/exam/${link}`}>
    <div className={`min-w-full min-h-fit  overflow-hidden
      `}>
    <div className={`md:px-6 px-4 py-4  md:py-6  2xl:space-y-4 
     ${renderColorBg(title)} rounded-lg border-y-[1px] border-x-[1px] 
      hover:bg-gradient-to-b hover:from-gray-400 hover:to-gray-800 hover:z-10 `}>
        <div className={ "rounded-full pb-1.5 mt-3  "}>
           <div className="flex justify-center items-center">
            <div className=" w-10 h-10 lg:w-[4rem] lg:h-[4rem] 2xl:w-[6rem] 2xl:h-[6rem] ">
            <Icon color="white" name={ title ? renderIcon(title) : null} ></Icon>
            </div>
         
           </div>
           <div className="">
              <h1 className="md:text-xl text-center mt-4 tracking-wide  font-roboto
         t">{title}</h1>
       </div>
        </div>
       <div className="divide-x flex justify-center mt-4">
       <div className="bg-gray-50 
        text-slate-900 text-center px-2 rounded-l-full flex">
       <h1 className=" text-gray-900">{number}</h1>
       </div>
       <div className="bg-gray-100 flex items-center">
       <h1 className="px-2 2xl:text-[18px] font-roboto  
             tracking-wider 
             text-[14px]">{desc}</h1>
       </div>
       <div className="bg-gray-50 flex items-center rounded-r-full -mx-1">
       <h1 className="px-2 2xl:text-[18px] font-roboto  
             tracking-wider text-gray-900
             text-[14px]">{0}%</h1>
       </div>
      
       </div>
      
      
      
    </div>
      
  </div>
    </Link>
    
    
  }