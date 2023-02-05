import React from "react"
import {sectionOneData,sectionTwoData  } from './../../../data/data';
import Heropage from "./Herosection/Hero.js"
import SectionOne from "./SectionOne/SectionOne"
import SectionTwo from "./SectionTwo/SectionTwo"
import SectionThree from "./SectionThree/SectionThree"


import  "./Herosection/Hero.css"
import SectionContainer from "./SectionTwo/SectionContainer";
import Footer from "../../../components/Footer/Footer";




function Mainpage (){
    return <div className="">
<Heropage></Heropage>
<SectionOne data={sectionOneData}></SectionOne>
<SectionContainer img="https://www.invictus.edu.kh/ivt/slot/u830/News/9%20Proven%20Methods%20That%20Cultivate%20Independ/invictus_phnompenh_classroom_studenttalking.jpg"  
desc="Blazor is a feature of ASP.NET for building interactive web UIs using C# instead of JavaScript. Blazor gives you real .NET running in the browser on WebAssembly."
title="None"></SectionContainer>
<SectionThree></SectionThree>

<Footer></Footer>
    </div>
}

export default Mainpage