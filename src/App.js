import React from 'react'
import ExamSide from './test/component/exam/Exam';
import Mainpage from './test/component/LandingPage/mainPage';
import LoginForm from './test/component/login/loginForm';
import Profile from "./test/component/Profile/profile"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FileTest from "./testfile/filetest"
import About from "./test/component/about/about"
import Registration from './test/component/regisignsterForm/Registration';

const App =()=>{
  return <div>
    <BrowserRouter>
   <Routes>
    <Route path='/author' element={<LoginForm/>}></Route>
    <Route path='/author/registration' element={<Registration></Registration>}></Route>
   </Routes>
    </BrowserRouter>
  
    <BrowserRouter>
   <Routes>
    

    <Route path='/exam' element={<ExamSide/>}></Route>
    <Route path='/main' element={<Mainpage/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/testfile' element ={<FileTest></FileTest>}/>
   </Routes>
   </BrowserRouter>
    
  
  </div>
}


export default App;
