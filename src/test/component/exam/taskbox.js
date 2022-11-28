import React from "react";
import RadioBtn from "../RadioBtn";
import Checkbox from "../Checkbox";
import Button from "../Button";
import FillBlank from "./fillBlank";

const RenderQuestion = ({data})=>{
   const item = data.map((value)=>
   <Answer key={value.id} title={value.id} type={value.type} 
   question={value.question} choice={value.choice} />)
   return item
 }

const RenderType = ({type,answer})=>{
  const isType = type
  if(isType === 'checkbox'){
   return <>
   <div className="">
   <TitleParagrah style={"text-[14px] font-medium"}  Text ="There are many is a correct answer "></TitleParagrah>
   </div>
{answer.map((value)=><Checkbox key={value.id} Text={value.choice}/>)}
   </>
  }

  if(isType === "radio"){
   return <>
   <div className="">
      <TitleParagrah style={"text-[14px] font-medium"} Text ="There are only one is a correct answer "></TitleParagrah>
   </div>
   {answer.map((item)=><RadioBtn key={item.id}  Text={item.choice}></RadioBtn>)}
   </>
  }
}  


   
const Answer = ({question, title, type,choice}) => {
    return <div className=" flex-row  bg-white p-5 border-[1px] rounded-[5px] my-4  " >
       <div className="">
       <TitleParagrah style={"xl:text-[16px] md:text-[16px]  font-medium"} Text="Try to Complete the Answer"></TitleParagrah>
       </div>
       <div class="xl:text-[16px]  pt-2 border-gray-200 font-normal tracking-normal ">
          <p><b className="font-medium">{title}.</b>{question}</p>
       </div>
    <div className="py-2">
      {/* <FillBlank></FillBlank> */}
                <div className="grid grid-row-2 grid-flow-row-2
                 xl:gap-3  py-4 px-4 my-2 md:mx-0 sm:mt-2 sm:gap-1 bg-gray-50 rounded-[5px]">
              <RenderType type={type} answer={choice}></RenderType>
              
                </div>
                <div className=" flex justify-between items-center mt-4">
                  <div className="text-[12px] font-medium text-gray-500 flex flex-row space-x-2">
                    <IssueButton icon={"https://img.icons8.com/color/16/null/comments--v1.png"} Text="Feedback"    />
                   <IssueButton icon={"https://img.icons8.com/windows/16/7639bd/info-squared.png"} Text="Help"/>
                     </div>
                  <Button style={"px-4 py-2 bg-blue-800 rounded-[5px] text-[14px] text-center text-md font-medium text-white"} text="Submit"></Button>
             </div>
             </div>

           
    </div>
 }

 
 
    function TitleParagrah({Text, style}) {
      return (<p className={style}>{Text}</p>);
    }




   export default RenderQuestion;
    function IssueButton({Text,icon}) {
      return (<> <img src={icon} alt="feedback icon" />
                   <p>{Text}</p></>);
    }
  