import React from "react";
import Icon from "../Icon";
import {BsFacebook,BsTelegram} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import { Link } from "react-router-dom";

const file = [{"icon": <BsFacebook></BsFacebook>},
 {"icon": <BsTelegram/>}, {"icon":<HiOutlineMail/>}]
const quickLink = [  { "name" : "Home",     "link" : "/home"  },
                    {  "name" : "Who We Are",     "link" : "/about" },
                     {   "name" : "Our Philosophy","link" : "/about" }]
const TalkWithus = [  { "name" : "Contact us",     "link" : "/contact"  },
                     {  "name" : "Get in Touch",     "link" : "/contact" },
                      {   "name" : "Help","link" : "/contact" }]                     

export default function Footer(){
    return (
        <footer className="bg-[#142544] dark:bg-gray-900 text-white tracking-wider">
        <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <div className="justify-between space-y-2">
                    <h1 className="max-w-lg text-xl
                     font-semibold tracking-tight
                       xl:text-2xl dark:text-white"></h1>
                <a href="#" className="flex items-center space-x-4">
                    <img className="w-auto h-10 rounded" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu549tbz869AXxenZjBEY6IEmtMa-ymimFnIxkJnRR6gTgIfSptJcsJwLzfiUBAm-4FA&usqp=CAU" alt=""/>
                </a>
                <div className="flex space-x-3 py-4">
                    {
                        file.map(item=><Icon name={item.icon} Size="1.6rem" color="#e5e7eb"></Icon>)
                    }
                </div>
                <div>
                <p class="text-sm text-gray-200">© Copyright 2023. All Rights Reserved.</p>
                </div>
            </div>
                </div>
    
                <div>
                    <p className="font-semibold  dark:text-white font-roboto tracking-wider">Quick Link</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        {quickLink.map(item =><Link to={item.link}>
                            <a className=" text-sm transition-colors duration-300 dark:text-gray-300
                         dark:hover:text-blue-400 hover:underline hover:text-gray-500">{item.name}</a>
                        </Link>)}
                    </div>
                </div>
    
                <div>
                    <p className="font-semibold  dark:text-white">Talk With Us</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        {TalkWithus.map(item =><Link to={item.link}>
                       <a className=" transition-colors
                        duration-300 text-sm
                         dark:text-gray-300 dark:hover:text-blue-400 hover:underline
                          hover:text-gray-500">{item.name}</a>  
                       </Link>  )}
                       
                       
                         
                    </div>
                </div>
            </div>
                    
           
        </div>
    </footer>
    )
        
}

