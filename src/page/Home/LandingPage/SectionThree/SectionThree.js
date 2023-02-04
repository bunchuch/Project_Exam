import React from "react"
import "../Herosection/Hero.css"
import { sectionTwoData } from "../../../../data/data"


const Card = ({header,img,desc}) => {
        return (
                <div className="bg-slate-700">
                <div class="px-12 transition duration-500 ease-in-in translate-x-2 -translate-y-2
          transform hover:-translate-y-3 shadow-sm shadow-cyan-500/10
          hover:scale-200 py-8 bg-white cursor-pointer border hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">
                    <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-1 ring-gray-300" 
                    src={img} alt=""/>

                    <div class="mt-4 sm:mx-4 sm:mt-0 flex items-center">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize font-teko md:text-2xl dark:text-white">{header}</h1>
                    </div>
                </div>

                <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 ">{desc}</p>

                <div class="flex mt-4 -mx-2">
                        <button className="bg-purple-900 mx-2 text-white py-2 px-3 shadow-md shadow-cyan-500/10 dark:text-gray-300 hover:text-gray-500
                         dark:hover:text-gray-300 group-hover:text-white">
                          Learn More
                        </button>
                   
                  
                </div>
            </div> 
                </div>
        )
}

const SectionThree =()=>{
    return <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our <span class="text-blue-500">Executive Team</span></h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                {sectionTwoData.map((i)=><>
                     {   i.one.map((itme)=><Card header={itme.header} img={itme.img} desc={itme.Description}></Card>)}
                      {  i.two.map((itme)=><Card header={itme.header} img={itme.img} desc={itme.Description}></Card>)}
                      {  i.three.map((itme)=><Card header={itme.header} img={itme.img} desc={itme.Description}></Card>)}
                      {  i.three.map((itme)=><Card header={itme.header} img={itme.img} desc={itme.Description}></Card>)}
                
                
                
                
                </> 
                
                
                )}
             
            
        </div>
    </div>
</section>
}

export default SectionThree
