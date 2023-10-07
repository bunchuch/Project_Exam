import React ,{useEffect} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import Heropage from "../../components/Herosection/Hero";
import { Card } from "../../components/Card";
import { sectionTwoData } from "../../data/data";

export default function Home (){
        useEffect(()=>{
                Aos.init({duration:2000})
              },[])
    return <div data-aos="fade-up" className="">
        <div className="">
               <Heropage img="main_background"/>                        
        </div>

        <div className="container mx-auto py-5">
        <div className="mt-6 flex gap-2 items-center mb-5">
              <h1 className="text-[3rem] font-bold font-roboto
               text-gray-800 lg:text-3xl">Our Feature</h1>
                    <span className="inline-block w-3 h-7 
                    border-[1px]  bg-gradient-to-r from-slate-600 to-blue-500 
                     border-white rounded-full"></span>
                </div>



                <div class="grid grid-flow-col grid-rows-2 gap-2">
  <div className=" row-span-2 rounded-xl overflow-hidden">
      <Card hight="h-[30.5rem]" 
      bgImage="https://tailwindcss.com/_next/static/media/intellisense.c22de782.png" />
  </div>

  <div className=" bg-red-300 col-span-1 rounded-xl overflow-hidden">
    <Card 
    bgImage={"https://www.atatus.com/blog/content/images/2022/06/Tailwind-CSS-vs.-Bootstrap.jpeg"} 
    hight=" h-[15rem]"/>
      
  </div>
  <div className="col-span-1 bg-yellow-200 rounded-xl overflow-hidden">
  <Card hight="h-[15rem]" 
  bgImage="https://tailwindcss.com/_next/static/media/intellisense.c22de782.png"/>
  </div>

  <div className="col-span-1 bg-yellow-200 rounded-xl overflow-hidden">
  <Card hight="h-[15rem]" 
  bgImage="https://tailwindcss.com/_next/static/media/intellisense.c22de782.png"/>
  </div>
</div>



<div className=" mt-[4rem]">
<div className="mt-6 flex gap-2 items-center mb-5">
              <h1 className="text-[3rem] font-bold font-roboto
               text-gray-800 lg:text-3xl">How Will You Get ?</h1>
                    <span className="inline-block w-3 h-7 
                    border-[1px]  bg-gradient-to-r from-slate-600 to-blue-500 
                     border-white rounded-full"></span>
                </div>
 <ul className="grid grid-cols-4 gap-3">
 {
        sectionTwoData.map((i,id)=><li>
        <Card  title={i.header} desc={i.Description}/>
        </li>)
    }
 </ul>     
</div>
   
        </div>
    </div>
}

