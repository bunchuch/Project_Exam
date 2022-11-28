import React from "react";
import RenderQuestion from "./taskbox";
import { Question } from "./../../../data/data";
import FillBlank from "./fillBlank";



export default function QuestionCols({}) {
    return <>
    {/* <FillBlank></FillBlank> */}
    <RenderQuestion data={Question}></RenderQuestion>
    </>;
  }