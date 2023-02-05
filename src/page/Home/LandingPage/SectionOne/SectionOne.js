import React from "react";
import Banner from "../../../../components/Banner";


const SectionOne = ({ data }) => {
    return <section className="p-0  sm:p-0 ">
        <div className="md:mt-10 mt-0 md:py-5">
            <div className=" grid grid-cols gap-2 ">
    {
         data.map((value)=><>
        {value.Lisenting.map((listining)=><div className="text-white my-6 font-sans ">
        <div key={listining.key} className="md:bg-gray-100 bg-white  rounded-xl shadow-md shadow-gray-100"> 
            <Banner
            orderFirst={true}
             title={listining.header} 
             desc={listining.Description} 
             img={listining.icon} status={true} statusText={"check"}/>
        </div>
        </div>)}
        {value.Writing.map((writing)=><div className="">
        <div key={writing.key} className="md:bg-gray-100 bg-white shadow-gray-100 rounded-xl mb-6 font-sans">
            <Banner 
            style="flex "
            title={writing.header}
             desc={writing.Description}
              img={writing.icon} 
              status={true}
              statusText={"check"}/>
        </div>
        </div>)}
        {value.Vocalulary.map((vocalulary)=><div className="">
        <div key={vocalulary.key} className=" rounded-xl bg-white md:bg-gray-100 shadow-gray-100 font-sans ">
            <Banner 
            orderFirst={true}
            style="flex"
            title={vocalulary.header}
             desc={vocalulary.Description} 
             img={vocalulary.icon} 
             status={true}
             statusText={"check"} />    
        </div>
        </div>)}
        </>)
    }
            </div>
        </div>
    </section>
}

  export default SectionOne