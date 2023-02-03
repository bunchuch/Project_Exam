import React from 'react';
import { Link } from 'react-router-dom';



 const PageComponet =({name,img,link})=>{
    return  <div className="flex flex-row space-x-1 font-medium items-center my-2 transition-colors  duration-300 transform
      dark:text-gray-200 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0">
    <Link to={`${link}`}>
    <div>{name}</div>
   </Link>  
    </div>
     
}

export default PageComponet;