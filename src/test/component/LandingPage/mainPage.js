import React from "react"
import {sectionOneData,sectionTwoData  } from './../../../data/data';
import Heropage from "./Herosection/Hero.js"
import SectionOne from "./SectionOne/SectionOne"
import SectionTwo from "./SectionTwo/SectionTwo"
import SectionThree from "./SectionThree/SectionThree"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"




function Mainpage (){
    return <div className="">
    
<Heropage></Heropage>
<SectionOne data={sectionOneData}></SectionOne>
<SectionTwo data={sectionTwoData}></SectionTwo>
<SectionThree></SectionThree>

<Footer></Footer>
    </div>
}

export default Mainpage