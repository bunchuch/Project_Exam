import { useState } from 'react'
import Countdown from 'react-countdown'
import { redirect } from 'react-router-dom'

export default function Timer (){
  
const [change,setChange] = useState('bg-green-600 px-2 rounded-md py-2 font-bold text-lg text-white')

    const Completeionlist = () => <span class="">Time is out !</span>

const rendere = ({hour,minutes,seconds,completed})=>{
    if(completed === 10000 ){
      return   setChange('bg-red-500 px-2 rounded-md py-2 font-bold text-lg text-white')
    

    }else {
        return <span className = {change}>
         {minutes}:{seconds}
        </span>
    }



}





    return <>
    <Countdown date={Date.now() + 20000}
    renderer={rendere}
    >
<Completeionlist/>
    </Countdown>
    </>
}