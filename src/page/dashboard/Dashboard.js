import Navbar from "../../components/Navbar/Navbar"
import Panel from "./componet/Panel"
import LeftSideBar from "./componet/LeftSideBar"
import Container from "../../components/Container"
import { useSelector } from "react-redux"








export const Dashboard = () =>{
   
const IsLogin = useSelector(state => state.auth.isLogIn)
  return <>
  <Navbar IsLoggIn={IsLogin}></Navbar>
  <Container>
  <div className=" w-full absolute   flex flex-row h-full ">
  <LeftSideBar></LeftSideBar>
  <Panel></Panel>
  </div>
  </Container>
 
  
  </>
    
    
}