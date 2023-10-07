import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';



//list navbar for landing page

 const NavbarList =({name,icon,link})=>{
    return  <div className="flex space-x-1 
     hover:text-white rounded-full hover:bg-gradient-to-tr
     hover:from-purple-600 hover:to-blue-200 
     px-2  items-center my-2 transition-colors  duration-300 transform
      dark:text-gray-200 dark:hover:text-blue-400 
      hover:underline md:mx-4 md:my-0">
    <Link to={`${link}`}>
    <div className='inline-flex space-x-2 items-center '>
    <Icon name={icon} Size="1.2rem" color="white"/>
      <p>{name}</p>
      </div>
   </Link>  
    </div>
     
}

export default NavbarList;



{/* <a href="#_" class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
<span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
<span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
</span>
<span class="relative text-white">Button Text</span>
</a> */}