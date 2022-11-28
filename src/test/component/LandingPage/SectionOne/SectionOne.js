import React from "react";
import Banner from "../../about/component/Banner"
import { sectionOneData } from "../../../../data/data";
import Button from "../../Button"
import ColFour from "../../about/component/ColFour"



const SectionOne = ({ data }) => {
    return <section className="max-w-10 p-5 sm:p-0  ">
        <div class=" container
        font-inter 
       mx-auto">
            <div className=" grid grid-cols-4 grid-row-2 gap-3 px-10 py-10">
    {
         data.map((value)=><>
        {value.Lisenting.map((items)=><>
        <div key={items.key} className="border-[1px] px-5 py-10 space-y-10 rounded-md transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200 ">
            <Banner title={items.header} desc={items.Description} img={items.icon}/>
        </div>
        </>)}

        {value.Speaking.map((items)=><>
        <div key={items.key} className="border-[1px] px-5 py-10 space-y-10  rounded-md transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200">
            <Banner img={items.icon} desc={items.Description} title={items.header}/>
        </div>
        </>)}

        {value.Writing.map((items)=><>
        <div key={items.key} className="border-[1px] px-5 py-10 space-y-10  rounded-md transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200 ">
            <Banner title={items.header} desc={items.Description} img={items.icon}/>
        </div>
        </>)}

        {value.Vocalulary.map((items)=><>
        <div key={items.key} className="border-[1px] px-5 py-10 space-y-10  rounded-md  transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200">
            <Banner title={items.header} desc={items.Description} img={items.icon}/>
           
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