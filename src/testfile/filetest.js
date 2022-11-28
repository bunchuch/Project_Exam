
import React from "react"


const NumberContext = React.createContext()

function Display(){
    return <NumberContext.Consumer>
        {value =><div>The answer is {value}.</div>}
    </NumberContext.Consumer>
}


export default function FileTest(){
    return (
        <NumberContext.Provider value={42}>
        <Display></Display>
        </NumberContext.Provider>
    )
}