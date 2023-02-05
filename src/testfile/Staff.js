import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import GroupInput from "../components/GroupInput"
import FillBlanks from "../page/exam/component/FillBlank/FillBlank"
import { questionAction } from "../redux/questionSlice"
import SmallFooter from "../components/Footer/smallFooter"
import { Link, useParams } from "react-router-dom"
import Audio from "../components/Audio"
import { ReadingCard } from "../components/ReadingCard"
import Instruction from "../components/Instruction"
import { VocabularyCard } from "../components/VocabularyCard"
import ExamStatus from "../page/exam/component/ExamStatus"
import {BiLibrary,BiUserVoice, BiBookOpen,BiFontColor} from "react-icons/bi";
import {TbWriting} from "react-icons/tb"
import {FaAssistiveListeningSystems, FaSleigh} from  "react-icons/fa"
import {GoBook} from "react-icons/go"
import Icon from "../components/Icon"
import Writing from "../page/exam/component/Writing"


export default function Staff (){
    const [type ,setType] = useState([])
    const questions = useSelector((state)=> state.question.item)
    const dispatch = useDispatch()
    const [nubmer ,setNumber] = useState([])
    const {categories} = useParams()

  
    
function QuestionRender () {  
const renderQuestion = questions.map((item, key)=>(
 
    <div className="" key={key}>
        {
        categories === "writing" ? (
            <Writing data={item.clude}/>
        ):(
            <>
            {
            categories === "listening" && (
                <Audio audio={item.audio} title="my hoilday in london" ></Audio>
            ) ||   categories == "reading" && (
                <ReadingCard header={item.header} sentence={item.text}  />
             ) || categories == "vocabulary" && (
             
             <VocabularyCard clude={item.clude}/>
             ) 
        }


    <div className="bg-white shadow-sm shadow-gray-500/10 rounded-[4px]
     tracking-wide mt-3  px-4 py-4 space-y-2">
       <div className="space-y-2 flex items-center justify-between">
         <h1 className ="text-md trackgin-wide font-medium ">Question {key+1}</h1>
        </div>
        { 
           
            item.categories === "Fill in blank" && (
                <FillBlanks
                sentence={item.question}
                 />
            )
            }
       <div>
    
        {
           
            item.categories === "multiple Chocice" && (<>
                <div>{item.question}</div>
                <div>{item.clude.map((i)=><>
                    <GroupInput type={item.type} Text={i.choice} />
                    </>)}</div>
           </> )
        }
     
       </div>
    </div>
            </>
        )
        
        }
    </div>
    
    
    
)

    
)

return (
    <div className="mt-1.5">
        {renderQuestion} 
        <div className="flex flex-row
       space-x-2 md:items-center justify-between md:justify-start mt-[10px]">
         <button onClick={()=>alert(categories)} className="bg-purple-900 px-4
          py-2 rounded-[4px] text-[14px] 
         font-medium text-white hover:bg-gradient-to-r
          hover:from-purple-700 hover:to-purple-800 transition-all ease-out 
          duration-300">Answer</button>
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
         console.log(windowHieght)
     
      }
    }


    return <div className="bg-gray-50 min-h-screen box-border font-inter tracking-normal " >
       <div className="bg-gray-50 min-h-screen box-border font-inter tracking-normal ">
         <div className={stickyClass ? "top-0 z-10 sticky bg-purple-900 px-2 md:px-0 overflow-x-auto text-[14px] md:text-base" 
         : 'bg-purple-900 px-2 md:px-0 overflow-x-auto text-[14px] md:text-base relative'}>

            <div className="max-w[60rem] md:max-w-[70rem] text-white mx-auto py-2">
            <ul className=" md:max-w[70rem] mx-auto py-2" >
<div className="flex">
<button className="mx-3 " onClick={()=> dispatch(questionAction.listenings())}>
    <Link to ="/testfile/listening">
    <div className="flex items-center space-x-2">
        <Icon name={<FaAssistiveListeningSystems/>} Size="1.2rem" color="white"/>
       <p>Listening</p>
        </div>
        </Link> 
    </button> 
<button className="mx-3 " onClick={()=> dispatch(questionAction.reading())}>
   <Link to="/testfile/reading">
   <div className="flex items-center space-x-2">
        <Icon name={<BiBookOpen/>} Size="1.2rem" color="white"/>
       <p>Reading</p>
        </div>

   </Link>
   </button>
<button className="mx-3 " onClick={()=> dispatch(questionAction.grammar())}>
    <Link to ="/testfile/grammar">
    <div className="flex items-center space-x-2">
        <Icon name={<BiFontColor/>} Size="1.2rem" color="white"/>
       <p>Grammar</p>
        </div>
    </Link>
</button>

<button className="mx-3 " onClick={()=> dispatch(questionAction.vocabulary())}>
    <Link to="/testfile/vocabulary">
    <div className="flex items-center space-x-2">
        <Icon name={<GoBook/>} Size="1.2rem" color="white"/>
       <p>vocabulary</p>
        </div>
    
    </Link></button>
    <button className="mx-3 " onClick={()=> dispatch(questionAction.writing())}>  
    <Link to="/testfile/writing">
        <div className="flex items-center space-x-2">
        <Icon name={<TbWriting/>} Size="1.2rem" color="white"/>
       <p>writing</p>
        </div>
        </Link>
       </button>
</div>


 </ul>
            </div>
            
         </div>
         
         <div className=" mx-auto lg:p-2  p-0 md:max-w-[70rem] ">    
                     <div className="flex lg:flex-row flex-col relative">
                     {/* <div class="fixed top-10 z-10 md:top-2/4 left-[15%] transform -translate-y-1/2 w-8 h-48 bg-indigo-500 text-white flex items-center justify-center"><div >Drawer</div></div> */}
                        <main className="w-full mt-4 order-last px-2 md:px-0 md:order-1">
                        <Instruction
                       header={categories.toUpperCase()}
                          />
                       <QuestionRender></QuestionRender>
                       
                        </main>

                        <div className="lg:w-[460px] lg:order-last md:px-4 px-0  mx-0 ">
                  <ExamStatus data={questions}></ExamStatus>
           
                       </div>
                     </div>
                     <SmallFooter></SmallFooter>
                 
         </div>


      

         {/* header */}


         {/* selction Status */}

      </div>
    
    </div>
}