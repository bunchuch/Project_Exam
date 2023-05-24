import React, { useEffect } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import {styleError404} from "../style/style"
import Icon from "./Icon";
import { FcBrokenLink } from "react-icons/fc";
import Container from "./Container"

export default function ErrorPage(){
	document.title = "Error 404"
  let navigator = useNavigate()
  const hanldClick = () => {
    navigator("/home", {replace: true})
  }

    return <Container>
<div className=" space-y-1 flex flex-col items-center justify-center 
md:mx-10 text-gray-700 px-4 md:p-8 rounded  xl:py-0">
	<div className="flex relative flex-col items-center inset-y-40 justify-center rounded border-[1px] px-5 space-y-3 py-3 border-gray-900">
	<div className="w-10 h-10 md:w-20 md:h-20">
						<Icon name={<FcBrokenLink/>}></Icon>
					 </div>
                    <h1 className="text-xl font-medium leading-tight mb-2
                     tracking-tight md:text-2xl
                      dark:text-white">Page Not Found</h1>
               <p className="font-normal text-center">The requestion URL was not found. That's all we know. </p> 
               <p className="md:text-center text-start">
                            <a onClick={hanldClick} 
                            href="" className="font-thin-[150px] text-start
                             hover:text-purple-900 text-purple-800">Go back</a>
                        </p>
                </div>
	</div>
                   
	</Container>

}