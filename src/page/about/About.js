
import {React, useEffect} from "react"
import { about } from "../../data/data"
import 'aos/dist/aos.css'
import Aos from "aos"
import "../../style/style.css"
import { Card } from "../../components/Card"
import { FcBookmark, FcBriefcase, FcHome, FcKey, FcServices, FcStatistics } from "react-icons/fc"



export default function About(){
useEffect(()=>{
  Aos.init({duration:1000})
},[])
    return <>
  
      <section data-aos="fade-in" className="   font-sans">
        <div className="container px-6 mx-auto mt-9 ">
             
              <div className="mt-2 flex gap-2">
              <h1 className="text-2xl font-bold font-roboto text-gray-800 lg:text-3xl">Let Know about Us</h1>
                    <span className="inline-block w-4 h-8   border-[2px]  bg-gradient-to-br
                     from-yellow-300 to-yellow-400  border-white rounded-full"></span>
                </div>
              <div className="grid grid-cols-1 gap-8 mt-3 lg:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {
            about.map((itme)=> <>
            {itme.one.map((i)=><Card icons={<FcBookmark/>} img={i.img} title={i.title} desc={i.desc}/>)}
            {itme.two.map((i)=><Card icons={<FcServices/>} img={i.img} title={i.title} desc={i.desc}/>)}
            {itme.three.map((i)=><Card icons={<FcBriefcase/>}  img={i.img} title={i.title} desc={i.desc}/>)}
            {itme.four.map((i)=><Card icons={<FcStatistics/>}  img={i.img} title={i.title} desc={i.desc}/>)}
            {itme.five.map((i)=><Card icons={<FcHome/>}  img={i.img} title={i.title} desc={i.desc}/>)}
            {itme.six.map((i)=><Card icons={<FcKey/>}  img={i.img} title={i.title} desc={i.desc}/>)} 
            </>)
          }
            </div>
        </div>
       
                
</section>
    </>
  

}

