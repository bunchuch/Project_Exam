import React, { createContext, useState } from "react"


import FillBlanks from "./FillBlank/FillBlank"
import GroupInput from "../../../components/GroupInput"

import { styleRenderQuestion } from "../../../style/style"



export default function RenderQuestion({ type, question, categories, clude, number }) {
    const [numberQuestion ,setNumber] = useState([{...number}])
    return < >
        <div>
            <div className={styleRenderQuestion["divtag-header"]}>
                <h1 className={styleRenderQuestion["header-question-number"]}>Question {number}</h1>
                <span className={styleRenderQuestion.badges}>{categories}</span>
            </div>
            {
                ( categories === "Fill in blank") && (
                    <FillBlanks 
                    sentence={question} 
                    clude={clude} type={type} />
                )
            }
            {   (categories === "multiple Chocice") && (<>
                <p className={styleRenderQuestion.ptag_question}>{question}</p>
                <div className={styleRenderQuestion["divtag-groupInput"]}>
                    {
                        (type === type) && (<>
                            {clude.map((value) =>
                             <GroupInput type={type}
                             Text={value.choice}/>)}
                        </>)
                    }
                </div>
            </>)
            }
        </div>
    </>


}



