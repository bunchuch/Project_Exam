import React, { useEffect, useState } from 'react'
import About from "./page/about/About"
import LoginForm from "./page/login/loginForm"
import Profile from "./page//Profile/profile"
import {BrowserRouter, Routes, Route,useLocation} from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import Contact from './page/contact/Contact'
import { ProtectedRoute } from './auth/ProtectedRoute'
import "./index.css"
import { File } from './File'
import { Render } from './Render'
import {QuestionRender} from "./page/exam/component/QuestionRender";
import { useSelector } from 'react-redux'
import { Loader } from './components/load/Loader'
import { GetHelpWithSigning } from './page/login/resetAccount'
import { Dashboard } from './page/dashboard/Dashboard'
import { Main } from './page/dashboard/componet/main'
import DashboardExam, { CreateExam, MQC } from './page/dashboard/componet/exam'
import User, { AddUser, StudentTable, UserTable } from './page/dashboard/componet/User'
import LandingPageLayout from './layout/landingPageLayout'
import Home from './page/LandingPage/Home'
import { ExamLayout } from './layout/ExamLayout'
import  Exam from "./page/exam/exam"



const LazyLoader = React.lazy(()=> import("./layout/ExamLayout"))


const App =()=>{
const [title, setTitle] = useState()
const location = useLocation()
const loading = useSelector((state)=> state.loader.loading)
 


console.log(loading)
  useEffect(()=>{
  const title  = location.pathname.slice(1,
                location.pathname.length)
  const getTitle =  title.replace("/", " - ")
  document.title = getTitle
  },[location.pathname])

  return <div className='App'>
   
   {/* {
    location.pathname == '/login' ? <></> : <Navbar/> 
    && location.pathname == "/login/reset-account" ? <></> : <Navbar/>  
   } */}
  
 { loading && <><Loader/></>}  
<Routes>



 {/* LandingPage */}
    <Route path='/' errorElement={<ErrorPage/>} element={<LandingPageLayout/>}>
      <Route path='/' errorElement={<ErrorPage/>} element={<Home/>}></Route>
      <Route path = "/home" element={<Home/>} ></Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/contact' element ={<Contact/>}></Route>
    </Route>


      <Route path='/login'
      element={<LoginForm/>}/> 
      <Route path='/login/reset-account' element={<GetHelpWithSigning/>}/>
      <Route path='/profile' element={
    <   ProtectedRoute>
      <Profile/>
      </ProtectedRoute>}></Route>
      
    <Route path='/exam'  errorElement={<ErrorPage/>} element={<ProtectedRoute><ExamLayout/></ProtectedRoute>} >
      <Route path='/exam' element={<Exam/>}></Route>
      <Route path='/exam/:name' element={<QuestionRender/> }></Route>
      </Route>

  

  
    {/*tesfile*/}
    <Route path='/file' element ={<File/>}>
    </Route>
    <Route path='/file/:name' element ={<Render/>}></Route>  


    <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} >
      <Route path='/dashboard' element={<Main/>}></Route>
      <Route path='dashboard/Teacher' element={<h1>Teacher</h1>}></Route>
      <Route path='dashboard/Student' element={<h1>Student</h1>}></Route>
      <Route path='dashboard/User' element={<User/>}>
        <Route path='/dashboard/User' element={<UserTable/>}></Route>
        <Route path='/dashboard/User/Student' element={<StudentTable/>}></Route>
        <Route path='/dashboard/User/Add' element={<AddUser/>}></Route>
      </Route>


      <Route path='dashboard/Exam' element={<DashboardExam/>}>
        <Route path='/dashboard/Exam/create' element={<CreateExam/>}>
        <Route path="/dashboard/Exam/create/MCQ" element={<MQC/>}></Route>
          <Route path='/dashboard/Exam/create/Blank' element={<h1>Blank</h1>}></Route>
          <Route path='/dashboard/Exam/create/Writing' element={<h1>Writing</h1>}></Route>
        </Route>
       
      </Route>
      
      <Route path='dashboard/Report' element={<h1>Roport</h1>}></Route>
    </Route>


    {/* Error page not found */}
    <Route path='/*' element={<ErrorPage ></ErrorPage>}/>

   </Routes>
  </div>
}


export default App;
