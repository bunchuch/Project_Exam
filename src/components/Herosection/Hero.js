import React from "react"



const Heropage =({text ,header , des , img})=>{
  return <header class="bg-white dark:bg-gray-900">
<HeroImage img={img} header={header} des={des} text={text}></HeroImage>
</header>
}

const HeroImage = ({text ,header , des , img})=>{
  return (
	<div className="container mx-auto md:px-0 px-2">
<section className={`${img} bg-cover relative inset-0 rounded-xl top-0 md:top-10 shadow-md
 to-blue-500 
  dark:bg-gray-800 dark:text-gray-100 text-slate-900 
md:mt-0 mx-0
 h-[25rem] `}>
  {text ? <>
    <div className="hidden md:flex max-w-3xl md:px-0 px-6  mx-auto justify-center flex-col">
<article className="text-center drop-shadow-md shadow-gray-900">
<h1 className="md:text-[50px]   font-roboto text-white text-shadow shadow-gray-200 font-medium">{header}</h1>




  
</article>
  </div>
  
   </> : null}
	
	
</section>
	</div>
	
  )
}


export default Heropage