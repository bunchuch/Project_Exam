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

export default function Dropdown ({name,icon,list}){
    const [dropdown, setDropdown] = useState(false)
 const handleOnclick = ()=>{
       setDropdown(!dropdown)
 }
     return <div className="tracking-wider">
      <button onClick={handleOnclick} id="states-button" 
      data-dropdown-toggle="dropdown-states"
       className="buttondropdown " type="button">
             <div className="buttondropdown-flex-style">
             {name}
             </div>
     </button>
   {
     dropdown ? (<>
      <div id="dropdown-states" >
     <ul class="absolute right-4 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800" aria-labelledby="states-button">
 {
  list.map((value)=>
  <DropdownList name={value}/>
  )
 }
   </ul>
 </div>
     </>):
         (<></>)
     }
     </div>
}