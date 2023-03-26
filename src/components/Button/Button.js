import React from "react"

const Button = ({text, color,event, children}) => {
    return    <button className={`rounded relative inline-flex group items-center
    justify-center px-4 w-32 py-2 m-1 cursor-pointer ${color} text-white
     active:bg-purple-600 active:shadow-none `}  onClick={event} >
        {children}
     </button>
}


export default Button


