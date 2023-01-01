import {useState} from "react";
import { BiCategoryAlt,BiChevronDown,} from "react-icons/bi"
import {Link} from "react-router-dom"
import Icon from "../components/Icon"

function DropdownList ({name,target_url}){
    return  <>
      <li><Link to={target_url}>  <button type="button" className="dropList-Link-style">
                   <div class="inline-flex items-center">
                    {name}
                   </div>
               </button>
               </Link>
           </li>
   </>
     }

export default function Dropdown ({name,icon}){
    const [dropdown, setDropdown] = useState(false)
 const handleOnclick = ()=>{
       setDropdown(!dropdown)
 }
     return <div className="tracking-wider">
      <button onClick={handleOnclick} id="states-button" 
      data-dropdown-toggle="dropdown-states"
       className="buttondropdown " type="button">
             <div className="buttondropdown-flex-style">
           {icon} <div>
             {name}
                 </div>  <Icon Size="1.2rem" name={<BiChevronDown/>}/>
             </div>
     </button>
   {
     dropdown ? (<>
      <div id="dropdown-states" className="dropdownpanel-style">
     <ul class="dropdownlist-style" aria-labelledby="states-button">
        <div className="text-start px-2 font-base text-[12px]">
     <h1 className="">List of exam</h1>
     </div>
   <DropdownList name="📃 Mulitple Choice" target_url="/main"></DropdownList>
   <DropdownList name="📰 Fill in the blank"></DropdownList>
   <DropdownList name="📜 Matching Word"></DropdownList>
   </ul>
 </div>
     </>):
         (<></>)
     }
     </div>
}