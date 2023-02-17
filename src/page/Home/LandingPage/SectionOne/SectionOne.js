import React from "react";
import Banner from "../../../about/component/Banner";
import { sectionOneData } from "../../../../data/data";


const SectionOne = ({ data }) => {
    return <section className="p-0 md:p-5 sm:p-0  ">
        <div className="md:mt-10 mt-0 md:py-5 ">
            <div className=" grid grid-row-2 gap-2 ">
    {
         data.map((value)=><>
        {value.Lisenting.map((listining)=><div className=" ">
        <div key={listining.key} className=" 
        
        
        "> 
            <Banner

            orderFirst={true}
             title={listining.header} 
             desc={listining.Description} 
             img={listining.icon} status={true} statusText={"check"}/>
        </div>
        </div>)}

        {value.Writing.map((writing)=><div className="">
        <div key={writing.key} className="
         
          
        
        ">
            <Banner 
            style="flex "
            title={writing.header}
             desc={writing.Description}
              img={writing.icon} 
              status={true}
              statusText={"check"}
              />
        </div>
        </div>)}

        {value.Vocalulary.map((vocalulary)=><div className="">
        <div key={vocalulary.key} className="
         
       
        
       ">
            <Banner 
            orderFirst={true}
            style="flex"
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

  export default SectionOne