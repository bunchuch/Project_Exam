import {useState} from "react";
import { BiCategoryAlt,BiChevronDown, BiX,} from "react-icons/bi"
import {Link} from "react-router-dom"
import Icon from "../components/Icon"

function DropdownList ({name,target_url}){
    return <li><Link to={`/${target_url}`}>  <button type="button" 
    className="block px-4 py-[5px]  text-sm text-gray-600 capitalize transition-colors duration-300 
    transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                   <div class="inline-flex items-center">
                    {name}
                   </div>
               </button>
               </Link>
           </li>
     }

export default function Dropdown ({name,icon,list}){
    const [dropdown, setDropdown] = useState(false)
 const handleOnclick = ()=>{
       setDropdown(!dropdown)
 }
     return <div className="tracking-wider  inline-block">
      <button onClick={handleOnclick} id="states-button" 
      data-dropdown-toggle="dropdown-states"
       className="buttondropdown " type="button">
             <div className="buttondropdown-flex-style">
             {name}
             </div>
     </button>
   {
     dropdown ? (<>
      <div className="absolute right-4 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right
      bg-white rounded-md shadow-xl dark:bg-gray-800 transition ease-out duration-100" >
        <div className="flex justify-end  w-full">
          <button onClick={()=> setDropdown(false)} className="p-2">
          <Icon name={<BiX/>} Size="1.2rem" color="purple"></Icon>
          </button>
        
        </div>
     <ul className="" aria-labelledby="states-button">
 {
  list.map((value)=>
  <DropdownList name={value} target_url={value}/>
  )
 }
   </ul>
 </div>
     </>):
         (<></>)
     }
     </div>
}