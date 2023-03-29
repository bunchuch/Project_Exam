import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {styleError404} from "../style/style"
import Icon from "./Icon";
import { FcBrokenLink } from "react-icons/fc";
import Container from "./Container"

export default function ErrorPage(){
	document.title = "Error 404"
  let navigator = useNavigate()
    return <Container>
<div className=" space-y-1 flex flex-col items-center justify-center md:mx-10 text-gray-700  md:p-8 rounded text-center px-0 xl:py-0">
	<div className="flex flex-col items-center mt-10 justify-center">
	<div className="w-10 h-10 md:w-14 md:h-14">
						<Icon name={<FcBrokenLink/>}></Icon>
					 </div>
                    <h1 className=" text-xl font-medium leading-tight mb-2 tracking-tight md:text-2xl dark:text-white ">Page Not Found</h1>
               <p className=" font-normal">The requestion URL was not found. That's all we know. </p> 
               <p className="paraStyle text-center">
                            <a onClick={()=>navigator("/")} href="" className="font-thin-[150px] hover:text-purple-900 text-purple-800">Go back</a>
                        </p>
                </div>
	</div>
                   
	</Container>

}