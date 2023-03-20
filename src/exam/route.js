import React from "react"
import { BrowserRouter as Router,Switch,Link,Route,useParams,useRouteMatch,useNavigate, Outlet, useOutletContext } from "react-router-dom"



export default function TestRute(){
    let navigate = useNavigate()
    let { element } = useParams()
    return <div>
        <div>Hello {element}</div>
        <button onClick={()=>{
            navigate("/exam")
        }}>Go back</button>
        <ul>
            <li>
                <Link to= "/testfile/element">Home</Link>
            </li>
            <li>
                <Link to ="/testfile/input">input</Link>
            </li>
        </ul>
        <hr></hr>
      
    </div>
}


function Book(){
    const {id} = useParams()
    const context = useOutletContext()

    return <>
    <h1>{id} there {context.hello}</h1>
    </>
}