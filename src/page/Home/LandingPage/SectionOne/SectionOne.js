import React from "react";
import Banner from "../../../about/component/Banner";
import { sectionOneData } from "../../../../data/data";


const SectionOne = ({ data }) => {
    return <section className="max-w-10 p-5 sm:p-0  ">
        <div class=" container
        font-inter 
       mx-auto mt-10 md:px-10 md:py-5 space-y-5">

          <h1 className="text-[50px] font-bold text-slate-800 font-teko tracking-wide">Learning Skill</h1>
     
            <div className=" grid lg:grid-cols-3 grid-row-2 gap-10 ">
             
    {
         data.map((value)=><>
        {value.Lisenting.map((listining)=><div className="bg-slate-700 ">
        <div key={listining.key} className="px-5 -translate-y-2 translate-x-2 rounded-none  bg-blue-600 py-10 space-y-5 transition duration-500 ease-in-in
          transform hover:-translate-y-3
          hover:scale-200 shadow-sm shadow-cyan-500/10 "> 
            <Banner
            style="flex flex-col "
             title={listining.header} 
             desc={listining.Description} 
             img={listining.icon} status={true} statusText={"check"}/>
        </div>
        </div>)}

        {value.Writing.map((writing)=><div className="bg-slate-700">
        <div key={writing.key} className="-translate-y-2 translate-x-2  shadow-sm shadow-cyan-500/10  px-5 py-10 space-y-5 bg-yellow-300 transition duration-500 ease-in-in
          transform hover:-translate-y-3
          hover:scale-200 ">
            <Banner 
            style="flex flex-col"
            title={writing.header}
             desc={writing.Description}
              img={writing.icon} 
              status={true}
              statusText={"check"}
              />
        </div>
        </div>)}

        {value.Vocalulary.map((vocalulary)=><div className="bg-slate-700">
        <div key={vocalulary.key} className="-translate-y-2 translate-x-2 shadow-sm shadow-cyan-500/10 bg-red-500 px-5 py-10 space-y-5   transition duration-500 ease-in-in
          transform hover:-translate-y-3
          hover:scale-200">
            <Banner 
            style="flex flex-col text-white"
            title={vocalulary.header}
             desc={vocalulary.Description} 
             img={vocalulary.icon} 
             status={true}
             statusText={"check"}
             
             />
           
        </div>
        </div>)}



        
        
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