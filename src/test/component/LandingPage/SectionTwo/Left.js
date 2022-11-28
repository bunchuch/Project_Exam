import React from "react";
import ImgaeBanner from "./component/img";
import Description from "./component/Description";









const Left = ({title,desc,img})=>{

return (
<section className="dark:bg-gray-800   dark:text-gray-100">
	<div className="container flex flex-col px-6 mx-auto items-center  lg:flex-row justify-center">
        <div className="flex  px-10">
        <ImgaeBanner img={img} />
        </div>
		
		<div className="flex flex-col  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
		<Description header={title} desc={desc}></Description>
			
		</div>
	</div>
</section>
)



}



  
  export default Left