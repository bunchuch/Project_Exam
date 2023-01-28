import React from "react"
import {personalinfo} from "../../data/data"
import Profilepicture from "./profile_pic"
import Rightsidebar from "./Rightsidebar/Rightsidebar"
import Headertag from "./Rightsidebar/rbnavbar"






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
        <div className=" bg-white-50 min-h-screen box-border font-inter tracking-wide">
            <div className="mx-auto p-2 max-w-[100rem] right-0 left-1 py-2">
            <Headertag></Headertag>
                <div className="flex flex-col md:flex-row md:mx-2 my-2 ">
                
                   {items}
                </div>
                {/* flex content */}
            </div>
            {/* container */}
        </div>
    </>

}







   
  export default Profile