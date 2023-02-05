import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";


export default function ErrorPage({type}){
	document.title = "404 - not found page"
  let navigator = useNavigate()
  const handleNavigator = () => {
    navigator(-1, {replace:true})
  }

    return <Container>
<div className="h-screen  flex items-center font-mono">
	<div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div className="max-w-md md:order-1 order-2 justify-center">
      		<div className="text-5xl font-dark font-bold">404</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find this page. </p>
          <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          
          <button
          onClick={()=> handleNavigator()}
          className="px-4 inline py-2 text-sm font-medium leading-5
           shadow text-white transition-colors duration-150 border
            border-transparent rounded-full border-1 tracking-wide focus:outline-none focus:shadow-outline-blue
             bg-purple-800 active:bg-purple-600 hover:bg-purple-700">back</button>
    </div>
      <div className="max-w-lg  md:order-2 order-1">
        <p className="text-[100px]">
         &#128564;
        </p>
   
    </div>
    
  </div>
</div>
                   
	</Container>

}




