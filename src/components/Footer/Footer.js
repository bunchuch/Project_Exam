import React from "react";
import Icon from "../Icon";
import {BsFacebook,BsTelegram} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
export default function Footer(){
    return (
        <footer className="bg-[#142544] dark:bg-gray-900 text-white">
        <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <div className="justify-between space-y-2">
                    <h1 className="max-w-lg text-xl
                     font-semibold tracking-tight
                       xl:text-2xl dark:text-white"></h1>
                <a href="#" className="flex items-center space-x-4">
                    <img className="w-auto h-10 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu549tbz869AXxenZjBEY6IEmtMa-ymimFnIxkJnRR6gTgIfSptJcsJwLzfiUBAm-4FA&usqp=CAU" alt=""/>
                </a>
                <div className="flex space-x-3 py-4">
                    <Icon name={<BsFacebook/>} Size="1.6rem" color="gray"></Icon>
                    <Icon name={<BsTelegram/>} Size="1.6rem" color="gray"></Icon>
                    <Icon name={<HiOutlineMail/>} Size="1.6rem" color="gray"></Icon>
                  
                </div>
                <div>
                <p class="text-sm text-gray-500">© Copyright 2023. All Rights Reserved.</p>
                </div>
            </div>
                </div>
    
                <div>
                    <p className="font-semibold  dark:text-white">Quick Link</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a href="/" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                        <a href="/about" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                        <a href="/about" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                    </div>
                </div>
    
                <div>
                    <p className="font-semibold  dark:text-white">Talk With Us</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a href="/contact" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Contact us</a>
                        <a href="/contact" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Get in touch</a>
                        <a href="/contact" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Help</a>
                    </div>
                </div>
            </div>
                    
           
        </div>
    </footer>
    )
        
}

