import React from "react"
import Container from "../../components/Container"
import Navbar from "../../components/Navbar/Navbar"
import LeftSideBar from "./componet/LeftSideBar"
import Panel from "./componet/Panel"

export const Dashboard = () =>{
    return <>
    <Navbar></Navbar>
    <Container>
        <div className=" w-full absolute   flex flex-row h-full ">
                <LeftSideBar></LeftSideBar>
                <Panel></Panel>         
        </div>
    </Container>
    </> 
    
    
}