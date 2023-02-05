import React ,{useEffect} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { Card } from "../../components/Card";
import { sectionTwoData } from "../../data/data";

const content = ["https://cdn.dribbble.com/userupload/5320611/file/original-661278a3a00484b6c75d70cc97aee6a4.jpg?resize=400x0" 
                ,"https://i.pinimg.com/474x/2f/71/08/2f7108adcd8af48b81fc51d9ddc5f61e.jpg"]



export default function Home (){
        useEffect(()=>{
                Aos.init({duration:2000})
              },[])
    return <div data-aos="fade-in" className="">
      <div className="px-4 mt-1 md:p-0 md:m-0">
      </div>
        

        <div className="container mx-auto py-5 px-3 md:px-0">
        <div className="mt-6 flex gap-2 items-center mb-5">
              <h1 className="text-xl font-bold font-roboto
               text-gray-800 lg:text-3xl">Our Feature</h1>
                    <span className="inline-block w-3 h-7 
                    border-[1px]  bg-gradient-to-r from-slate-600 to-blue-500 
                     border-white rounded-full"></span>
                </div>



                <div class="grid lg:grid-flow-col lg:grid-rows-2 gap-2 ">
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



<div className=" mt-[4rem] ">
<div className="mt-6 flex gap-2 items-center mb-5">
              <h1 className="text-xl font-bold font-roboto
               text-gray-800 lg:text-3xl">How Will You Get ?</h1>
                    <span className="inline-block w-3 h-7 
                    border-[1px]  bg-gradient-to-r from-slate-600 to-blue-500 
                     border-white rounded-full"></span>
                </div>
 <ul className="grid grid-cols-1 md:grid-cols-4 gap-3">
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

