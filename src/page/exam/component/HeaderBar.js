import React, { useState } from "react";
import {BiLibrary,BiCategoryAlt ,BiUserVoice, BiBookOpen,BiFontColor} from "react-icons/bi";
import {TbWriting} from "react-icons/tb"
import {  BrowserRouter as Router,  Route,  Link,  useParams,  useRouteMatch,  Outlet} from "react-router-dom";

import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";





//headerlist-tag-list each items-function-components
function HeaderList ({icon,title,link,value}){
    return <>
       <li value={value} className="headerlist-style">
            <Link to={link} >
             <a href="#" className="atagheaderlist-style">
                   <div className="hidden md:flex">
                      {icon}
                    </div>
                    <div>{title}</div>
                      </a></Link>
            </li>
    </>
}


//main Header exam bar 
export default function HeaderBar () {


    const [count,setCount] = useState(0)


    return <div className="headerbar-main-style">
             <ul class="ultag-headerbar-style">
              <div className="divtag-hearlist-style">
              <HeaderList value="listening" link="listening" 
              icon={ <Icon Size="1.2rem" name={<BiUserVoice/>}></Icon>} title="Listening"/>
              <HeaderList 
              icon ={ <Icon Size="1.2rem" name={<BiFontColor/>}></Icon>} title="Vocabulary"/>
              <HeaderList 
              icon={ <Icon Size="1.2rem" name={<BiLibrary/>}></Icon>} title="Grammer"/>
              <HeaderList
              icon= {<Icon Size="1.2rem" name={<BiBookOpen/>}></Icon>} title="Reading"/>
              <HeaderList value="writing" link="writing"
              icon= {<Icon Size="1.2rem" name={<TbWriting/>}></Icon>} title="Writing"/>
                  </div>
     
        </ul>
    </div>
  }


  


  //droplink of question type

