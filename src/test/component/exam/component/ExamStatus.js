import React from "react";

const number = [1,2,3,4,5,6,7,9]


function ExamStatus ({data}){
return <nav aria-label="Page navigation example" className=" flex  justify-center py-5 bg-white px-2 md:px-0 border-[1px] md:border-0 rounded-[4px] shadow-orange-100 ">
  <ul class="flex space-x-2 md:inline-flex items-center md:space-x-4 justify-center">
   {
    number.map((number)=> <li>
    <a href="#" class="px-3 rounded-full py-2 space-x-2 leading-tight text-gray-600 bg-white border border-gray-300
     hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
      dark:hover:text-white">{number}</a>
  </li>
    )
   }
    
  </ul>
</nav>

}


export default ExamStatus