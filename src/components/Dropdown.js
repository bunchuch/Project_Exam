import {useState} from "react";
import { BiX, } from "react-icons/bi"
import {Link} from "react-router-dom"
import Icon from "../components/Icon"

function DropdownList ({name,target_url, icon ,event}){
    return <li><Link  to={`/${target_url}`}> <button onClick={event} type="button" 
    className="block px-4 py-[5px] w-full text-start font-mono
    text-sm md:text-[16px] text-gray-600 
    capitalize transition-colors duration-300 
    transform dark:text-gray-300 hover:bg-gray-100
     dark:hover:bg-gray-700 dark:hover:text-white">
                   <div class="inline-flex items-center space-x-5">
                   <Icon name= {icon} Size="1.2rem"></Icon>
                    <p>{name}</p>
                    
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
     return <div className="tracking-wider font-sans  inline-block">
      <button onClick={handleOnclick} id="states-button" 
      data-dropdown-toggle="dropdown-states"
       className="buttondropdown " type="button">
             <div className="flex space-x-3 ">
              <p>
              {name}
              </p>
            
             
             </div>
     </button>
   {
     dropdown ? (<>
      <div className="absolute right-4 z-20 w-56 mt-2 overflow-hidden origin-top-right
      bg-white rounded-md shadow-xl dark:bg-gray-800 transition ease-out duration-100" >
        <div className="flex justify-end bg-gray-50  w-full">
         
          <button onClick={()=> setDropdown(false)} className="px-2 py-1.5 hover:bg-purple-50 hover:rounded-sm hover:shadow-sm">
          <Icon name={<BiX/>} Size="1.2rem" color="purple"></Icon>
          </button>
        
        </div>
     <ul className="" aria-labelledby="states-button">
 {
  list.map((value)=>
  <DropdownList icon={value.icon} name={value.name} target_url={value.name} event={value.logout}/>
  )
 }
   </ul>
 </div>
     </>):
         (<></>)
     }
     </div>
}