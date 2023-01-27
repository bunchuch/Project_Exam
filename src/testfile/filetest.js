
import React, { useEffect, useState } from "react"
import Timer from "./Timer"
import { useNavigate, useParams } from "react-router-dom"
import FillBlanks from "./fillblanks"
import { useDispatch, useSelector } from "react-redux"
import { Readings } from "../data/data"


// const InputFeild = ()=>{
//     const [data,setData]= useState({
//     })
//     const [account,setAccount] = useState ({
//         username : '',
//         email  : ''
//     })

//     const handleChange = (event)=>{
//         const value = event.target.value
//         const name = event.target.name
//        setData (data =>({...data ,[name]:value}))
//     }
//     const handleOnsubmit = (event)=>{
//         event.preventDefault()
//         setAccount({
//             username : 'voch',
//             Email: 'Voch@email.com',
//         })
//         console.log(account)
//         console.log(data)
//     }
//     return <form onSubmit={handleOnsubmit}>
//        <Input name="fname" value={data.fname} onChange={handleChange}/>
//         <Input name="lname" value={data.lname} onChange={handleChange}/>
//         <label>{data.fname}</label>
//         <button type="submit">Click</button>
//     </form>
// }



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




function HeaderBar (){
    return <div>
        <ul>
            <li value="about">
               about
                
               </li>
            <li value="home">Home</li>
        </ul>
    </div>
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
    if(emontional === undefined){
        document.title = "🎏"
    }
},[emontional])

const handleOnclickHappy = (event) => {
setStatue('I feeling happy ! cloud we have a little party ... ')
setEmotional(`${Emotion.happy}`)
}


const handleOnsubmint =(e)=>{
    e.preventDefalut()
}




const type = useParams()
console.log(type)

const Queston = useSelector((state) => state.question)


const navigate = useNavigate()
    return (
        <div>

   
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
        
        <FillBlanks></FillBlanks>
       
     
     <HeaderBar/>
     
        </div>
    )
}