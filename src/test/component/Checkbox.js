import React from "react";


export default function Checkbox  ({ Text, type })  {
    return <div class="flex items-center   py-2  px-2 rounded-[5px] xl:text-[15px] md:mb-5 sm:text-md ">
       <input id="default-radio-1" type="checkbox" value="" name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600
     dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
       <label for="default-radio-1" class="ml-2  font-medium text-[14px] text-gray-900 dark:text-gray-300">{Text}</label>
    </div>
 }