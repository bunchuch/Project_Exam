import React from "react";


function Description({header,desc}) {
    return (
        <>
          <h1 className=" xl:text-3xl xl:text-start xl:max-lg:font-bold font-ubuntu sm:font-semibold tracking-normal 
          leading-none sm:text-xl sm:text-start">{header}</h1>
          <p className="xl:mt-6 xl:mb-8  xl:text-[18px] line-none xl:text-start sm:mb-12 sm:mt-0 sm:mx-0 sm:text-start">{desc}
          </p>	
          </>
);
  }



  export default Description

  