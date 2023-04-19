import React from "react"
import {sectionOneData } from './../../../data/data';
import Heropage from "../../../components/Herosection/Hero.js"
import SectionOne from "./SectionOne/SectionOne"
import SectionTwo from "./SectionTwo/SectionTwo"
import SectionThree from "./SectionThree/SectionThree"
import SectionContainer from "./SectionContainer";
import Footer from "../../../components/Footer/Footer";
import "../../../style/style.css"



function Mainpage (){
  
    return <div className="dark:bg-gray-900">
          <Heropage header="
Paññāsāstra University of Takhmau"
img ="main_background"
des="Discipline​​ Virtue Success​​ "
text={true}></Heropage>
        <div className="md:max-w-[80%] mx-auto md:px-0 px-6">
      
<SectionContainer  componet={<SectionOne data={sectionOneData}/>}/>
<SectionContainer aos="fade-up" componet={<SectionTwo />}/>
<SectionContainer aos="fade-up" componet={<SectionThree  />}/>
        </div>
<Footer></Footer>
    </div>
}

export default Mainpage