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
	<Navbar style=" dark:bg-gray-900 font-semibold bg-none "></Navbar>
<section className="bg-hero-image bg-cover bg-no-repeat
 relative h-[30rem] bg-gradient-to-r from-cyan-500 to-blue-500
  dark:bg-gray-800 dark:text-gray-100 text-slate-900 
xl:mx-0 xl:mt-0
 sm:mt-10 sm:mx-10 sm:rounded-md  ">
	
	
	<div className="container flex flex-col justify-center items-center p-6 mx-auto
	sm:py-12 lg:py-24 lg:flex-row lg:justify-center rounded-md ">
		<div className="flex flex-col p-6  rounded-sm lg:max-w-md xl:max-w-2xl 
		lg:block
		md:block
		 sm:hidden xl:block absolute top-[20%] ">
			<h1 className="text-2xl font-extrabold leading-none sm:text-2xl text-center">Ac mattis
				<span className="dark:text-violet-400">senectus</span>erat pharetra
			</h1>
			{/* <p className="mt-6 mb-8 text-lg sm:mb-12 text-center s">where you can belong to a school club, 
			a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together.
			 A place that makes it easy to talk every day and hang out more often .
			</p> */}
			<div className=" flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded-xl bg-white text-slate-800 dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold  rounded-xl  bg-white  dark:border-gray-100">Malesuada</a>
			</div>
		</div>
		
	</div>
</section>
	</>
	
  )
}


export default Heropage