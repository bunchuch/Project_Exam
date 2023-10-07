import React, { Children } from "react";



export default function Grid ({Children,col,row,gap}){
    return <div className={`Grid` + col + col + row + gap}>
            {Children}
    </div>
}