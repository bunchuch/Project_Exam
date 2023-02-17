import React from "react"
import { useEffect } from "react";
import {sectionOneData,sectionTwoData  } from './../../../data/data';
import Heropage from "./Herosection/Hero.js"
import SectionOne from "./SectionOne/SectionOne"
import SectionTwo from "./SectionTwo/SectionTwo"
import SectionThree from "./SectionThree/SectionThree"
import  "./Herosection/Hero.css"
import SectionContainer from "./SectionContainer";
import Footer from "../../../components/Footer/Footer";




function Mainpage (){
  
    return <div className="">
          <Heropage></Heropage>
        <div className="md:max-w-[80%] mx-auto md:px-0 px-6">
      
<SectionContainer  componet={<SectionOne data={sectionOneData}/>}/>
<SectionContainer aos="fade-up" componet={<SectionTwo />}/>
<SectionContainer aos="fade-up" componet={<SectionThree  />}/>
        </div>
<Footer></Footer>
    </div>
}

export default Mainpage