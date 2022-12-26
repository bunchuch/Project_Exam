import React from "react";
import {BiLayer,BiBarChartAlt2,BiBookReader,BiCaretDown,BiFilterAlt,BiChalkboard ,BiCool} from "react-icons/bi";
import Icon from "../../Icon";

function Dropdown({name}){
    return <>Filter</>
}



export default function HeaderBar () {
    return     <div class="text-sm border-b px-[5px] text-center text-gray-800
     bg-white  border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px justify-between">
            <div className="flex flex-wrap -mb-px">
            <li class="mr-2">
                <a href="#" class="inline-flex items-center space-x-2
                p-4 rounded-t-lg border-b-2 border-transparent
                 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300
                  cursor-not-allowed">
                    <div className="">
                        <Icon name={<BiBarChartAlt2/>}></Icon>
                    </div>
                    <div>  English Intermedia</div>
                      </a>
            </li>
            <li class="mr-2">
                <a href="#" class="inline-flex space-x-2
                 p-4 rounded-t-lg border-b-2 border-transparent
                  hover:text-gray-600 hover:bg-gray-200
                   hover:border-gray-300
                   active:font-medium
                   dark:hover:text-gray-300" aria-current="page">
                     <div className="">
                        <Icon name={<BiChalkboard/>}></Icon>
                    </div>
                    <div>Grade 4</div>
                    
                   </a>
            </li>
            <li class="mr-2">
            <a href="#" class="inline-flex space-x-2 p-4 rounded-t-lg
             border-b-2 border-transparent hover:text-gray-600
              hover:border-gray-300 dark:hover:text-gray-300">
                <div className="">
                        <Icon name={<BiLayer></BiLayer>}></Icon>
                    </div>
                    <div> Class M4L4</div>
               </a>
            </li>
            <li class="mr-2">
                <a href="#" class="inline-flex p-4 rounded-t-lg space-x-2 border-b-2 border-transparent
                 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                     <div className="">
                        <Icon name={<BiCool/>}></Icon>
                    </div>
                    <div>Mr.Voch Chea</div>
                    
                 </a>
            </li>
            </div>
           <li className="mr-2">
                <Dropdown name="Filter Test"></Dropdown>
            </li>

            <li className="mr-2">
                <Dropdown name="Filter Type"></Dropdown>
            </li>
           

           <div className="flex flex-wrap items-center justify-self-end">
            <li class="mr-2">
                <a href="#" class="inline-block p-2 rounded-[4px]  tracking-wider
                 text-white text-[16px]  border-transparent bg-green-600 
                 hover:border-gray-300 dark:hover:text-gray-300">{"45:00"}</a>
            </li>
            </div>
            
        </ul>
    </div>
    
}