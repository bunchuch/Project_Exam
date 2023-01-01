import React, { useEffect } from "react"


import PageComponet from "./ListComponet"





const Navbar = ({style,setNavbar}) =>{
    return (

       < nav  className="    bg-slate-900 text-white relative">
        <div class=" hidden  md:mx-[70px] md:py-[3px] md:flex text-sm md:justify-between md:items-center   ">
            <div class="flex items-center justify-between">
                <div className="flex flex-row justify-between space-x-2">
                <img src="https://img.icons8.com/color/48/null/infinity.png" className="object-fill " alt="logo"/>
                <div className=" mt-2">
                <a class="text-2xl font-bold transition-colors
                     duration-300 transform dark:text-white lg:text-2xl hover:text-gray-700
                      dark:hover:text-gray-300" href="#">
                     TestQuiz  
                    </a>
                </div>
                 
                </div>
    
              
            
            </div>
           
            <div  class="flex md:items-center md:justify-between md:flex">
                    <PageComponet name="Home" img="https://img.icons8.com/sf-regular/25/1D10B2/home-page.png"/>
                    <PageComponet name="About us" img="https://img.icons8.com/windows/25/1D10B2/info-popup.png"/>
                    <PageComponet name="Contact us" img="https://img.icons8.com/material-outlined/25/1D10B2/address-book.png"/>
            </div>
<div>
<a href="#" className="text-white
             bg-blue-700 hover:bg-blue-800 focus:ring-4
              focus:ring-blue-300 font-medium rounded-sm  px-3 py-2 mr-2 mb-2
               dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
                dark:focus:ring-blue-800">Sign Up</a>
</div>
          
        </div>
    </nav>
    )
}


export default Navbar