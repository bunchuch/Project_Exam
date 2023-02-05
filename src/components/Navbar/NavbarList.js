import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';



 const NavbarList =({name,icon,link})=>{
    return  <div className="flex space-x-1 font-medium  items-center my-2 transition-colors  duration-300 transform
      dark:text-gray-200 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0">
    <Link to={`${link}`}>
    <div className='inline-flex space-x-2 items-center '>
    <Icon name={icon} Size="1.2rem" color="white"/>
      <p>{name}</p>
      </div>
   </Link>  
    </div>
     
}

export default NavbarList;