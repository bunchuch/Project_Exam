import React from "react"
import { personalinfo } from "./../../../data/data"
import Navbar from "../Navbar/Navbar"
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
        <Navbar></Navbar>
        <div className=" bg-white-50 min-h-screen box-border font-inter tracking-wide">
            <div className="container mx-auto p-2 max-w-8xl right-0 left-1 py-2">
            <Headertag></Headertag>
                <div className="xl:flex xl:flex-cols  mx-2 my-2 md:max-lg:flex-col md:flex md:flex-row">
                
                   {items}
                </div>
                {/* flex content */}
            </div>
            {/* container */}
        </div>
    </>

}







   
  export default Profile