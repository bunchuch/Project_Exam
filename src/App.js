import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Mainpage from "./page/Home/LandingPage/mainPage"
import LoginForm from "./page/login/loginForm"
import About from "./page/about/About"
import Profile from "./page//Profile/profile"
import {BrowserRouter, Routes, Route,Switch} from 'react-router-dom'
import FileTest from "./testfile/filetest"
import Registration from './page/regisignsterForm/Registration';
import Loader from './components/Loader';
import Input from './testfile/Input';
import QuestionBox from './page/exam/component/QuestionBox';
import ErrorPage from './components/ErrorPage';


const LazyLoader = React.lazy(()=> import("./page/exam/Exam"))
const LazyLoaderWriting = React.lazy(()=>import("./page/exam/component/Writing"))
const LazyLoaderListening = React.lazy(()=> import("./page/exam/component/QuestionBox"))
const App =()=>{

  let [isNavbarHidden, setIsNavBarHidden] = useState(false)
  let [isFootBig, setIsFooter] = useState(false)

  return <div>
    <BrowserRouter>
    { isNavbarHidden ? null : <Navbar/>}
   <Routes>
    <Route path='/login' element={<LoginForm setNavbar={setIsNavBarHidden} />}></Route>
    <Route path='/author/registration' element={<Registration></Registration>}></Route>
    <Route path='/exam' errorElement={<ErrorPage/>} element={
    <React.Suspense fallback={<Loader/>}>
      <LazyLoader/>
    </React.Suspense>}>
      <Route path='writing' element={
      <React.Suspense fallback={<Loader/>}>
        <LazyLoaderWriting/>
      </React.Suspense>
   }></Route>
      <Route path='listening' element={
        <React.Suspense fallback={<Loader/>}>
          <LazyLoaderListening/>
        </React.Suspense>
      }></Route>
</Route>
   <Route path='*' element={<ErrorPage setNavbar={setIsNavBarHidden}/>}/>
    <Route path='/' errorElement={<ErrorPage/>} element={<Mainpage/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/testfile/:element' element ={<FileTest></FileTest>}>
      <Route path ="number" element={<Loader/>}/>
      <Route path='input' element={<QuestionBox/>}/>
      </Route>
   </Routes>
   </BrowserRouter>
    
  
  </div>
}


export default App;
