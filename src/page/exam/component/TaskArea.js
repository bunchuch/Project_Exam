import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import FillBlank from "../component/FillBlank/FillBlank" 
import {questionAction} from "../../../redux/questionSlice"
import SmallFooter from "../../../components/Footer/smallFooter"
import { Link, useNavigate, useParams } from "react-router-dom"
import Audio from "../../../components/Audio"
import { ReadingCard } from "../../../components/ReadingCard"
import Instruction from "../../../components/Instruction"
import { VocabularyCard } from "../../../components/VocabularyCard"
import ExamStatus from "../component/ExamStatus"
import {BiLibrary,BiUserVoice, BiBookOpen,BiFontColor} from "react-icons/bi";
import {TbWriting} from "react-icons/tb"
import {FaAssistiveListeningSystems, FaSleigh} from  "react-icons/fa"
import {GoBook} from "react-icons/go"
import Icon from "../../../components/Icon"
import Writing from "../../../components/Writing"
import GroupInput from "../../../components/GroupInput"
import HeaderBar from "./HeaderBar"
import FillBlanks from "../component/FillBlank/FillBlank"
import HeaderButton from "../../../components/Button/headerButton"
import { addAnswer } from "../../../redux/answerSlice"
import QuestionHeader from "../../../components/QuestionHeader"
import { Grammar, Listening,Readings, Vocabulary, writings } from "../../../data/data"
import {useLocalStorage} from "../../../testfile/hook/userLocalStorage"

export default function TaskArea (){
        const questions = useSelector((state)=> state.question.item)
        const answer = useSelector((state)=> state.answer)
        const dispatch = useDispatch()
        const {categories} = useParams()
        const [selected,setSelectedIndex] = useState(null)
         const naviagtor = useNavigate()

         const [checkedState, setCheckedState] = useState(
            new Array(questions.length).fill(false)
          );

         useEffect(()=>{
         document.title = categories
         },[categories])


          useEffect(()=>{
        
          },[])
          const [item,setItem]= useLocalStorage('catogries',[])
         const handlChage = (e,position,questionNumber)=>{
           setItem([...item,{
            qn:questionNumber,
            answer: {
              id:position,
              value:e.target.value,
              checked:e.target.checked,
            }

           }])
          e.preventDefault();
      //       const updateCheckedState = checkedState.map((item,index)=>
      //             index === position ? !item : item
      //       )  
      //       console.log(questions)
      //       console.log(updateCheckedState)
      //  setCheckedState(updateCheckedState)
          return
        }

    function QuestionRender () {  
    const renderQuestion = questions.map((item, index)=>(
        <div className="" key={index}  >
            {
            categories === "writing" ? (
                <Writing data={item.clude}/>
            ):(
                <>
                {
               <QuestionHeader item={item} type={categories}/>
            }

        <div key={item.id} className={index+1 === selected ?
        "bg-white -z-10 shadow-sm shadow-gray-500/10 border-[1px] border-purple-900 rounded-lg tracking-wide mt-3  px-6 py-4 space-y-2" :
        "bg-white -z-10 shadow-sm shadow-gray-500/10 border-[1px] border-gray-200 rounded-lg tracking-wide mt-3  px-6 py-4 space-y-2"}>
           <div className="flex space-x-2" key={item.id}>
             <h1 className ="text-md trackgin-wide font-medium ">{index+1}.</h1>
            <div>
        {   
            item.categories === "multiple Chocice" && (<>
                <div key={item.id} className="text-gray-800 font-medium">{item.question}</div>
                <div>{item.clude.map((i,indexs)=><div key={indexs}>
                    <GroupInput
                    type={item.type} key={i.id}
                    id={`coustome-checkbox-${index+1}`}
                 
                    event={(e)=>
                      handlChage}
                      value={i.choice}
                     Text={i.choice}
                         />
                    </div>)}</div>
           </> )
        }
       </div>
            {  
                item.categories === "Fill in blank" && (
                    <FillBlanks key={item.id}
                    sentence={item.question}   />
                )
                }
             </div>
        </div>
                </>
            )
            
            }
        </div> )) 


    return (
        <div className={"mt-1.5 "}>
            {renderQuestion} 
            <div className="flex flex-row
           space-x-2 md:items-center justify-between md:justify-start py-2 mt-[10px]">
            {
                categories === "writing" ? (
                   <></>
                ):(
                    <button onClick={()=>{
                     if(categories === 'listening'){
                      naviagtor(`/exam/reading`)
                      dispatch(questionAction.reading())
                     }
                    }} className="bg-purple-900 px-4
                    py-2 rounded-lg text-[14px] 
                   font-medium text-white hover:bg-gradient-to-r
                    hover:from-purple-700 hover:to-purple-800 transition-all ease-out 
                    duration-300">Next Section</button>
                )
            }
           
              </div>
        </div>
    )
    
        }

        const [stickyClass, setStickyClass] = useState(false)
    
        useEffect(()=>{
          window.addEventListener('scroll',stickNavbar)
          return ()=>{
            window.removeEventListener('scroll',stickNavbar)
          }
        },[])
    
    
        const stickNavbar = ()=>{
          if(window !== undefined){
            let windowHieght = window.scrollY
            let windinnerH = window.innerHeight
            windowHieght > -150 ? setStickyClass(true) :
             setStickyClass(false)
          }
        }
        return <div className="bg-gray-50 min-h-screen box-border font-inter tracking-normal " >
           <div className="bg-gray-50 min-h-screen box-border font-inter tracking-normal ">
             <div className={stickyClass ? "top-0 z-10 sticky bg-white shadow-sm px-2 md:px-0 "+
             "overflow-x-auto text-[14px] md:text-base" 
             : 'bg-purple-900 px-2 md:px-0 overflow-x-auto text-[14px] md:text-base relative'}>
    
                <div className="max-w[60rem] md:max-w-[70rem] text-white mx-auto py-2">
                <ul className=" md:max-w[70rem] mx-auto py-2" >
    <div className="flex">
    <HeaderButton  title="Listenning" 
    icon={<FaAssistiveListeningSystems/>}
     link="/exam/listening" 
     onClick={()=> {
     console.log(document.getElementById("btn1"))
     dispatch(questionAction.getQuestions(Listening["multiple chocice"]))}}/>
    <HeaderButton title="Reading" 
    icon={<BiBookOpen/>} link="/exam/reading" 
    onClick={()=> dispatch(questionAction.getQuestions(Readings["multiple chocice"]))}/>
    <HeaderButton title="Grammar" 
    icon={<BiFontColor/>} link="/exam/grammar" 
    onClick={()=> dispatch(questionAction.getQuestions(Grammar["multiple chocice"]))}/>
    <HeaderButton title="Vocabulary"
     icon={<GoBook/>} link="/exam/vocabulary" 
     onClick={()=> dispatch(questionAction.getQuestions(Vocabulary["Fill in blank"]))}/>
    <HeaderButton title="Writing" 
    icon={<TbWriting/>} link="/exam/writing"  
    onClick={()=> dispatch(questionAction.getQuestions(writings["multiple chocice"]))}/>
    </div>
     </ul>
        </div> 
             </div>
             
             <div className=" mx-auto lg:p-2  p-0 md:max-w-[70rem] ">    
                         <div className="flex lg:flex-row flex-col relative">
                            <main className="w-full mt-4 order-last px-2 lg:px-0 md:order-1">
                            <Instruction
                           header={categories.toUpperCase()}
                              />

                           <QuestionRender></QuestionRender>
                            </main>
                            <div className="lg:w-[460px] lg:order-last md:px-4 px-0  mx-0  ">
                      <ExamStatus 
                      type={categories}
                       selected={selected} 
                        data={questions}></ExamStatus>
                           </div>
                         </div>  
             </div>
    
          </div>
        
        </div>
    }
