import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Mainpage from "./page/Home/LandingPage/mainPage"
import LoginForm from "./page/login/loginForm"
import About from "./page/about/About"
import Profile from "./page//Profile/profile"
import {BrowserRouter, Routes, Route,Switch} from 'react-router-dom'
import FileTest from "./testfile/filetest"
import Registration from './page/regisignsterForm/Registration';
import Loader from './components/Loader';
import ErrorPage from './components/ErrorPage';
import TaskArea from './page/exam/component/QuestionBox'
import { useSelector } from 'react-redux'



const LazyLoader = React.lazy(()=> import("./page/exam/Exam"))
const LazyLoaderWriting = React.lazy(()=>import("./page/exam/component/Writing"))
const LazyLoaderListening = React.lazy(()=> import("./page/exam/component/Listening"))





const App =()=>{
const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
const isloadding = useSelector(state => state.loading.loader)
console.log(isLoggedIn)
console.log(isLoggedIn)


const [title, setTitle] = useState()
  let [isNavbarHidden, setIsNavBarHidden] = useState(false)
  let [isFootBig, setIsFooter] = useState(false)


  useEffect(()=>{
setTitle(document.title = "Exam Application")
  },[])

  return <div>
    {isloadding && <Loader/>}
    <BrowserRouter>
    { isNavbarHidden ? null : <Navbar/>}
   <Routes>
 { !isLoggedIn && <Route path='/login'
   element={<LoginForm setNavbar={setIsNavBarHidden} />}/> }

{isLoggedIn && <Route path='/profile' element={<Profile/>}></Route>}
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
   <Route path='*' element={<ErrorPage setNavbar={setIsNavBarHidden}></ErrorPage>}/>
    <Route path='/' errorElement={<ErrorPage/>} element={<Mainpage/>}></Route>
  
    <Route path='/about' element={<About></About>}></Route>
    {/*
    tesfile
    */}
    <Route path='/testfile' element ={<FileTest></FileTest>}></Route>
   </Routes>
   </BrowserRouter>
    
  
  </div>
}


export default App;
