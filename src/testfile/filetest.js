
import React, { useEffect, useState } from "react"
import Dropdown from "./Dropdown"

import Input from "./Input"
import ResponeTest from "./ResponeTest"
import Timer from "./Timer"
import Test2 from "./test2"
import Loader from "../components/Loader"
import TestRute from "./route"
import { useNavigate } from "react-router-dom"
const InputFeild = ()=>{
    const [data,setData]= useState({
    })
    const [account,setAccount] = useState ({
        username : '',
        email  : ''
    })

    const handleChange = (event)=>{
        const value = event.target.value
        const name = event.target.name
       setData (data =>({...data ,[name]:value}))
    }
    const handleOnsubmit = (event)=>{
        event.preventDefault()
        setAccount({
            username : 'voch',
            Email: 'Voch@email.com',
        })
        console.log(account)
        console.log(data)
    }
    return <form onSubmit={handleOnsubmit}>
       <Input name="fname" value={data.fname} onChange={handleChange}/>
        <Input name="lname" value={data.lname} onChange={handleChange}/>
        <label>{data.fname}</label>
        <button type="submit">Click</button>
    </form>
}



const NumberContext = React.createContext(null)
const Emotion = {
 'happy': '😀',
 'sad'  : '😥',
}

const style = {
    'happy':'px-5 py-6 border-[1px] m-4 space-y-6',
    'sad'  : 'px-5 py-6 border-[10px] m-4 space-y-6 border-yellow-300 text-yellow-200'
}


function DisplayEmotional(){
    return <NumberContext.Consumer>
        {value =><h1 className="text-2xl">{value}</h1>}
    </NumberContext.Consumer>
}




export default function FileTest(){
    const [emontional,setEmotional] = useState()
    const [staute, setStatue] = useState('what about your feeling right now ?')
    const [styleEmotional ,setStyle] = useState(style.happy)
    const [count,setCount] = useState(45)
    

    
const handleOnclickSad  = (event)=>{
        setStatue('I feeling sad ! could i have something')
        setEmotional(`${Emotion.sad}`)
    
   
}



useEffect(()=>{
    document.title = emontional + staute
},[emontional])

const handleOnclickHappy = (event) => {
setStatue('I feeling happy ! cloud we have a little party ... ')
setEmotional(`${Emotion.happy}`)
}


const navigate = useNavigate()
    return (
        <div className={styleEmotional}>

   
        <NumberContext.Provider value={emontional}>
        <DisplayEmotional></DisplayEmotional>
       
        <p>{staute}</p>
        <button className="bg-blue-400 px-6 py-2 rounded-md mx-auto text-white "
         onClick={handleOnclickSad}>SAD</button>
        <button className="mx-3 bg-blue-400 py-2 rounded-md px-6 text-white" onClick={
            handleOnclickHappy
        }>Happy</button>
        <DisplayEmotional></DisplayEmotional>
        </NumberContext.Provider>

        <InputFeild></InputFeild>
        <ResponeTest></ResponeTest>
        <Dropdown></Dropdown>
       <Timer></Timer>
      <TestRute/>
        <p>{count}</p>
        </div>
    )
}