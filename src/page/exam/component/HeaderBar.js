import React, { useEffect, useState } from "react";
import {BiLibrary,BiUserVoice, BiBookOpen,BiFontColor} from "react-icons/bi";
import {IoBriefcaseOutline} from "react-icons/io5"
import {TbWriting} from "react-icons/tb"
import {Link} from "react-router-dom";
import Icon from "../../../components/Icon";






//headerlist-tag-list each items-function-components
function HeaderList ({icon,title,link,onClick}){
    return <>
       <button onClick={onClick}  className="headerlist-style">
            <Link to={`/exam/${link}`} >
             <p className="atagheaderlist-style">
                   <div className="hidden md:block">
                      {icon}
                    </div>
                    <div className=" md:block">{title}</div>
                      </p></Link>
            </button>
    </>
}


//main Header exam bar 
export default function HeaderBar ({onClick}) {

    const [stickyClass, setStickyClass] = useState('headerbar-main-style relative')

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
              <HeaderList link="listening" 
              icon={ <Icon Size="1.2rem" color="#591c87" name={<BiUserVoice/>}></Icon>} onClick={onClick}  title="Listening"/>
              <HeaderList 
              icon ={ <Icon Size="1.2rem" color="#591c87" name={<BiFontColor/>}></Icon>} onClick={onClick}   link="vocabulary"  title="Vocabulary"/>
              <HeaderList 
              icon={ <Icon Size="1.2rem" color="#591c87" name={<BiLibrary/>}></Icon>} onClick={onClick}  link="grammar" title="Grammer"/>
              <HeaderList
              icon= {<Icon Size="1.2rem" color="#591c87" name={<BiBookOpen/>}></Icon>} onClick={onClick}   link="reading" title="Reading"/>
              <HeaderList value="writing" link="writing"
              icon= {<Icon Size="1.2rem" color="#591c87" name={<TbWriting/>}></Icon>}    title="Writing"/>
                  </div>
                
     
        </ul>
        <div className="order-last cursor-not-allowed mt-2 md:mt-0 border-none flex items-center justify-center my-2 md:my-0 ">
                    <HeaderList value="Levle" title="Level" icon={<Icon Size="1.2rem" color ="#591c87" 
                    name={<IoBriefcaseOutline/>}/>} ></HeaderList>
                  </div>
        
    </div>
  }


  




