import React, { useEffect, useState } from "react";
import {BiLibrary,BiBarChartAlt ,BiUserVoice, BiBookOpen,BiFontColor} from "react-icons/bi";
import {TbWriting} from "react-icons/tb"
import {  BrowserRouter as Router,  Route,  Link,  useParams,  useRouteMatch,  Outlet} from "react-router-dom";

import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";
import Lisenting from "./Listening";





//headerlist-tag-list each items-function-components
function HeaderList ({icon,title,link,value}){
    return <>
       <li  onClick={(event)=>{console.log(value)}} className="headerlist-style">
            <Link to={`/exam/${link}`} >
             <a href="#" className="atagheaderlist-style">
                   <div className="hidden md:block">
                      {icon}
                    </div>
                    <div className=" md:block">{title}</div>
                      </a></Link>
            </li>
    </>
}


//main Header exam bar 
export default function HeaderBar () {

    const [stickyClass, setStickyClass] = useState('headerbar-main-style relative')

    

    const [count,setCount] = useState(0)



    useEffect(()=>{
      window.addEventListener('scroll',stickNavbar)
      return ()=>{
        window.removeEventListener('scroll',stickNavbar)
      }
    },[])


    const stickNavbar = ()=>{
      if(window !== undefined){
        let windowHieght = window.scrollY
        windowHieght > 150 ? setStickyClass('top-0 z-10 my-10 flex sticky md:bg-gray-50 headerbar-main-style py-0 bg-white md:py-4') :
         setStickyClass("headerbar-main-style")
      }
    }

    return <div className={`${stickyClass}`}>
             <ul class="ultag-headerbar-style">
              <div className="divtag-hearlist-style">
              <HeaderList value="listening" link="listening" 
              icon={ <Icon Size="1.2rem" name={<BiUserVoice/>}></Icon>}  title="Listening"/>
              <HeaderList 
              icon ={ <Icon Size="1.2rem" name={<BiFontColor/>}></Icon>} value="vocabulary" link="vocabulary"  title="Vocabulary"/>
              <HeaderList 
              icon={ <Icon Size="1.2rem" name={<BiLibrary/>}></Icon>} value="grammar" link="grammar" title="Grammer"/>
              <HeaderList
              icon= {<Icon Size="1.2rem" name={<BiBookOpen/>}></Icon>} value="reading" link="reading" title="Reading"/>
              <HeaderList value="writing" link="writing"
              icon= {<Icon Size="1.2rem" name={<TbWriting/>}></Icon>}   title="Writing"/>
                  </div>
                
     
        </ul>
        <div className="order-last cursor-not-allowed mt-2 md:mt-0 border-none my-2 md:my-0">
                    <HeaderList value="Levle" title="Level" icon={<Icon Size="1.2rem" 
                    name={<BiBarChartAlt/>}/>} ></HeaderList>
                  </div>
        
    </div>
  }


  


  //droplink of question type

