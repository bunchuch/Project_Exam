import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionAsync, getQuestionNameAsync } from "./redux/apicall";
import { Link, json, useParams } from "react-router-dom";
import {Loader} from  "./components/load/Loader"
import { Render } from "./Render";
import {QuizCard}  from  "./exam/component/QuizCard"
import Container  from "./components/Container";
import { examstyle } from "./style/style";
import Timer from "./components/Timer"
import ExamStatus from "./exam/component/ExamStaute";



export const File = () =>{
        const {name} = useParams()
        const [get ,setGet] = useState()
        const [show ,setShow] = useState(false)
        const quiz = useSelector((state)=> state.quizs)
        const dispatch = useDispatch()
        let item = []
        useEffect(() => {
            try{
                dispatch(getQuestionAsync())
            }catch(e){
                alert("Error")
            }
         
        }, [dispatch]);

     
      

      console.log(quiz.pending)
      

    return <> 
      <Container>
      <div className={examstyle.quiz.main}>
          <div className={examstyle.quiz.quizboxdiv}>
            <div className={name ? `flex md:gap-2` : "gap-1 flex md:gap-2 justify-end w-full"}>
            <Timer initialMinute={40} in  ></Timer>
            </div>
      
          </div>
        </div>
  <div className={examstyle.task.main}>
      {
        quiz.pending ? <div><Loader/></div> : 
        <>{ quiz.task.length === 0 && quiz.task === null ? <></>
        :<div className={examstyle.quiz.quizboxgrid}>
          {
          quiz.task.map((value)=><div>
            <QuizCard
            desc={value.type}
            title={value.name}
            progressBar={value.progress}
            link={`/file/${value.name}`}
            > 
          
            </QuizCard>    
 </div>)
        }
        </div> 

        }</>
      }
      </div>
     
      </Container>
     
    </>
}

