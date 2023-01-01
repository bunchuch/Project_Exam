import React from "react"



const Heropage =()=>{
  return <header class="bg-white dark:bg-gray-900">
<HeroImage></HeroImage>
</header>
}

const HeroImage = ()=>{
  return (
	<>
<section className=" bg-cover
 relative  to-blue-500 bg-gray-50
  dark:bg-gray-800 dark:text-gray-100 text-slate-900 
xl:mx-0 xl:mt-0
 sm:mt-10 sm:mx-10 h-[25rem] flex ">
	<div className="flex max-w-3xl mx-auto justify-center flex-col items-center py-10 space-y-4">
<h1 className="text-[50px] font-ubuntu text-yellow-400 font-medium">Test Quiz.Inc</h1>
<article>
  <p className="text-[24px] text-center">
  Lorem ipsum dolor sit amet, consectetur <br>
  </br> adipisicing elit. Porro beatae error laborum ab amet.
  </p>
</article>
<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm 
text-sm px-9 py-4 mr-2 mb-2 text-[18px] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Learn More</button>
  </div>
	
</section>
	</>
	
  )
}


export default Heropage