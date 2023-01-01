import React, { Fragment, useEffect, useState } from "react";
import { useActionData } from "react-router-dom";
import Forminput from "./component/Forminput";
import GroupList from "./component/GroupList";
import Selection from "../../components/Selection";

export default function Registration (){
const [data,setData] = useState({
})
const gender = ['Male','Female']


const handleValidation =() =>{
  
}


const handleChange = (event)=>{
  const name = event.target.name
  const value = event.target.value
  setData(data=>({...data,[name]:value}))
    }
const handleOnsubmit =(event)=>{
event.preventDefault()
console.log(data)


    }

  
    return <section className="bg-blue-50 h-screen px-5 py-4 overflow-y-auto">
            
    <div className="registration_container_style--01 bg-white">
        <div className="divstlye_registrationOfheader_style--01-1">
            <h1 className="registration_header_style--headertext--02">
                Registration Student</h1>
        </div>
            <form onSubmit={handleOnsubmit}>
                <div className="flex px-2">
                <div className="registration_box_style--basisstyle-03">
                <h1 className="regist_headerOftype_style--header-box--04">Student</h1>
                <div className="flexofinputtpye_registration_flex-style--04">
                 <Forminput name="fname"
                  value={data.fname} 
                   onchange={handleChange}
                    label="First Name"></Forminput>
                   <Forminput name="lname"
                    value={data.lname}
                     onchange={handleChange} 
                     label="Last Name"></Forminput>
                </div>
                
                <span
                 className="flexofinputtpye_registration_flex-style--04">
                    <Forminput
                      label="Date of Birth"
                       type="date"
                       name="date"
                       value={data.date}
                       onchange={handleChange}
                       />
                    <Forminput 
                    label="Age" 
                    type="number"
                    name="age"
                    value={data.age}
                    onchange={handleChange}
                    />
                </span>
                <div className="py-2">
                    <label className="regist_lablestyle-style-05">Gender</label>
                <Selection value={data.gender} onchange={handleChange} 
                         style="select_gender-rigstration-form_style-02"
                         option={gender}/>
                </div>
          

                <h1 className="regist_headerOftype_style--header-box--04">
                    Parent</h1>
                <div className="flexofinputtpye_registration_flex-style--04">
                    <Forminput  label="Parent Name"
                    name="parent_name"
                    value={data.parentname}
                    onchange={handleChange}
                    ></Forminput>
                    <Forminput 
                    label="Parent Phone"
                    value={data.parentphone}
                    name="parentphone"
                    onchange={handleChange}
                    />
                </div>
                <Forminput type="email"
                 label="Email"
                 value={data.parentemail}
                 name="parentemail"
                 onchange={handleChange}
                 />
                </div>
                <div className="registration_box_style--basisstyle-03">
                    <h1 className="regist_headerOftype_style--header-box--04">Student information</h1>
                    <div className="flexofinputtpye_registration_flex-style--04">
                        <Forminput 
                        label="Login Username"
                         type="text"
                         onchange={handleChange}
                         name="loginusername"
                         value={data.fname && data.lname? 
                            data.loginusername = `${data.fname} _ ${data.lname}`
                             : data.loginusername = null
                         }
                         />
                        <Forminput
                        onchange={handleChange}
                        name="password"
                        value={data.password}
                         label="Password"
                          type="text"/>
                    </div>

                    <div className="flexofinputtpye_registration_flex-style--04">
                        <Forminput 
                         onchange={handleChange}
                         name="StuEmail"
                         value={data.stuEmail}
                          label="Personal Email"
                           type="text"
                        />
                        <Forminput 
                         onchange={handleChange}
                         name="stuPhone"
                         value={data.stuPhone}
                           type="text"
                        label="Personal Phone"/>
                    </div>

                    <h1 className="regist_headerOftype_style--header-box--04">Address</h1>
                   
                    <div className="flexofinputtpye_registration_flex-style--04">
                        <Forminput
                        name="location_1" 
                        onchange={handleChange}
                        value={data.location_1}
                        label="City/Town"/>
                        <Forminput label="City/Provice"></Forminput>
                    </div>

                    <h1 className="regist_headerOftype_style--header-box--04">Description</h1>
                   <textarea id="message" rows="4" className="regist_textarea-style0-06"
                   name ="desc"
                   value={data.descrtion}
                    onChange={handleChange}
                    ></textarea>

                </div>


</div>
<div className="flex">
    <div className="basis-[70%] registration_box_style--basisstyle-03 overflow-y-auto">
    <h1 className="regist_headerOftype_style--header-box--04">Select Group</h1>
    
<GroupList
name="GroupName"
value={data.GroupName}
onchange={handleChange}></GroupList>

    </div>
<div className="basis-[30%]">
    <div className="space-x-4 space-y-4 md:flex-col md:justify-center">
    <button className="regist_btnstyle-submint-07"
     type="submit">Create</button>
<button className="regist_btnstyle-submint-07">reset</button>
    </div>

</div>

</div>
            </form>
        
    </div>
    
    
    </section>
}
