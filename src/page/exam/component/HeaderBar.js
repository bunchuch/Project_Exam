import React, { useEffect, useState } from "react";
import {BiLibrary,BiUserVoice, BiBookOpen,BiFontColor} from "react-icons/bi";
import {IoBriefcaseOutline} from "react-icons/io5"
import {TbWriting} from "react-icons/tb"
import {Link} from "react-router-dom";
import {FaAssistiveListeningSystems} from  "react-icons/fa"
import {GoBook} from "react-icons/go"
import Icon from "../../../components/Icon";


//main Header exam bar 
export default function HeaderBar ({onClick}) {

  const [stickyClass, setStickyClass] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',stickNavbar)
    return ()=>{
      window.removeEventListener('scroll',stickNavbar)
    }
  },[])


  const stickNavbar = ()=>{
    if(window !== undefined){
      let windowHieght = window.scrollY
      let windinnerH = window.innerHeight
      windowHieght > -150 ? setStickyClass(true) :
       setStickyClass(false)
       console.log(windowHieght)
   
    }
  }


  return   <div className={stickyClass ? "top-0 z-10 sticky bg-purple-900 px-2 md:px-0 overflow-x-auto text-[14px] md:text-base" 
  : 'bg-purple-900 px-2 md:px-0 overflow-x-auto text-[14px] md:text-base relative'}>

     <div className="max-w[60rem] md:max-w-[70rem] text-white mx-auto py-2">
     <ul className=" md:max-w[70rem] mx-auto py-2" >
<div className="flex">
<button className="mx-3 ">
<Link to ="/exam/listening">
<div className="flex items-center space-x-2">
 <Icon name={<FaAssistiveListeningSystems/>} Size="1.2rem" color="white"/>
<p>Listening</p>
 </div>
 </Link> 
</button> 
<button className="mx-3 " >
<Link to="/exam/reading">
<div className="flex items-center space-x-2">
 <Icon name={<BiBookOpen/>} Size="1.2rem" color="white"/>
<p>Reading</p>
 </div>
</Link>
</button>
<button className="mx-3 ">
<Link to ="/exam/grammar">
<div className="flex items-center space-x-2">
 <Icon name={<BiFontColor/>} Size="1.2rem" color="white"/>
<p>Grammar</p>
 </div>
</Link>
</button>
<button className="mx-3 " >
<Link to="/exam/vocabulary">
<div className="flex items-center space-x-2">
 <Icon name={<GoBook/>} Size="1.2rem" color="white"/>
<p>vocabulary</p>
 </div>
</Link></button>
<button className="mx-3 ">  
<Link to="/exam/writing">
 <div className="flex items-center space-x-2">
 <Icon name={<TbWriting/>} Size="1.2rem" color="white"/>
<p>writing</p>
 </div>
 </Link>
</button>
</div>


</ul>
     </div>
     
  </div>
    
  }


  




