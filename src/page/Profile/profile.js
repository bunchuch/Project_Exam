import React from "react"
import {personalinfo} from "../../data/data"
import Profilepicture from "./profile_pic"
import Rightsidebar from "./Rightsidebar/Rightsidebar"
import Headertag from "./Rightsidebar/rbnavbar"
import Icon from "../../components/Icon"
import Badges from "../../components/Badges"
import { BiChart,BiUserCircle,BiCool } from "react-icons/bi"
import {IoLocationOutline,IoMdGlobe} from "react-icons/io"





const NumberContext = React.createContext()

function Profile() {

const items = personalinfo.map((value)=>
<>
<Profilepicture fname={value.fname} 
                lname={value.lname}
                picture={value.profilePicture}
              />

<Rightsidebar
            info={value.info}
             desc={value.descritption} 
            arch={value.PersonalArchivement}/>

</>

)

    return <> 
    {
        personalinfo.map((items)=><section className="relative bg-gray-50 ">
        <div className="w-full flex flex-col max-w-4xl  top-10 md:top-20 absolute left-0 
        right-0 mx-auto bg-white z-10  rounded-md md:border-[1px]  shadow-lg shadow-cyan-500/10">
       
            {/* image */}
                <div className="w-full md:mt-10  flex md:flex-row flex-col "> 
                
                  {/* image */}
                  <div class="flex md:flex-col items-center py-5 md:space-x-0   space-x-4 px-10 md:py-2 ">
            <div className=" inline-flex items-center justify-center w-20 h-20 md:w-32 md:h-32
             bg-blue-100/100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
              </div>
              <div class="text-sm space-y-3 text-start md:text-center py-4 flex flex-col text-gray-500 dark:text-gray-400">
              <div className="text-[20px] text-slate-900 font-medium ">{items.fname+ items.lname}</div>
              <div className="flex flex-col space-y-3">

              <div className="flex">
          
          <Icon name={<IoMdGlobe/>} Size="1rem" color="gray"></Icon>
          <p className=""> {items.location}</p>
           </div>
        <div className="flex space-x-2">
        <Icon name={<BiUserCircle/>} Size="1rem" color="gray"/>
        <p className=""> {items.join}</p></div>
        </div>
              </div>
      
              </div>
    <div className=" flex  md:mx-10 space-y-3 flex-col px-3 items-center justify-center dark:text-white w-full">
        <div className="">
        <Badges background={false} text="Grade Information"/>
<div className="flex  flex-col justify-between md:grid md:grid-cols-4 gap-4 mt-2  rounded-[4px]  ">
    <div className="flex md:flex-col rounded-[4px] shadow-md shadow-orange-200/10 px-4  py-4 items-center md:justify-center bg-blue-200 relative  space-y-3">
    <h2 class="text-xl text-gray-800 dark:text-white mx-4 md:order-first order-last translate-x-5 ">{items.info[0].desc}</h2>
    <span class=" rounded-full md:-translate-x-5  text-xldark:bg-gray-800">
       <p className="text-gray-800  font-normal ">{items.info[0].title}</p>
        </span>
    </div>

    <div className="flex md:flex-col rounded-[4px] shadow-md shadow-orange-200/10 px-4  py-4 items-center md:justify-center bg-green-200 relative  space-y-3">
    <h2 class="text-xl px-3 text-gray-800 dark:text-white mx-4 md:order-first order-last  ">{items.info[1].desc}</h2>
    <span class=" rounded-full md:-translate-x-5  text-xldark:bg-gray-800">
       <p className="text-gray-800 font-normal ">{items.info[1].title}</p>
        </span>
    </div>
    <div className="flex md:flex-col rounded-[4px] shadow-md shadow-orange-200/10 px-4  py-4 items-center md:justify-center bg-yellow-200 relative  space-y-3">
    <h2 class="text-xl text-gray-800 dark:text-white mx-4 md:order-first order-last translate-x-5 ">{items.info[2].desc}</h2>
    <span class=" rounded-full md:-translate-x-5  text-xldark:bg-gray-800">
       <p className="text-gray-800  font-normal ">{items.info[2].title}</p>
        </span>
    </div>
    <div className="flex md:flex-col rounded-[4px] shadow-md shadow-orange-200/10 px-4  py-4 items-center md:justify-center
     bg-red-200 relative  space-y-3">
    <h2 class="text-xl text-gray-800 dark:text-white mx-4 md:order-first
     order-last translate-x-5 ">{items.info[3].desc}</h2>
    <span class=" rounded-full md:-translate-x-5  text-xl dark:bg-gray-800">
       <p className="text-gray-800  font-normal ">{items.info[3].title}</p>
        </span>
    </div>
  
</div>
<div className="py-5 space-y-3 ">
            <Badges text="Description" background={false}/>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full ">
                    <p className="mb-4 text-[14px] text-gray-800 leading-relaxed 
                     bg-gray-100 py-4 px-4  rounded-sm">
                    {items.descritption.map((i)=>
                    <div>
                      <p>{i.header}</p>
                      <p>{i.desc}</p>
                    </div>
                   )}
                    </p>
                  </div>
                </div>
              </div>
        </div>
      
    </div>
             {/* image */}
           
                 
          
                </div>
                <div className="flex">
                  <div className="bg-purple-800/100 w-full shadow-md shadow-orange-200 py-[2px] rounded-bl-md "></div>
                  <div className="bg-yellow-300/100 w-full shadow-md shadow-orange-200 py-[2px] rounded-br-md"></div>
                </div>
                
              
    {/* image */}
        </div>
        </section>
        
        )
    }

    </>

}







   
  export default Profile