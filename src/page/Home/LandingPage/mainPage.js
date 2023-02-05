import React ,{useEffect} from "react"
import {sectionOneData } from './../../../data/data';
import Heropage from "../../../components/Herosection/Hero.js"
import SectionOne from "./SectionOne/SectionOne"
import SectionTwo from "./SectionTwo/SectionTwo"
import SectionThree from "./SectionThree/SectionThree"
import SectionContainer from "./SectionContainer";
import Footer from "../../../components/Footer/Footer";
import "../../../style/style.css"
import Aos from "aos"
import 'aos/dist/aos.css'
import { Outlet } from "react-router-dom";


function Mainpage (){
        useEffect(()=>{
                Aos.init({duration:2000})
              },[])
    return <div data-aos="fade-up" className="dark:bg-gray-900">
          <Heropage 
img ="main_background"
text={false}></Heropage>
        <div className="container mx-auto md:px-0 px-2 ">
<SectionContainer  componet={<SectionOne data={sectionOneData}/>}/>
<SectionContainer aos="fade-up" componet={<SectionTwo />}/>
<SectionContainer aos="fade-up" componet={<SectionThree  />}/>
        </div>
    </div>
}

export default Mainpage