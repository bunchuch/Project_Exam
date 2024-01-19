import React from 'react'
import LoginForm from "./page/login/loginForm"
import {Routes, Route,useLocation, useParams} from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import { ProtectedRoute } from './auth/ProtectedRoute'
import { File } from './test/File'
import { Render } from './test/Render'
import { useSelector } from 'react-redux'
import { Loader } from './components/load/Loader'
import { GetHelpWithSigning } from './page/login/resetAccount'
import { Dashboard } from './page/dashboard/Dashboard'
import { Main } from './page/dashboard/home/main'
import User from './page/dashboard/user/User'
import RegisterUser from './page/dashboard/user/RegisterUser'
import Report from './page/dashboard/report/Report'
import RegisterStudent from './page/dashboard/student/RegisterStudent'
import UserProfile from './page/dashboard/user/userProfile'
import CreateExam from './page/dashboard/exam/CreateExam'
import GroupInfo from './page/dashboard/Group/GroupInfo'
import ExamInfo from './page/dashboard/exam/examInfo'
import ViewQuestion from './page/dashboard/question/viewQuestion';
import CreateGroup from './page/dashboard/Group/CreateGroup';
import CreateQuestion from './page/dashboard/question/createQuestion';
import { ReportExam } from './page/dashboard/examReport/examReport';
import { QuizTable } from './page/dashboard/examReport/quizTable';
import StudentProfile from './page/dashboard/student/studentProfile';
import GroupHeader from './page/dashboard/Group/GroupHeader';
import Exam from './page/dashboard/exam/Exam';
import StudentReport from './page/dashboard/examReport/studentReport';
import ExamHeader from './page/dashboard/exam/ExamHeader';


const App =()=>{
const loading = useSelector((state)=> state.loader.loading)



  return <div className='App'>
 { loading ? <Loader/> : null }  
    <Routes>
      <Route path='/login' element={<LoginForm/>}/> 
      <Route path='/login/reset-account' element={<GetHelpWithSigning/>}/>

    <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} >
      <Route path='/dashboard' element={<Main/>}></Route>
      
      <Route path='dashboard/User' element={<User/>}></Route>
      <Route path='/dashboard/User/Add'  element={<ProtectedRoute><RegisterUser/> </ProtectedRoute>}></Route>
      <Route path='/dashboard/User/:id'  element={<ProtectedRoute><UserProfile/> </ProtectedRoute>}></Route>
      <Route path='/dashboard/User/update/:id'  element={<ProtectedRoute><RegisterUser/> </ProtectedRoute>}></Route>

      <Route path='/dashboard/Group' element={<ProtectedRoute><GroupHeader/></ProtectedRoute>}></Route>
      <Route path='/dashboard/Group/:id' element={<ProtectedRoute><GroupInfo/></ProtectedRoute>}> </Route>

      <Route path='/dashboard/Exam' element={<ProtectedRoute><ExamHeader/></ProtectedRoute>}>
        <Route path='/dashboard/Exam/:id/report' element={<ProtectedRoute><h1><ReportExam/></h1></ProtectedRoute>}></Route>
        <Route path='/dashboard/Exam/:id/quiz' element={<ProtectedRoute><QuizTable/></ProtectedRoute>}></Route>
      </Route>
      <Route path='/dashboard/Exam/:id' element={<ProtectedRoute><ExamInfo/></ProtectedRoute>} ></Route>
      <Route path='/dashboard/create-new-student' element={<ProtectedRoute><RegisterStudent/></ProtectedRoute>}></Route>
      <Route path='/dashboard/create-new-group' element={<ProtectedRoute><CreateGroup/></ProtectedRoute>}></Route>
      <Route path='dashboard/Report' element={<ProtectedRoute><Report/></ProtectedRoute>}></Route>
      <Route path='/dashboard/Group/create-exam' element={<ProtectedRoute><CreateExam/></ProtectedRoute>}></Route>
      <Route path='/dashboard/exam/update/:id' element={<ProtectedRoute><CreateExam/></ProtectedRoute>}></Route>
      <Route path='/dashboard/group/update/:id' element={<ProtectedRoute><CreateGroup/></ProtectedRoute>}></Route>
      <Route path='/dashboard/Quiz/:id/:title' element={<ProtectedRoute><CreateQuestion/></ProtectedRoute>}></Route>
      <Route path='/dashboard/Question/:qid/:title/update' element={<ProtectedRoute><CreateQuestion/></ProtectedRoute>}></Route>
      <Route path='/dashboard/Question/:id/view' element={<ProtectedRoute><ViewQuestion/></ProtectedRoute>}/>
      <Route path='/dashboard/student/report/:eid' element={<ProtectedRoute><StudentReport/></ProtectedRoute>}/>
      <Route path='/dashboard/student/:id' element={<ProtectedRoute><StudentProfile/></ProtectedRoute>}/>
      <Route path='/dashboard/update-student/:stuid' element={<ProtectedRoute><RegisterStudent/></ProtectedRoute>}></Route>
    </Route>
    
   

    {/* Error page not found */}
    <Route path='/*' element={<ErrorPage ></ErrorPage>}/>
     
     {/*tesfile*/}
    {/* <Route path='/file' errorElement={<ErrorPage/>} element ={<File/>}>
    </Route>
    <Route path='/file/:name' errorElement={<ErrorPage/>} element ={<Render/>}></Route>   */}

   </Routes>





  </div>
}


export default App;
