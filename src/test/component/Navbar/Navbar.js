import React from "react"


import PageComponet from "./ListComponet"





const Navbar = ({style}) =>{
    return (

       < nav  className={style}>
        <div class="container px-6 py-[5px] mx-auto md:flex md:justify-between md:items-center">
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
           
            <div  class="xl:flex xl:items-center  sm:justify-between sm:flex">
              
                    <PageComponet name="Home" img="https://img.icons8.com/sf-regular/25/1D10B2/home-page.png"/>
                    <PageComponet name="About us" img="https://img.icons8.com/windows/25/1D10B2/info-popup.png"/>
                    <PageComponet name="Contact us" img="https://img.icons8.com/material-outlined/25/1D10B2/address-book.png"/>
                   
               
                       
                
            </div>

            <a href="#" className="bg-white text-slate-900 items-center  py-1 rounded-full border-[1px] px-2 hover:bg-blue-400 hover:text-white">Sign Up</a>
        </div>
    </nav>
    )
}


export default Navbar