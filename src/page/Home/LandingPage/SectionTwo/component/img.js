import React from "react";




const ImgaeBanner = ({img})=>{
   return (<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    <img src={img} alt=""  className="object-contain h-52 sm:h-80 lg:h-96 xl:h-52 2xl:h-52  transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200" />
</div>);
}


export default ImgaeBanner