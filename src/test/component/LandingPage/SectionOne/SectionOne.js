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



            <div className=" grid grid-cols-2 grid-row-2 gap-3 px-10 py-10">
    {
         data.map((value)=><>
        {value.Lisenting.map((listining)=><>
        <div key={listining.key} className="px-5 py-10 space-y-5 rounded-md transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200 border-[2px] ">
            <Banner
            style="flex"
             title={listining.header} 
             desc={listining.Description} 
             img={listining.icon} status={true} statusText={"check"}/>
        </div>
        </>)}

        {value.Speaking.map((speaking)=><>
        <div key={speaking.key} className=" flex flex-row border-[2px] rounded-md px-5 py-10 space-y-5  transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200">
            <Banner style="flex" img={speaking.icon} 
            desc={speaking.Description} 
            title={speaking.header} 
            status={true}
            statusText={"check"}
            />
        </div>
        </>)}

        {value.Writing.map((writing)=><>
        <div key={writing.key} className=" border-[2px] rounded-md px-5 py-10 space-y-5  transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200 ">
            <Banner 
            style="flex"
            title={writing.header}
             desc={writing.Description}
              img={writing.icon} 
              status={true}
              statusText={"check"}
              />
        </div>
        </>)}

        {value.Vocalulary.map((vocalulary)=><>
        <div key={vocalulary.key} className="rounded-md border-[2px] px-5 py-10 space-y-5   transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200">
            <Banner 
            style="flex"
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