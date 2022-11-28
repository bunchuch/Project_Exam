import React from 'react';



 const PageComponet =({name,img})=>{
    return<>
     <a class="my-2 transition-colors  duration-300 transform
      dark:text-gray-200 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="#">
    <div className="flex flex-row space-x-1 items-center">
   
 <div>{name}</div>  
    </div>
    </a>

    </>
}

export default PageComponet;