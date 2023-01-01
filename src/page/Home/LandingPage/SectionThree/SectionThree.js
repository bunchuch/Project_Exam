import React from "react"
import "../Herosection/Hero.css"
import Description from "../SectionTwo/component/Description"

const SectionThree =()=>{
    return <section class=" text-white">
       {/*  */}
      <div className=" container mx-auto rounded-md  my-10 
       xl:flex xl:flex-col text-center   sm:flex-col justify-center py-5 bg-gradient-to-r from-purple-500 to-pink-500 ">
        <div className="space-y-10">
                <div className="container mx-auto max-w-7xl ">
                <Description header="Get Start With Us?" ></Description>
                </div>
       
        </div>
      </div>
</section>
}

export default SectionThree
