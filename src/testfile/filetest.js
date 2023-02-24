
import React, { useEffect, useState } from "react"
import Timer from "../components/Timer"
import { useNavigate, useParams } from "react-router-dom"
import FillBlanks from "./fillblanks"
import { useDispatch, useSelector } from "react-redux"
import { Readings } from "../data/data"
import { questionAction } from "../redux/questionSlice"
import Staff from "./Staff"
import { ReadingCard } from "../components/ReadingCard"
import UploadImages from "../components/UploadImage"
import Button from "../components/Button/Tooltip"
import Modal from "../components/Modal"

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

const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });
  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };




const navigate = useNavigate()

const list = ["javascript", "python","java","c++","ruby","Go","react js"]

    return (
        <div>

<div className="form-check m-3">

  {
    list.map((i,k)=><>
    <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value={i}
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                     {i}
                  </label>
    </>
      
    )
  }
                </div>

                <div className="form-floating mt-3 mb-3 text-center">
              <label htmlFor="exampleFormControlTextarea1">
                You're proficient in the following languages :{" "}
              </label>
              <textarea
                className="form-control text"
                name="response"
                value={userinfo.response}
                placeholder="The checkbox values will be displayed here "
                id="floatingTextarea2"
                style={{ height: "150px" }}
                onChange={handleChange}
              ></textarea>
            </div>
        {/* <NumberContext.Provider value={emontional}>
        <DisplayEmotional></DisplayEmotional>
       <h1>Hello there</h1>
        <p>{staute}</p>
        <button className="bg-blue-400 px-6 py-2 rounded-md mx-auto text-white "
         onClick={handleOnclickSad}>SAD</button>
        <button className="mx-3 bg-blue-400 py-2 rounded-md px-6 text-white" onClick={
            handleOnclickHappy
        }>Happy</button>
        <DisplayEmotional></DisplayEmotional>
        </NumberContext.Provider> 
        
        <FillBlanks></FillBlanks>
     <HeaderBar/> */}
     {/* <ReadingCard sentence="my mon is good" header="my name"></ReadingCard> */}
    {/* <Staff/>  */}
  <Modal/>
   <UploadImages/>
   
        </div>
    )
}