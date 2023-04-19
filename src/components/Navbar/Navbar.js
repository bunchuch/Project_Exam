import React, { useEffect, useState } from "react"
import NavbarList from "./NavbarList"
import { styleNavbar } from "../../style/style"
import { useSelector } from "react-redux"
import Dropdown from "../Dropdown"
import {BiHomeAlt,BiGroup,BiGlobe, BiMenu, BiQuestionMark, BiPencil, BiLogOut} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import Icon from "../Icon"




const Navbar = ({style,setNavbar}) =>{

const IsLoggIn = useSelector( state=> state.auth.isLoggIn)
const name = useSelector(state=> state.auth.username)


const list = [{"name":`profile`,"icon":<CgProfile/>},{"name":`exam`,"icon":<BiPencil/>},{"name":"sign out","icon":<BiLogOut/>}]
const navbarlink = [{name:"Home",link: "home",icon: <BiHomeAlt/>},
{name:"About us" ,link:"about",icon: <BiGroup/>},{name:"Contact us",link:"contact", icon: <BiQuestionMark/>}]

const list2 =  [ {"name":"home","icon":<BiHomeAlt/>}, {"name":"about","icon":<BiQuestionMark/>},
{"name":"contact", "icon":<BiGroup/>},{"name":'exam', "icon":<BiPencil/>}]
const [open ,setOpen] = useState(false)
    return (
       < nav  className={ IsLoggIn ? styleNavbar["navStyle-login"] : styleNavbar["navStyle-noneLoggin"]}>
        <div className={styleNavbar.container}>
            <div className={styleNavbar.container2}>
                <div className={styleNavbar.conatiner3}>
                <img src={ IsLoggIn ? "https://upload.wikimedia.org/wikipedia/en/e/ed/PUC_Logo.png" 
               :"https://upload.wikimedia.org/wikipedia/en/e/ed/PUC_Logo.png" }
                className={styleNavbar["img-style"]} alt="logo"/>
                </div>
                <div  className={styleNavbar["divtag-style-four"]}>
                    {
                        IsLoggIn ? null : <>
                        {navbarlink.map(item => 
                        <NavbarList icon={item.icon} link={item.link} 
                        name={item.name}/>)}
                        </>
                    }
            </div>
            </div> 
<div className="flex flex-row">
    {
        IsLoggIn ? <Dropdown
        name={
            <div className="flex items-center justify-center 
            w-8 h-8 font-bold rounded-full select-none text-cyan-800 bg-cyan-100">
            {name.username.slice(0,2)}
        </div>
        }
        list={list}
        >

        </Dropdown>:<div className="">
            <div className="block md:hidden" >
                <Dropdown name={
                    <div className="">
                        <Icon name={<BiMenu/>} Size="1.5rem" color="white"/>
                    </div>
                }
                list={list2}
                >

                </Dropdown>
            </div>
        <div className="md:flex md:flex-row items-center -mx-4 border-[1px]
         border-purple-500 px-4 rounded-lg py-1.5 hidden space-x-3">
                <div className="font-medium flex">
                <span className="inline-flex space-x-1"><Icon name={<BiGlobe/>} 
                Size="1.2rem" color="purple"></Icon> En</span>
               </div>
        </div>
        </div>
       
        

    }
    
</div>
          
        </div>
    </nav>
    )
}


export default Navbar