import React from "react"
import Navbar from "../../Navbar/Navbar"


const Heropage =()=>{
  return <header class="bg-white dark:bg-gray-900">
<HeroImage></HeroImage>
</header>
}

const HeroImage = ()=>{
  return (
	<>
	<Navbar style="  dark:bg-gray-900 font-semibold bg-none "></Navbar>
<section className="bg-hero-image bg-cover
 relative h-[30rem] to-blue-500
  dark:bg-gray-800 dark:text-gray-100 text-slate-900 
xl:mx-0 xl:mt-0
 sm:mt-10 sm:mx-10 sm:rounded-md flex ">
	
	
</section>
	</>
	
  )
}


export default Heropage