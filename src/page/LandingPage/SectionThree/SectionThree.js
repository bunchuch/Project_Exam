import { sectionTwoData } from "../../../../data/data"
import { FcAddImage, FcAdvertising, FcBarChart, FcCalendar } from "react-icons/fc"
import { Card } from "../../../../components/Card"
import "../../../../style/style.css"
const SectionThree =({aos})=>{
  
    return <section data-aos="fade-down" className="bg-yellow-100 py-4 px-6 rounded-xl font-mono
     dark:bg-gray-900 md:mt-0 mt-10">
        <div>
                <h1 className="text-2xl font-semibold text-gray-800
                 capitalize lg:text-3xl dark:text-white">What You will Get?</h1>
                <div className="mt-2">
                    <span className="inline-block w-40 h-1
                     bg-purple-800 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1
                     bg-red-800 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1
                     bg-yellow-500 rounded-full"></span>
                </div>
            </div>
    <div className=" md:mx-auto md:py-10">
        <div className="grid grid-cols-1 gap-2 md:gap-8 
        mt-8 xl:mt-0 md:grid-cols-2 xl:grid-cols-2 md:py-0 py-3">
                {sectionTwoData.map((i)=><>
                     {i.one.map((itme)=><Card  title={itme.header} 
                     icons={<FcBarChart/>} desc={itme.Description}></Card>)}
                      {i.two.map((itme)=><Card  title={itme.header}
                       icons={<FcCalendar/>} desc={itme.Description}></Card>)}
                      {i.three.map((itme)=><Card  title={itme.header}
                       icons={<FcAddImage/>} desc={itme.Description}></Card>)}
                      {i.four.map((itme)=><Card  title={itme.header}
                      icons={<FcAdvertising/>} desc={itme.Description}></Card>)}              
                </> 
                )}
        </div>
    </div>
</section>
}

export default SectionThree
