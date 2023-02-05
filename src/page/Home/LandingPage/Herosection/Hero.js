import React from "react"



const Heropage =()=>{
  return <header class="bg-white dark:bg-gray-900">
<HeroImage></HeroImage>
</header>
}

const HeroImage = ()=>{
  return (
	<>
<section className="main_background bg-cover
 relative to-blue-500 bg-gray-50
  dark:bg-gray-800 dark:text-gray-100 text-slate-900 
md:mt-0 md:mx-0
 h-[25rem] flex ">
	<div className="flex max-w-3xl  mx-auto justify-center flex-col">
<article className="text-center drop-shadow-md shadow-gray-900">
<h1 className="md:text-[100px] text-[50px]  font-teko text-white text-shadow shadow-gray-200 font-medium">Test Quiz.Inc</h1>
  <p className="md:text-[30px] text-[24px] font-medium text-white text-center">
  Lorem ipsum dolor sit amet, consectetur 
   adipisicing elit. Porro beatae error laborum ab amet.
  </p>
</article>
  </div>
	
</section>
	</>
	
  )
}


export default Heropage