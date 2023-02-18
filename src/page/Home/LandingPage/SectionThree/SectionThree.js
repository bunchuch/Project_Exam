import React, { useEffect } from "react"
import "../Herosection/Hero.css"
import Icon from "../../../../components/Icon"
import { sectionTwoData } from "../../../../data/data"
import { BiCool, BiData } from "react-icons/bi"
import {MdSyncProblem} from "react-icons/md"
import {SiHandshake} from "react-icons/si"



const Card = ({header,img,desc}) => {
        return (
                <div className="flex px-4  md:px-12 transition duration-500 ease-in-in  rounded-lg
          transform hover:-translate-y-3 shadow-sm shadow-cyan-500/10
          hover:scale-200 py-8 bg-white cursor-pointer border hover:border-transparent group
           dark:border-gray-700 dark:hover:border-transparent">
              <div className="space-y-3">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl  dark:text-white dark:bg-blue-500">
             <Icon name={img} Size="1.5rem" color="purple"></Icon>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{header}</h1>

                <p className="text-gray-500 dark:text-gray-300">
                  {desc}
                </p>

             
            </div>

            </div> 
                
        )
}

const SectionThree =({aos})=>{
  

    return <section data-aos="fade-down" className="bg-white dark:bg-gray-900 md:mt-0 mt-10">
        <div>
                <h1 className="text-2xl font-semibold text-gray-800
                 capitalize lg:text-3xl dark:text-white">What You will Get?</h1>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-purple-800 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-purple-800 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-purple-800 rounded-full"></span>
                </div>
            </div>
    <div className=" md:mx-auto md:py-10">
    

        <div className="grid grid-cols-1 gap-2 md:gap-8 mt-8 xl:mt-0 md:grid-cols-2 xl:grid-cols-2 md:py-0 py-3">
                {sectionTwoData.map((i)=><>
                     {   i.one.map((itme)=><Card header={itme.header} img={<BiData/>} desc={itme.Description}></Card>)}
                      {  i.two.map((itme)=><Card header={itme.header} img={<BiCool/>} desc={itme.Description}></Card>)}
                      {  i.three.map((itme)=><Card header={itme.header} img={<MdSyncProblem/>} desc={itme.Description}></Card>)}
                      {  i.four.map((itme)=><Card header={itme.header} img={<SiHandshake/>} desc={itme.Description}></Card>)}
                
                
                
                
                </> 
                
                
                )}
             
            
        </div>
    </div>
</section>
}

export default SectionThree
