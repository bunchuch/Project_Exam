
import {React, useEffect} from "react"
import Footer from "../../components/Footer/Footer"
import { about } from "../../data/data"
import 'aos/dist/aos.css'
import Aos from "aos"
import Heropage from "../../components/Herosection/Hero"
import "../../style/style.css"
import { Card } from "../../components/Card"
import { FcBookmark, FcBriefcase, FcHome, FcKey, FcServices, FcStatistics } from "react-icons/fc"



export default function About(){
useEffect(()=>{
  Aos.init({duration:1000})
},[])
    return <>
  
      <section data-aos="fade-in" className=" dark:bg-gray-800 dark:text-gray-100  font-sans text-black">
       <Heropage img="about-hero"/>
        <div className="container px-6 md:mt-10 py-12 mx-auto  ">
              <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Let Know about Us</h1>
              <div class="mt-2">
                    <span className="inline-block w-40 h-1 bg-purple-800 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-red-800 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-yellow-400 rounded-full"></span>
                </div>
              <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
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

