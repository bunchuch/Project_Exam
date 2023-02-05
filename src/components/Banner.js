
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Aos from "aos";
import 'aos/dist/aos.css'
import { FcAbout, FcAddColumn, FcAdvertising, FcBullish } from "react-icons/fc";

const MyList =  ({title, desc,icons}) => {
    return   <div className="md:flex mx-0 md:items-start md:-mx-4
     md:border-none md:rounded-none rounded-lg border-[1px] p-5">
    <span className="inline-block p-2 text-blue-500 bg-blue-100
     rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
       <Icon name={icons} Size="1.5rem" color="purple"></Icon>
    </span>

    <div class="mt-4 md:mx-4 md:mt-0">
        <h1 class="text-xl font-semibold text-gray-700 capitalize
         dark:text-white">{title}</h1>
        <p class="mt-3 text-gray-500 dark:text-gray-300">
          {desc}
        </p>
    </div>
</div>
}




function Banner({img,title,desc,status,statusText,style, orderFirst,keyOne,keyTwo,keyThree}){
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
return <section data-aos="fade-up" className=" dark:bg-gray-900 ">
<div className="container md:px-6 md:mt-0 mt-4 md:py-10 mx-auto ">
    <div className="lg:flex lg:items-center ">
        <div className={ orderFirst ? "w-full order-first space-y-12 lg:w-1/2 "
        : "w-full order-last md:space-y-12 lg:w-1/2" }>
            <div>
                <h1 className="md:text-2xl text-xl 
                 font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">{title}</h1>

                <div class="mt-2">
                    <span className="inline-block w-40 h-1 bg-purple-800 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-red-800 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-yellow-400 rounded-full"></span>
                </div>
            </div>
           <div className ="grid 2xl:grid-cols-2 grid-rows-2 grid-flow-row gap-2 md:gap-4">
          <MyList title={title} desc={desc} icons={<FcBullish/>}/>
          <MyList title={title} desc={desc} icons={<FcAddColumn/>}/>
          <MyList title={title} desc={desc} icons={<FcAdvertising/>}/>
           </div>
          


          
        </div>

        <div className={ orderFirst ? "hidden lg:flex  lg:items-center order-first lg:w-1/2 lg:justify-center":
         " hidden lg:flex lg:items-center  lg:w-1/2 lg:justify-center "}>
            <div className="">
            <img className="w-[28rem] h-[28rem] object-cover xl:w-[20rem] xl:h-[25rem]" 
            src={img} alt={img}/>
            </div>
           
        </div>
    </div>
</div>
</section>

}

export default Banner