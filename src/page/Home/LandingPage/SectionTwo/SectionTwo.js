import SectionContainer from "./SectionContainer"
import { sectionTwoData } from "../../../../data/data"



import React from "react"



const SectionTwo =({data})=>{
    return <div className="divide-y container mx-auto">
    {
data.map((value)=><>
            {value.one.map((items)=><SectionContainer 
            key={items.id} title={items.header} 
            desc={items.Description}
             img={items.img}/>)}

         
        
     </>)
    }
    </div>
    }
     
export default SectionTwo