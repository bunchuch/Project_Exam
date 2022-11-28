import Left from "./Left"
import Right from "./Right"
import { sectionTwoData } from "../../../../data/data"



import React from "react"



const SectionTwo =({data})=>{
    return <div className="divide-y container mx-auto">
    {
data.map((value)=><>
            {value.one.map((items)=><Left key={items.id} title={items.header} desc={items.Description} img={items.img}/>)}
           {value.two.map((items)=><Right key={items.id} title={items.header} desc={items.Description} img={items.img}/>)}
           {value.three.map((items)=><Left key={items.id} title={items.header} desc={items.Description} img={items.img}/>)}
     </>)
    }
    </div>
    }
     
export default SectionTwo