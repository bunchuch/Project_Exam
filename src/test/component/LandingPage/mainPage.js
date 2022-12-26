import React from "react"
import {sectionOneData,sectionTwoData  } from './../../../data/data';
import Heropage from "./Herosection/Hero.js"
import SectionOne from "./SectionOne/SectionOne"
import SectionTwo from "./SectionTwo/SectionTwo"
import SectionThree from "./SectionThree/SectionThree"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import  "./Herosection/Hero.css"
import SectionContainer from "./SectionTwo/SectionContainer";




function Mainpage (){
    return <div className="">
    
<Heropage></Heropage>
<SectionContainer img="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG.png" isRight={false} 
desc="Blazor is a feature of ASP.NET for building interactive web UIs using C# instead of JavaScript. Blazor gives you real .NET running in the browser on WebAssembly."
title="None"></SectionContainer>
<SectionOne data={sectionOneData}></SectionOne>
<SectionTwo data={sectionTwoData}></SectionTwo>
<SectionThree></SectionThree>

<Footer></Footer>
    </div>
}

export default Mainpage