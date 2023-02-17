import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import FillBlank from "../component/FillBlank/FillBlank" 
import {questionAction} from "../../../redux/questionSlice"
import SmallFooter from "../../../components/Footer/smallFooter"
import { Link, useParams } from "react-router-dom"
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
import Writing from "./Writing"
import GroupInput from "../../../components/GroupInput"
import HeaderBar from "./HeaderBar"
import FillBlanks from "../component/FillBlank/FillBlank"
import HeaderButton from "../../../components/Button/headerButton"
export default function TaskArea (){
        const [type ,setType] = useState([])
        const questions = useSelector((state)=> state.question.item)
        const dispatch = useDispatch()
        const [nubmer ,setNumber] = useState([])
        const [showScore,setShowScore] = useState(false)
        const [checked ,setChecked] = useState({color :false, key:0})
        const {categories} = useParams()
         const [correct ,setCorrect] = useState(0)


    function QuestionRender () {  
    const renderQuestion = questions.map((item, index)=>(
     
        <div className="" key={index}  >
            {
            categories === "writing" ? (
                <Writing data={item.clude}/>
            ):(
                <>
                {
                categories === "listening" && (
                    <Audio audio={item.audio} title="my hoilday in london" ></Audio>
                ) ||   categories == "reading" && (
                    <ReadingCard type={item.categorie} header={item.header}  sentence={item.text}  />
                 ) || categories == "vocabulary" && (
                 
                 <VocabularyCard clude={item.clude}/>
                 ) 
            }
    
        <div key={item.id} className="bg-white -z-10 shadow-sm shadow-gray-500/10 rounded-lg
         tracking-wide mt-3  px-6 py-4 space-y-2">
           <div className="flex space-x-2" key={item.id}>
             <h1 className ="text-md trackgin-wide font-medium ">{index+1}.</h1>
            <div>
        {
           
            item.categories === "multiple Chocice" && (<>
                <div key={item.id} className="text-gray-800 font-medium">{item.question}</div>
                <div>{item.clude.map((i,k)=><div key={k}>
                    <GroupInput  key={i.id}
                    type={item.type}
                    checked={correct}
                    event={(e)=>{
                       if(e.target.checked){
                        setChecked({color:true,key:index+1})
                       }else{
                        console.log("uncheck")
                        setChecked({color:false,key:index+1})
                        console.log(checked.color , checked.key)
                       }
                         
                       

                    }}
                    
                     value={i.isCorrect}  Text={i.choice} />
                    </div>)}</div>
           </> )
        }
     
       </div>
            {  
                item.categories === "Fill in blank" && (
                    <FillBlanks key={item.id}
                    sentence={item.question}
                     />
                )
                }
             </div>
        </div>
                </>
            )
            
            }
            
        </div> )) 


    return (
        <div className="mt-1.5">
            {renderQuestion} 
            <div className="flex flex-row
           space-x-2 md:items-center justify-between md:justify-start mt-[10px]">
            {
                categories === "writing" ? (
                   <></>
                ):(
                    <button onClick={()=>alert(categories)} className="bg-purple-900 px-4
                    py-2 rounded-lg text-[14px] 
                   font-medium text-white hover:bg-gradient-to-r
                    hover:from-purple-700 hover:to-purple-800 transition-all ease-out 
                    duration-300">Answer</button>
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
             <div className={stickyClass ? "top-0 z-10 sticky bg-purple-900 px-2 md:px-0 overflow-x-auto text-[14px] md:text-base" 
             : 'bg-purple-900 px-2 md:px-0 overflow-x-auto text-[14px] md:text-base relative'}>
    
                <div className="max-w[60rem] md:max-w-[70rem] text-white mx-auto py-2">
                <ul className=" md:max-w[70rem] mx-auto py-2" >
    <div className="flex">
    <HeaderButton title="Listenning" icon={<FaAssistiveListeningSystems/>} link="/exam/listening" onClick={()=> dispatch(questionAction.listenings())}/>
    <HeaderButton title="Reading" icon={<BiBookOpen/>} link="/exam/reading" onClick={()=> dispatch(questionAction.reading())}/>
    <HeaderButton title="Grammar" icon={<BiFontColor/>} link="/exam/grammar" onClick={()=> dispatch(questionAction.grammar())}/>
    <HeaderButton title="Vocabulary" icon={<GoBook/>} link="/exam/vocabulary" onClick={()=> dispatch(questionAction.vocabulary())}/>
    <HeaderButton title="Writing" icon={<TbWriting/>} link="/exam/writing"  onClick={()=> dispatch(questionAction.writing())}/>
    </div>
     </ul>
                </div>
                
             </div>
             
             <div className=" mx-auto lg:p-2  p-0 md:max-w-[70rem] ">    
                         <div className="flex lg:flex-row flex-col relative">
                         {/* <div class="fixed top-10 z-10 md:top-2/4 left-[15%] transform -translate-y-1/2 w-8 h-48 bg-indigo-500 text-white flex items-center justify-center"><div >Drawer</div></div> */}
                            <main className="w-full mt-4 order-last px-2 lg:px-0 md:order-1">
                            <Instruction
                           header={categories.toUpperCase()}
                              />
                           <QuestionRender></QuestionRender>
                           
                            </main>
    
                            <div className="lg:w-[460px] lg:order-last md:px-4 px-0  mx-0  ">
                      <ExamStatus categories={categories} checked={checked} score={correct} data={questions}></ExamStatus>
               
                           </div>
                         </div>
                        
                     
             </div>
    
    
          
    
        
    
          </div>
        
        </div>
    }

    
  