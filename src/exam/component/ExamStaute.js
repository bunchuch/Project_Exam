import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useLocation } from "react-router-dom";

import Icon from "../../components/Icon";
import { Link } from "react-router-dom";
import { examStatusStyle } from "../../style/style";


export default function ExamStatus ({data,showQuestion,backArrow,title, currentQuestion}){
  
const [active ,setActive] = useState('tab1')



const checkedQuestion = (index,completed) => {
  let styleList = ""
  if(completed){
    styleList = examStatusStyle.listyle["normalstyle-checkd"]
    return currentQuestion.qid === index ? examStatusStyle.listyle["active-checked"] 
    + examStatusStyle.listyle.liststyle : examStatusStyle.listyle["normalstyle-checkd"]
  }else{
    styleList = examStatusStyle.listyle["normalstyle-uncheckd"]
    return currentQuestion.qid === index ? examStatusStyle.listyle["active-unchecked"] 
    + examStatusStyle.listyle.liststyle : examStatusStyle.listyle["normalstyle-uncheckd"]
    
  }


  return styleList 
}

    return (
        <>
        <div onClick={backArrow} className={ showQuestion
           ? examStatusStyle.arrowstyle : 'hidden' }>
          <Link to="/exam">
          <div className={examStatusStyle.arrowTextstyle}>
          <Icon Size="1.2rem" name={<BiArrowBack/>} ></Icon>
          <p className="hidden md:block">{title}</p> 
          </div>
          </Link>
        
         </div>
  <div className={showQuestion ? examStatusStyle.mainStyle 
    : examStatusStyle.mainwhenfasle}>
    <ul className={examStatusStyle.listyle.ulstyle}>
      {
        showQuestion ?  data.map((item,index)=>
        <li id={index+1}  value={index+1} key={index+1} >
          <Link>
          <a key={index+1} href="#" className={`${examStatusStyle.listyle.liststyle} 
           ${checkedQuestion(item.qid, item.completed) }`}>{index+1}</a>
          </Link>
    
    </li>
        
        )  : <></>
      }
     
    </ul>
  </div>
        
        </>
    )
}