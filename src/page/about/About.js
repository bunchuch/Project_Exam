
import {React, useEffect} from "react"
import Footer from "../../components/Footer/Footer"
import HeroPage from "./component/AboutHero"
import ColFour from "./component/ColFour"
import Banner from "./component/Banner"
<<<<<<< HEAD:src/page/about/About.js
import Navbar from "../../components/Navbar/Navbar"



export default function About(){
    return   <>
          <section className=" dark:bg-gray-800 dark:text-gray-100 text-white">
=======
import { about } from "../../data/data"
import { data } from "autoprefixer"
import {BiCompass,BiBriefcase,BiTrip,BiPaperPlane,BiBuildings,BiShow} from "react-icons/bi"
import Icon from "../../components/Icon"
import 'aos/dist/aos.css'
import Aos from "aos"

function CarAbout  ({title,desc,icons}) {
    return     <div>
   <span className="inline-block p-2 text-blue-500 bg-blue-100
     rounded-xl  dark:text-white dark:bg-blue-500">
       <Icon name={icons} Size="1.5rem" color="purple"></Icon>
    </span>

    <div>
        <h1 class="text-xl font-semibold text-gray-700 dark:text-white">{title}</h1>

        <p class="mt-2 text-md text-gray-500 dark:text-gray-300">
           {desc}
        </p>
    </div>
</div>
}


function About(){
useEffect(()=>{
  Aos.init({duration:1000})
},[])
    return <>
  
      <section data-aos="fade-up" className=" dark:bg-gray-800 dark:text-gray-100 text-white">
>>>>>>> featurn1:src/page/about/about.js
       <HeroPage/>
        <div className="max-w-7xl  px-6 py-12 mx-auto  ">
              <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Let Know about Us</h1>
              <div class="mt-2">
                    <span className="inline-block w-40 h-1 bg-purple-800 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-red-800 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-yellow-400 rounded-full"></span>
                </div>
              <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {
            about.map((itme)=> <>
            {itme.one.map((i)=><CarAbout icons={<BiCompass/>} img={i.img} title={i.title} desc={i.desc}/>)}
            {itme.two.map((i)=><CarAbout icons={<BiTrip/>} img={i.img} title={i.title} desc={i.desc}/>)}
            {itme.three.map((i)=><CarAbout icons={<BiBriefcase/>}  img={i.img} title={i.title} desc={i.desc}/>)}
            {itme.four.map((i)=><CarAbout icons={<BiPaperPlane/>}  img={i.img} title={i.title} desc={i.desc}/>)}
            {itme.five.map((i)=><CarAbout icons={<BiBuildings/>}  img={i.img} title={i.title} desc={i.desc}/>)}
            {itme.six.map((i)=><CarAbout icons={<BiShow/>}  img={i.img} title={i.title} desc={i.desc}/>)}
            
            
            </>)
          }
      
       
           
          
            </div>
        </div>
        <Footer></Footer>
                
</section>
    </>
  

}

