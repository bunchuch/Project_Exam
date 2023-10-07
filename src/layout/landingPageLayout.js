import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";




export default function LandingPageLayout () {
    return <div className="bg-gray-50 "> 
       <Navbar container={true}/>
    <Outlet/>
<Footer/>
    </div>
}