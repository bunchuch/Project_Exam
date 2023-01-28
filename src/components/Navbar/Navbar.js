import React, { useEffect } from "react"


import PageComponet from "./ListComponet"
import { styleNavbar } from "../../style/style"
import { useSelector } from "react-redux"






const Navbar = ({style,setNavbar}) =>{

const IsLoggIn = useSelector( state=> state.auth.isLoggIn)


    return (

       < nav  className={styleNavbar.navStyle}>
        <div className={styleNavbar.container}>
            <div className={styleNavbar.container2}>
                <div className={styleNavbar.conatiner3}>
                <img src="https://img.icons8.com/color/48/null/infinity.png" 
                className={styleNavbar.img-style} alt="logo"/>
                <div className=" mt-2">
                <a className={styleNavbar["atag-style-nav"]} href="#">
                     TestQuiz  
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
        IsLoggIn && <div>Bunnara</div>
    }
</div>
          
        </div>
    </nav>
    )
}


export default Navbar