import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Mainpage from "./page/Home/LandingPage/mainPage"
import About from "./page/about/About"
import LoginForm from "./page/login/loginForm"
import Profile from "./page//Profile/profile"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FileTest from "./testfile/filetest"
import Registration from './page/regisignsterForm/Registration';
import Loader from './components/Loader';
import ErrorPage from './components/ErrorPage';
import Contact from './page/contact/Contact'




const LazyLoader = React.lazy(()=> import("./page/exam/Exam"))

const App =()=>{
const [title, setTitle] = useState()
 
  const excludeRoutes = ['/login']

  useEffect(()=>{
  setTitle(document.title = "Exam Application")

  },[])

  return <div>
    <BrowserRouter>
   <Navbar/>
   <Routes>
<Route path='/login'
   element={<LoginForm  />}/> 

 <Route path='/profile' element={<Profile/>} ></Route>
    <Route path='/author/registration' element={<Registration>
    </Registration>}></Route>
    <Route path='/exam'  errorElement={<ErrorPage/>}
     element={
    <React.Suspense fallback={<Loader/>}>
      <LazyLoader/>
    </React.Suspense>}>
      <Route path=':categories' element={
        <React.Suspense fallback={<Loader/>}>
          <LazyLoader/>
        </React.Suspense>
      }></Route>

</Route>
   <Route path='*' element={<ErrorPage ></ErrorPage>}/>
    <Route path='/' errorElement={<ErrorPage/>} element={<Mainpage/>}></Route>
    <Route path='/home' errorElement={<ErrorPage/>} element={<Mainpage/>}></Route>
  
    <Route path='/about' element={<About></About>}> </Route>
    <Route path='/contact' element ={<Contact/>}></Route>
    {/*
    tesfile
    */}
    <Route path='/testfile/:categories' element ={<FileTest></FileTest>}></Route>
   </Routes>
   </BrowserRouter>
    
  
  </div>
}


export default App;
