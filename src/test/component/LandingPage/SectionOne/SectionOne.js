import React from "react";
import Banner from "../../about/component/Banner"
import { sectionOneData } from "../../../../data/data";
import Button from "../../Button"
import ColFour from "../../about/component/ColFour"



const SectionOne = ({ data }) => {
    return <section className="max-w-10 p-5 sm:p-0  ">
        <div class=" container
        font-inter 
       mx-auto mt-10">


<div className="   flex flex-col justify-center items-center p-6 mx-auto
	sm:py-12 lg:py-24 lg:flex-row lg:justify-center ">
		<div className="flex flex-col p-6 bg-slate-800 rounded-md text-white  lg:max-w-md xl:max-w-2xl 
		lg:block
		md:block
		 sm:hidden xl:block absolute bottom-[20rem] ">
			<h1 className="text-2xl font-extrabold leading-none sm:text-2xl text-center">Ac mattis
				<span className="dark:text-violet-400">senectus</span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 text-center s">where you can belong to a school club, 
			a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together.
			 A place that makes it easy to talk every day and hang out more often .
			</p>
			<div className=" flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded-full w-96 text-center bg-blue-600 text-white dark:bg-violet-400 dark:text-gray-900">Learn More</a>

			</div>
		</div>
		
	</div>
            <div className=" grid grid-cols-4 grid-row-2 gap-3 px-10 py-10">
    {
         data.map((value)=><>
        {value.Lisenting.map((listining)=><>
        <div key={listining.key} className=" px-5 py-10 space-y-5 rounded-md transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200 ">
            <Banner
             title={listining.header} 
             desc={listining.Description} 
             img={listining.icon} status={true} statusText={"check"}/>
        </div>
        </>)}

        {value.Speaking.map((speaking)=><>
        <div key={speaking.key} className=" px-5 py-10 space-y-5  transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200">
            <Banner img={speaking.icon} 
            desc={speaking.Description} 
            title={speaking.header} 
            status={true}
            statusText={"check"}
            />
        </div>
        </>)}

        {value.Writing.map((writing)=><>
        <div key={writing.key} className=" px-5 py-10 space-y-5  transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200 ">
            <Banner 
            title={writing.header}
             desc={writing.Description}
              img={writing.icon} 
              status={true}
              statusText={"check"}
              />
        </div>
        </>)}

        {value.Vocalulary.map((vocalulary)=><>
        <div key={vocalulary.key} className=" px-5 py-10 space-y-5   transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200">
            <Banner 
            title={vocalulary.header}
             desc={vocalulary.Description} 
             img={vocalulary.icon} 
             status={true}
             statusText={"check"}
             
             />
           
        </div>
        </>)}



        
        
        </>)
    }
          
            </div>
        </div>
    </section>
}

    function HeaderDescription({}) {
      return (<div className=" mx-10">
                <h1 className="text-2xl font-bold  text-slate-900
     mt">What Are you Expect from  Over  our Exam?</h1>
                <div className="text-center">
                 
                </div>
            </div>);
    }
  export default SectionOne