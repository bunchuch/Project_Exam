import React from "react"

const Button = ({text, style,event}) => {
    return    <button className={style}  onClick={event} >{text}</button>
}


export default Button