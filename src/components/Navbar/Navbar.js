import React, { useEffect, useState } from "react"


import PageComponet from "./ListComponet"
import { styleNavbar } from "../../style/style"
import { useSelector } from "react-redux"
import Dropdown from "../Dropdown"
import {BiHomeAlt,BiGroup,BiGlobe, BiMenu} from "react-icons/bi"
import {AiOutlineQuestionCircle} from "react-icons/ai"
import Icon from "../Icon"




const Navbar = ({style,setNavbar}) =>{

const IsLoggIn = useSelector( state=> state.auth.isLoggIn)
const name = useSelector(state=> state.auth.username)


const list = ["logout"]

const list2 = ["home", "about","contact"]
const [open ,setOpen] = useState(false)
    return (
       < nav  className={ IsLoggIn ? styleNavbar["navStyle-login"] : styleNavbar["navStyle-noneLoggin"]}>
        <div className={styleNavbar.container}>
            <div className={styleNavbar.container2}>
                <div className={styleNavbar.conatiner3}>
                <img src={ IsLoggIn ? "https://upload.wikimedia.org/wikipedia/en/e/ed/PUC_Logo.png" 
               :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu549tbz869AXxenZjBEY6IEmtMa-ymimFnIxkJnRR6gTgIfSptJcsJwLzfiUBAm-4FA&usqp=CAU" }
                className={styleNavbar["img-style"]} alt="logo"/>
                </div>
                <div  className={styleNavbar["divtag-style-four"]}>
                    {
                        IsLoggIn ? <div>

                        </div> : <>
                     <PageComponet icon={<BiHomeAlt/>} link= "/" name="Home" />
                    <PageComponet icon={<BiGroup/>} link="/about" name="About us" />
                    <PageComponet icon={<AiOutlineQuestionCircle/>} link="/contact" name="Contact us"/>
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
                        <Icon name={<BiMenu/>} Size="1.5rem" color="purple"/>
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