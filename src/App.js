import React, { useEffect, useState } from 'react'
import About from "./page/about/About"
import LoginForm from "./page/login/loginForm"
import Profile from "./page//Profile/profile"
import {Routes, Route,useLocation} from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import Contact from './page/contact/Contact'
import { ProtectedRoute } from './auth/ProtectedRoute'
import { File } from './test/File'
import { Render } from './test/Render'
import {QuestionRender} from "./page/exam/component/QuestionRender";
import { useSelector } from 'react-redux'
import { Loader } from './components/load/Loader'
import { GetHelpWithSigning } from './page/login/resetAccount'
import { Dashboard } from './page/dashboard/Dashboard'
import { Main } from './page/dashboard/home/main'
import DashboardExam from './page/dashboard/exam'
import User from './page/dashboard/user/User'
import LandingPageLayout from './layout/landingPageLayout'
import Home from './page/LandingPage/Home'
import { ExamLayout } from './layout/ExamLayout'
import  Exam from "./page/exam/exam"
import Student from './page/dashboard/student/Student'
import RegisterUser from './page/dashboard/user/RegisterUser'
import Report from './page/dashboard/report/Report'
import RegisterStudent from './page/dashboard/student/RegisterStudent'
import UserProfile from './page/dashboard/user/userProfile'
import Create from './page/dashboard/exam/Create'
import GroupInfo from './page/dashboard/exam/GroupInfo'
import ExamInfo from './page/dashboard/exam/examInfo'
const LazyLoader = React.lazy(()=> import("./layout/ExamLayout"))


const App =()=>{
const [title, setTitle] = useState()
const location = useLocation()
const loading = useSelector((state)=> state.loader.loading)
 


  useEffect(()=>{
  const title  = location.pathname.slice(1,
                location.pathname.length)
  const getTitle =  title.replace("/", " - ")
  document.title = getTitle
  },[location.pathname])

  return <div className='App'>
 { loading && <><Loader/></>}  
<Routes>



 {/* LandingPage */}
    {/* <Route path='/' errorElement={<ErrorPage/>} element={<LandingPageLayout/>}>
      <Route path='/' errorElement={<ErrorPage/>} element={<Home/>}></Route>
      <Route path = "/home" element={<Home/>} ></Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/contact' element ={<Contact/>}></Route>
    </Route> */}


      <Route path='/login'
      element={<LoginForm/>}/> 
      <Route path='/login/reset-account' element={<GetHelpWithSigning/>}/>
    
      
    <Route path='/exam'  errorElement={<ErrorPage/>} 
    element={<ProtectedRoute><ExamLayout/></ProtectedRoute>} >
      <Route path='/exam' element={<Exam/>}></Route>
      <Route path='/exam/:name' element={<QuestionRender/> }></Route>
      <Route path='/exam/profile' element={
      <ProtectedRoute>
     <h2>Profile</h2>
      </ProtectedRoute>}></Route>
      </Route>
    <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} >
      <Route path='/dashboard' element={<Main/>}></Route>
      <Route path='dashboard/Student'
       element={<ProtectedRoute><Student/></ProtectedRoute>}></Route>
      <Route path='dashboard/Student/Create' 
      element={<ProtectedRoute><RegisterStudent/></ProtectedRoute>}></Route>
      <Route path='dashboard/User/' element={<User/>}>
        {/* <Route path='/dashboard/User' element={<UserTable/>}></Route>
        <Route path='/dashboard/User/Student' element={<StudentTable/>}></Route> */}
      </Route>
      <Route path='/dashboard/User/Add' 
      element={<ProtectedRoute><RegisterUser/>
      </ProtectedRoute>}></Route>
      <Route path='/dashboard/User/:id' 
      element={<ProtectedRoute><UserProfile/>
      </ProtectedRoute>}></Route>


      <Route path='dashboard/Exam' element={<DashboardExam/>}>
        {/*<Route path="/dashboard/Exam/create/MCQ" element={<MQC/>}></Route>
          <Route path='/dashboard/Exam/create/Blank' element={<h1>Blank</h1>}></Route>
          <Route path='/dashboard/Exam/create/Writing' element={<h1>Writing</h1>}></Route>
        </Route> */}
       
      </Route>
      <Route path='/dashboard/Exam/:id' element={<ProtectedRoute><GroupInfo/></ProtectedRoute>}>
      </Route>
      <Route path='/dashboard/examsh/:id' element={<ProtectedRoute><ExamInfo/></ProtectedRoute>}></Route>
      <Route path='/dashboard/Exam/:id/create' element={<ProtectedRoute><Create/></ProtectedRoute>}></Route>
      <Route path='dashboard/Report' element={<ProtectedRoute><Report/></ProtectedRoute>}></Route>
    </Route>

    

    {/* Error page not found */}
    <Route path='/*' element={<ErrorPage ></ErrorPage>}/>
     
     {/*tesfile*/}
    <Route path='/file' element ={<File/>}>
    </Route>
    <Route path='/file/:name' element ={<Render/>}></Route>  

   </Routes>





  </div>
}


export default App;
