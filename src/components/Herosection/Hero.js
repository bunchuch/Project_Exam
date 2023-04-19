import React from "react"



const Heropage =({text ,header , des , img})=>{
  return <header class="bg-white dark:bg-gray-900">
<HeroImage img={img} header={header} des={des} text={text}></HeroImage>
</header>
}

const HeroImage = ({text ,header , des , img})=>{
  return (
	<>
<section className={`${img} bg-cover
 relative to-blue-500 bg-gray-50
  dark:bg-gray-800 dark:text-gray-100 text-slate-900 
md:mt-0 md:mx-0
 h-[25rem] flex`}>
  {text ? <>
    <div className="hidden md:flex max-w-3xl md:px-0 px-6  mx-auto justify-center flex-col">
<article className="text-center drop-shadow-md shadow-gray-900">
<h1 className="md:text-[50px]   font-roboto text-white text-shadow shadow-gray-200 font-medium">{header}</h1>

<div className="w-82 py-1 space-x-3 px-6 border-purple-800 border-[4px] text-slate-900 
rounded-lg flex justify-center items-center  bg-purple-50 ">
  <p>📖</p>
<p className="md:text-[20px] space-x-2 tracking-wider text-[20px] font-roboto text-center">
  {des}
  </p>
  <p>📖</p>
</div>


  
</article>
  </div>
  
   </> : null}
	
	
</section>
	</>
	
  )
}


export default Heropage