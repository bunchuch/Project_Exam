
import React from "react";
import ImgaeBanner from "./component/img";
import Description from "./component/Description";
import { sectionTwoData } from "../../../../data/data";


const Right= ({desc,title,img})=>{

return (
<section className="dark:bg-gray-800 ">
	<div className="container flex flex-col  mx-auto items-center  lg:flex-row justify-center">
    <div className="flex flex-col  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
    <Description header={title} desc={desc}   />
    </div>
		
        <div className="flex justify-start px-10">

        <ImgaeBanner img={img}    />
        </div>
	</div>
</section>
)



}



   
  export default Right