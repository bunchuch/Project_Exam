import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Loader } from "./components/load/Loader";
import { examStatusStyle, examstyle } from "./style/style";
import Container from "./components/Container";
import Instruction from "./components/Instruction";
import Writing from "./components/Writing";
import Header from "./exam/component/Header";
import FillBlanks from "./components/FillBlank";
import { buttonstyle } from "./style/style";
import Icon from "./components/Icon";
import { SmallSpinner } from "./components/load/SmallSpinner";
import { BiLeftArrowAlt ,BiRightArrowAlt } from "react-icons/bi";
import ExamStatus from "./exam/component/ExamStaute";
import { Input } from "./components/Input";
import { getQuestionNameAsync } from "./redux/apicall";


export const Render = () => {
    const {name} = useParams()
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const quizId = useSelector((state)=> state.quizs)
    const [currentQuestion ,setCurrentQuestion] = useState(0)
    const [previous, setPrevious] = useState(false);
    const [load, setLoad] = useState(false);


    useEffect(()=>{
        dispatch(getQuestionNameAsync({name}))
    }, [])
  
    const handleAnswerNext = () => {
      const nextQuestion = currentQuestion +1
      if(nextQuestion < quizId.questions.question.length){
        setPrevious(true)
        setCurrentQuestion(nextQuestion)
      }
    }
    
    const handleAnswerOptionClickPrev = () => {
      const nextQuestion = currentQuestion - 1;
      if (nextQuestion < quizId.questions.question.length) {
        setTimeout(()=>{
          setLoad(true)
          setCurrentQuestion(nextQuestion)
          setTimeout(()=>{setLoad(false)},[600])
        },790)
       
      }
      if( nextQuestion < 1){
        setPrevious(false)
      }
     
    }

    return <Container>
 <div className={examstyle.task.main}>
  <div className="flex justify-between">
  <ExamStatus link="/file" showQuestion={true} title={name}
  currentQuestion={quizId.questions === null ? [] : quizId.questions.question[currentQuestion]}
  data={quizId.questions === null ? [] : quizId.questions.question }/>  
  </div>

  <Instruction headers={name}></Instruction>
  <Header categorie={name} item={ quizId.questions === null ?
               [] : quizId.questions.question[currentQuestion].file}  ></Header>
        {quizId.pedding ? <div><Loader/></div>  :  quizId.questions == null ? <></> 
        :<div>
          <div className={examstyle.task.taskbox}>

          {
            name === "Writing" && (<div className="">
              <Writing/>
            </div>)
          }
          {
            name !== "Writing" && (<>
            <div className="flex space-x-2 mt-5 mx-5" >
              <h1 className ="text-md trackgin-wide 
              font-medium md:text-[18px]">{currentQuestion + 1}.</h1>
                <div className="text-gray-800
               font-medium md:text-[18px] ">
                { quizId.questions.type !== "MQC" ? "" : quizId.questions.question[currentQuestion].question}</div>
               </div>
               {
               quizId.questions.type === "Blank" && (<FillBlanks
                sentence={quizId.questions.question[currentQuestion].question}/>)
              }
              {
                quizId.questions.type === "MQC" && (<>
                <div className="space-y-4">
                <div className="mt-5 py-3 space-y-4 px-6 font-ubuntu">
        {
            quizId.questions.question[currentQuestion].clude.map((i,indexs)=><>
           <div key={indexs*10 /2}>
                <Input key={indexs*10 / 2} 
                checked={i.selected} 
                value={i.choice} name="quiz" id={i.id} 
                type="checkbox" Text={i.choice}/>
              </div>
            </>)
        }
        </div>
                 </div>
                
                </>)
              }
            </>)
          }
</div>
{
    name !== "Writing" ?(
    <div className={examstyle.task.btnstylediv}>
    {   previous ? (  <a onClick={handleAnswerOptionClickPrev}
     className={buttonstyle.prevBtn}>
       <span className={examstyle.task.spanbtn}>
        {
          load ? <SmallSpinner></SmallSpinner> :  <Icon Size="1.2rem" name={<BiLeftArrowAlt/>} />
        }
    
         <p>Previous</p>
       </span>
       </a>):(<></>)
     }
     <a onClick={ handleAnswerNext }   
    className={buttonstyle.nextBtn}>
   <span className={examstyle.task.spanbtn}>
     <p>Next</p>
    <Icon Size="1.2rem" name={<BiRightArrowAlt/>} />

    </span>
     </a>
</div>
  ) : (

<div className="px-2 bg-blue-200"></div>
  )
}

          

        </div> 
      }

    </div>
    </Container>
    
    
   
}