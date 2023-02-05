import React from "react";




const ImgaeBanner = ({img})=>{
   return (<div className="">
    <img src={img} className="object-contain h-96 w-full  transition duration-500 ease-in-in
          transform hover:-translate-y-2
          hover:scale-200" />
</div>);
}


export default ImgaeBanner