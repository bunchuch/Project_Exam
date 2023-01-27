import React, { useEffect, useState } from "react"
import reactStringReplace from "react-string-replace"

const text = ["It is crucial for the RBI to < that the discipline in the banking organizations does not <"]
const textHide = [" notice, weak",   " maintain, exist",   " ensure, slacken ", " order, wrecked ", " None of the above"]

const objectText =[ {
    "id" : "1",
    "question1" : "It is cruial for the RBI to noticeweak",
    "answer" : "RBI",
    "fill" : false,
},
{
    "id" : "1",
    "question1" : "that the discipline in the banking organizations does not",
    "answer" : "discipline",
    "fill" : false,
},
{
    "id" : "1",
    "question1" : "what about your feeling right now ?",
    "answer" : "feeling",
    "fill" : false,
    
}


]

const newTexthide = [...textHide]

     
    
   


export default function FillBlanks(){
const [addtype, setType] = useState(newTexthide)
const [list ,setList] = useState([...newTexthide])
const [answer ,setAnswer] = useState({})
const getAnswer = []
function hadleAddAnswer (e){
  
    getAnswer.push(e.target.value)
    console.log(getAnswer)  

    const findDuplicates = arr => getAnswer
    .filter((items,index)=>  arr.indexOf(items) !==index )
    const dulication = findDuplicates(getAnswer)

    console.log(dulication)
    console.log(answer)
   
}

function handleOnchange (event) {
    const name = event.target.name
    const value = event.target.value

    setAnswer(values => ({...values, [name]:value}))
}


{/*ramdom list */}
const shuffle = (array)=>{

    let currentIndex = array.length , ramdomIndex;
    while(currentIndex !=0){
   ramdomIndex = Math.floor(Math.random()* currentIndex)
   currentIndex--

[array[currentIndex], array[ramdomIndex]]=[
    array[ramdomIndex], array[currentIndex]]

    }

    return array
}


function handleCheck (){
   
    console.log(getAnswer)


}


useEffect(()=>{
    const arr = [...newTexthide]
    shuffle(arr)
    setList([...arr])
},[])

let categories = "input"


const regExp = objectText[0].answer
const reactaStringReplace = reactStringReplace(objectText[0].question1,regExp,(macth, i)=>(<span className=" rounded-md">
  { categories === "selection" &&  <select
    defaultValue={addtype}
    onChange={hadleAddAnswer} value="name" className="border-b-[1px] ">
        <option selected ></option>
       {newTexthide.map((value,index)=><option value={value}>{value}</option>)}
    </select>}

    {
        categories === "input" && <div className="inline-flex flex-wrap">
<form >
    <span>
    <input onChange={handleOnchange} name="fill" vlaue={answer} className="border-b-[1px] flex"/>
    </span>  
        </form>
        </div> 
    }
</span>))
    return <div className="border-b-[1px] px-2 py-4 ">
        <div className="">
            <ul className="inline-flex space-x-2 font-medium m-3 cursor-pointer">
             {list.map((value)=><li>{value}</li>)}
            </ul>
        </div>
    {reactaStringReplace}
    {
        objectText.map((value,index)=><ol>
            <li>
                {index+1 +"."}
                {value.question1}</li>
        </ol>)
    }
    <button onClick={handleCheck}>Answer</button>
    </div>
}