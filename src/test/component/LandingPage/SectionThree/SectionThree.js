import React from "react"
import "../Herosection/Hero.css"
import Description from "../SectionTwo/component/Description"

const SectionThree =()=>{
    return <section class=" text-slate-900">
       {/*  */}
      <div className=" container mx-auto rounded-md 
       xl:flex xl:flex-col text-center   sm:flex-col justify-center py-5 ">
        <div className="space-y-10">
        <Description header="What Are you Expect from
Over our Exam?" ></Description>
        </div>
    
      <img className="w-full  h-96 object-cover rounded-md" 
      src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/140905002/original/d24fd3d4cce4cb08fe8f3b682638ab22288cfbca/create-stylish-flat-illustration.png" alt="img"/>
        
      </div>
</section>
}

export default SectionThree
