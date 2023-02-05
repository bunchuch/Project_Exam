import React from "react";
import ImgaeBanner from "./component/img";
import Description from "./component/Description";



const SectionContainer = ({title,desc,img})=>{

return (
<section className="bg-[#142544] md:mt-10 dark:bg-gray-900">
    <div className="container flex flex-col md:px-6 md:py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-10 lg:flex-row ">
        <div className="w-full lg:w-1/2 md:py-10 py-4">
            <div className="lg:max-w-lg  px-6">
                <h1 className="text-3xl font-semibold tracking-wide  text-white font-teko dark:text-white lg:text-5xl">
                    Easiest way to create your website
                </h1> 

                <div className="mt-8 space-y-5 text-yellow-50 font-ubuntu text-[24px]">
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

        <div className="flex items-center justify-center w-full h-full md:h-96 lg:w-1/2 ">
            <div className="md:bg-gray-100">
            <img className="md:object-cover object-fill w-full h-full mx-auto md:translate-x-2 -translate-y-2 transition duration-500 ease-in-in hover:scale-200 transform hover:-translate-y-3 lg:max-w-2xl" 
            src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo"/>
            </div>
      
        </div>
    </div>
</section>
)



}



  
  export default SectionContainer