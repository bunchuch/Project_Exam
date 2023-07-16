import React, { useEffect, useState } from "react";
import Instruction from "../../components/Instruction";
import Header from "./Header";
import Writing from "../../components/Writing";
import FillBlanks from "../../components/FillBlank";
import Icon from "../../components/Icon";
import { BiLeftArrowAlt ,BiRightArrowAlt } from "react-icons/bi";
import { examstyle } from "../../style/style";
import { buttonstyle } from "../../style/style";
import { SmallSpinner } from "../../components/load/SmallSpinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams ,Link} from "react-router-dom";
import { toggleCompleteAsync, getQuestionNameAsync, getQuestionNameAsyncID, increment } from "../../redux/apicall";
import ExamStatus from "./ExamStaute";
import Container from "../../components/Container";
import { Loader } from "../../components/load/Loader";
import { Input } from "../../components/Input";
import Timer from "../../components/Timer";
import { FaQuidditch } from "react-icons/fa";


export const QuestionRender = ({showScore}) => {
  const {name , qv } = useParams()
  const test = useParams()
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const quizId = useSelector((state)=> state.quizs)
  const [currentQuestion ,setCurrentQuestion] = useState(0)
  const [previous, setPrevious] = useState(false);
  const [load, setLoad] = useState(false);
  const [id , setId] = useState(qv)
  const [checked ,setChecked] = useState(false)


var qid= parseInt(qv)
var page = quizId.page

useEffect(()=>{
  dispatch(getQuestionNameAsync({name}))
}, [dispatch])


const handleAnswerNext = () => {
  const nextQuestion = currentQuestion +1
  if(nextQuestion < quizId.questions.question.length){
    setId(nextQuestion +1)
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

  const hanndleChecek = (id ,completed) => {
    alert("Hi")
    console.log(id ,completed)
    const quizTest = quizId.questions.question[currentQuestion].clude.find((x)=> x.id === id)
    if(quizTest.id === id){
      var selecteds = JSON.stringify(quizTest.selected)
    }

    
   
  }

  

  return <Container>
    <div className="2xl:pt-[4rem]  pt-8">
     {/* {JSON.stringify(quizId.questions)} */}
    { quizId.pending ? <Loader></Loader> : <>
  <div className={examstyle.task.examheader}>
<ExamStatus link={"/exam"} showQuestion={true} title={name}
currentQuestion={quizId.questions === null ? [] : quizId.questions.question[currentQuestion]}
data={quizId.questions === null ? [] : quizId.questions.question }/>  
<div className={ name ? "flex md:gap-2" : " gap-1 flex md:gap-2 justify-end w-full"}>
         
  </div>


</div>

<div className={examstyle.task.main}>
<Instruction headers={name}></Instruction>
<Header categorie={name} item={ quizId.questions === null ?
             [] : quizId.questions.question[currentQuestion].file}  ></Header>
      {quizId.pending ? <div><Loader/></div>  :  quizId.questions == null ? <></> 
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
            <h1 className ={`text-md trackgin-wide 
            font-medium md:text-[18px] ${quizId.questions.type !== "MQC"
             ? "bg-purple-200 px-2 py-1 w-8 rounded-xl text-purple-700 border-1 border-purple-700 " 
            : ""}`}>{currentQuestion + 1}.</h1>
              <div className="text-gray-800
             font-medium md:text-[18px] ">
              { quizId.questions.type !== "MQC" ? "" 
              : quizId.questions.question[currentQuestion].question}</div>
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
              event={(e) =>hanndleChecek(i.id ,i.selected)}
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
       <p>previous</p>
     </span>
     </a>):(<></>)
   }
   <a onClick={ handleAnswerNext }   
  className={buttonstyle.nextBtn}>
 <span className={examstyle.task.spanbtn}>
   <p>next</p>
   <div> <Icon Size="1.2rem" name={<BiRightArrowAlt/>} /></div>
 

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
  
  </> }

 
</div>
  </Container>
}