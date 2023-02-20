import SectionContainer from "../SectionContainer"
import { sectionTwoData } from "../../../../data/data"
import Aos from "aos"
import 'aos/dist/aos.css'
import React, { useEffect } from "react"


 

     
export default function SectionTwo ({}){

useEffect(()=>{
  Aos.init({duration:2000})
},[])

    return  <div className="container  flex flex-col md:px-0 md:py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-10 lg:flex-row ">
    <div className="w-full lg:w-1/2 md:py-10 py-4">
        <div  data-aos ="fade-right" className="lg:max-w-lg  ">
            <h1 className="text-2xl font-semibold tracking-wide text-slate-900  dark:text-white lg:text-4xl">
                Easiest way to create your website
            </h1> 
            <div>
                <div class="mt-2">
                    <span class="inline-block w-40 h-1 bg-purple-800 rounded-full"></span>
                    <span class="inline-block w-3 h-1 ml-1 bg-purple-800 rounded-full"></span>
                    <span class="inline-block w-1 h-1 ml-1 bg-purple-800 rounded-full"></span>
                </div>
            </div>
            <div className="mt-8 space-y-5 text-purple-900 font-ubuntu text-[18px] md:text-[24px]">
                <p className="flex items-center -mx-2  dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span className="mx-2">Clean and Simple Layout</span>
                </p>

                <p className="flex items-center -mx-2  dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span className="mx-2">Just Copy Paste Codeing</span>
                </p>

                <p className="flex items-center -mx-2  dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span className="mx-2">Easy to Use</span>
                </p>
            </div>
        </div>

      
    </div>

    <div data-aos="fade-left" className="flex items-center justify-center w-full h-full md:h-96 lg:w-1/2 ">
     
        <img className="md:object-cover object-fill w-full h-full mx-auto rounded-lg transition duration-500 ease-in-in hover:scale-200 transform hover:-translate-y-3 lg:max-w-2xl" 
        src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo"/>
        
  
    </div>
</div>
}