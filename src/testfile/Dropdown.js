import { useState } from "react"

export default function Dropdown (){
const [text,setButton] = useState("Dropdown divider")
const [dropdown,setDropdown] = useState()
const showDropdown = ()=>{
  setDropdown(true)
}

const hideDropdown = ()=>{
  setDropdown(false)
}

const handleOnclick = (event)=>{
   if(showDropdown){
    return setButton("dropdown list")
   }else if(hideDropdown){
          return setDropdown("flast")
   }
}

return <>
<button id="dropdownDividerButton" onClick={handleOnclick} data-dropdown-toggle="dropdownDivider" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{text} <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
</>
}