import React, { useState } from "react";
import {BiLayer,BiBarChartAlt2,BiBookReader,BiCaretDown,BiFilterAlt,
    BiCategoryAlt,
    BiChevronDown,BiChalkboard ,BiCool} from "react-icons/bi";
import Icon from "../../Icon";
import Timer from "./../../././././../../testfile/Timer";

function Dropdown({name,List}){
const [dropdown, setDropdown] = useState(false)
const handleOnclick = ()=>{
      setDropdown(!dropdown)
}


    return <div className="tracking-wider">
     <button onClick={handleOnclick} id="states-button" data-dropdown-toggle="dropdown-states"
      className="flex-shrink-0 z-10 inline-flex items-center py-1 px-2 text-sm font-medium text-[12px] text-center
       text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4
        focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700
         dark:text-white dark:border-gray-600 " type="button">
            <div className=" flex space-x-2">
            <Icon Size="1.2rem" name={<BiCategoryAlt/>}/> <div>
            {name}
                </div>  <Icon Size="1.2rem" name={<BiChevronDown/>}/>
            </div>
  
    </button>

  {
    dropdown ? (<>
  <DropdownList list={List}></DropdownList>
    </>):
        (<></>)
    
    }
    
   
    </div>
}


function HeaderList ({icon,title}){
    return <>
       <li class="mr-2 px-1.5 md:px-0">
                <a href="#" class="inline-flex font-medium md:font-normal text-blue-400  items-center md:space-x-2
                py-4 md:px-2 rounded-t-lg border-b-2 border-transparent
                 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300
                  cursor-not-allowed">
                    <div className="hidden md:flex">
                      {icon}
                    </div>
                    <div>{title}</div>
                      </a>
            </li>
    </>
}

export default function HeaderBar () {
    const [count,setCount] = useState(0)

const type = ["Listening","Speaking","Vocabulary","Writing"]
const QuestionType = [ "MultipleChoice","Fill in blank","Match Word"]

    return     <div class=" text-sm py-1.5 border-b md:p-0  text-center text-gray-800
     bg-white  border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-col md:flex-wrap md:flex-row -mb-px md:justify-between">
            <div className="flex flex-wrap -mb-px order-1 border-b-[1px] md:border-none ">
         <HeaderList icon={  <Icon Size="1.2rem" name={<BiBarChartAlt2/>}></Icon>} title="English Intermedia"/>
         <HeaderList icon ={  <Icon Size="1.2rem" name={<BiChalkboard/>}></Icon>} title="Grade 4"/>
         <HeaderList icon={     <Icon Size="1.2rem" name={<BiLayer></BiLayer>}></Icon>} title="M4L4"/>
         <HeaderList icon= {<Icon Size="1.2rem" name={<BiCool/>}></Icon>} title="Mrs.Voch Chea"/>
         
            </div>
            <div className="flex order-last md:order-2 md:justify-center md:items-center ">
              <div className="">
              <Timer/>
              </div>
            </div>
   <div className="flex items-center px-2 justify-center md:justify-center order-2 md:order-last py-4 md:py-0 ">
       <li className="mr-2 ">
                <Dropdown Size="1.2rem" name="Exam Role" List={type}></Dropdown>
            </li>
            <li className="mr-2">
                <Dropdown Size="1.2rem" name="Qustion Type" List={QuestionType} ></Dropdown>
            </li>
</div>    
        </ul>
    </div>
  }


  

  function DropdownList ({list}){
 return   <div id="dropdown-states" class="z-10 relative divide-y-1  rounded shadow dark:bg-gray-700">
    <ul class="py-2 divide-y-[1px] mt-4 mx-auto text-sm text-gray-700 rounded-md border-[1px]
     dark:text-gray-200 bg-white md:w-[15rem] right-3  absolute" aria-labelledby="states-button">
        {list.map((items)=><>
   <li>
            <button type="button" class="inline-flex w-full
             font-base  tracking-wide px-4 py-2 text-sm text-gray-700
              hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="inline-flex items-center">
                 {items}
                </div>
            </button>
        </li>
        </>)}
      
     
    </ul>
</div>
  }