import React from "react"



const Heropage =({text ,header , des , img})=>{
  return <header class=" dark:bg-gray-900">
<HeroImage img={img} header={header} des={des} text={text}></HeroImage>
</header>
}

const HeroImage = ({text ,header , des , img})=>{
  return (
	<div className=" md:px-0 px-2">
<section className={`${img} bg-cover relative inset-0 top-0 shadow-md
 to-blue-500 
  dark:bg-gray-800 dark:text-gray-100 text-slate-900 
md:mt-0 mx-0 2xl:h-[38rem]
 h-[20rem] `}>
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