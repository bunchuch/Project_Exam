import React from "react";
import Icon from "../../components/Icon";
import { FcPortraitMode } from "react-icons/fc";
import { Link } from "react-router-dom";
import Container from "../../components/Container";

export const GetHelpWithSigning = () =>{
    return <Container>
     <div className="p-4 bg-login w-full space-y-1 md:space-y-2 flex h-screen justify-center leading-10  font-sans
                flex-col items-center 
                 text-gray-700  md:p-2 rounded-md text-center bg-gray-50 px-0 xl:py-0">
                      <h1 className=" text-xl font-medium leading-tight mb-2 tracking-tight md:text-2xl  ">
                    <Icon Size="7rem" name={<FcPortraitMode/>}></Icon>
                      </h1>
                    <h1 className="text-xl font-medium leading-tight
                     mb-2 tracking-tight md:text-2xl">Welcome</h1>
               <p className=" font-normal">
                Contact your curator to recover your password
                 </p> 
               <p className="paraStyle text-center">
                <Link to={"/login"}>
                <a href=""
                             className="font-thin-[150px] bg-yellow-400 px-3 py-2 rounded-md
                              hover:text-slate-200 text-slate-800">
                                I remember the password back</a>
                </Link>
                           
                        </p>
                </div>
    
    
    </Container>

}