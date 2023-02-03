import React, { useEffect } from "react"


import PageComponet from "./ListComponet"
import { styleNavbar } from "../../style/style"
import { useSelector } from "react-redux"
import Dropdown from "../Dropdown"






const Navbar = ({style,setNavbar}) =>{

const IsLoggIn = useSelector( state=> state.auth.isLoggIn)
const name = "Bunnara"
const list = ["class","profile","find","logout"]
    return (

       < nav  className={styleNavbar.navStyle}>
        <div className={styleNavbar.container}>
            <div className={styleNavbar.container2}>
                <div className={styleNavbar.conatiner3}>
                <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/PUC_Logo.png" 
                className={styleNavbar["img-style"]} alt="logo"/>
                <div className=" mt-2">
                <a className={styleNavbar["atag-style-nav"]} href="#">
                     PUCTAKHMAU
                    </a>
                </div>
                 
                </div>
    
              
            
            </div>
           
            <div  className={styleNavbar["divtag-style-four"]}>
                    <PageComponet name="Home" img="https://img.icons8.com/sf-regular/25/1D10B2/home-page.png"/>
                    <PageComponet name="About us" img="https://img.icons8.com/windows/25/1D10B2/info-popup.png"/>
                    <PageComponet name="Contact us" img="https://img.icons8.com/material-outlined/25/1D10B2/address-book.png"/>
            </div>
<div>
    {
        !IsLoggIn && <a href="#" className={styleNavbar["atag-nav-list-style"]}>Sign Up</a>

    }
    {
        IsLoggIn && <Dropdown
        name={
            <div className="flex items-center justify-center w-8 h-8 font-bold rounded-full select-none text-cyan-800 bg-cyan-100">
            {name.charAt(0)}
        </div>
        }
        list={list}
        >

        </Dropdown>
        
      
    }
</div>
          
        </div>
    </nav>
    )
}


export default Navbar