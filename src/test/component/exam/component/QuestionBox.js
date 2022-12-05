import React, { useState } from "react";
import { Question } from "../../../../data/data";

const TestTitle = ["Grammar","Lisenting","Reading","Writing"]
const TestType = [ "Multiple Choice", "Fill in Blank", "Mactching World"]

//render type of question
const RenderType = ({test,number,question,type})=>{
        if (test === TestTitle[0]){
            return (
                <div className="flex px-4">
                <h1 className="font-bold">{number} 01.</h1>
            <p>{question} Review important concepts and explore new topics—the options are endless with</p>
            {}
            </div>
            )
        }else if(test === TestTitle[1]){
return (
    <div className="flex px-4">
    <h1 className="font-bold">{number} 01.</h1>
<p>{question} Review important concepts and explore new topics—the options are endless with</p>
{}
</div>
)
        }else if (test === TestTitle[2]){
            return (
                <div className="flex px-4">
                <h1 className="font-bold">{number} 01.</h1>
            <p>{question} Review important concepts and explore new topics—the options are endless with</p>
            {}
            </div>
            )
        }else if(test === TestTitle[3]){
           return(
            <>
            <div className="flex px-4">
            <h1 className="font-bold">{number} 01.</h1>
        <p>{question} Review important concepts and explore new topics—the options are endless with</p>
        </div>
        {
            type === TestType[0] &&(
             <div className="">There Many correct Answer</div>)
                
            }
            </>
           )
         
            
        }
   
}




//qestion box
function QuestionBox ({number,question,isNone}){
   
    const [titleTest, setTitle] = useState("")
    const [getTestType, setType] = useState('')
    return <>
    <div className="flex flex-col space-y-10">
        <div className="header flex space-x-3 border-b-[1px] pb-5 ">
           <HeaderTitle title="English Intermedia"    />

               <div className="border-[1px] px-3 py-2 font-medium text-[14px]
             rounded-full">
             Teacher : Miss. Voch Chea</div>

                <div className="border-[1px] px-3 py-2 font-medium text-[14px]
             rounded-full
             hover:bg-blue-200 hover:text-blue-900 hover:border-blue-200">  
                Grade 4</div>
              <SelectOption Name="Test" title={TestTitle} event={(e)=>{

                const selectType = e.target.value
                setTitle(selectType)
              }} />

              <SelectOption Name="Type" title={TestType} event={(e)=>{
                const selectType = e.target.value; 
                 setType(selectType)}}/>
        </div>
        

{
    isNone?(
        <div>

            <h1>Request for Exam</h1>
        </div>   
    ):(
        <div className=" w-full px-2 py-4 rounded-md border-[1px] space-y-3">
        <div className="font font-medium text-[16px] 
        px-4 flex justify-between text-center
         items-center">
            <div className="flex flex-row space-x-2">
            <h1>Try to Complete Your Question</h1> <div className="bg-yellow-200 rounded-full text-[14px] px-2 ">
                {titleTest}</div>
            </div>
         
             <h1 className="font-medium text-[12px] text-blue-700 tracking-wide px-4">{getTestType}</h1>
    </div>
     <RenderType test={titleTest} type={getTestType}></RenderType>
    </div>
    )
 

}
       
    </div>
    </>
}


    function SelectOption({event, title,Name}) {
      return (<div className="border-[1px] px-3 py-2 font-medium text-[14px]
             rounded-full ">  
              {Name}
                <select className="px-5 mx-2 focus:none" onChange={event}>
                   {(title).map(value => <option value={value}>{value}</option>)}
                </select>
                </div>);
    }



    function HeaderTitle({title}) {
        return (<div className="border-[1px] px-3 py-2 font-medium text-[14px]
               rounded-full
               hover:bg-blue-200 hover:text-blue-900 hover:border-blue-200">  
                 <p>{title}</p></div>);
      }
  export default QuestionBox