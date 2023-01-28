import { useState } from 'react'
import Countdown from 'react-countdown'
import { redirect } from 'react-router-dom'

export default function Timer ({time}){
  
const [change,setChange] = useState(' px-2 rounded-md font-bold text-lg bg-gray-50')

    const Completeionlist = () => <span class="">Time is out !</span>

const rendere = ({hour,minutes,seconds,completed})=>{
    if(completed > 400000000 ){
      return   setChange('px-2 rounded-md font-bold text-lg text-red-800')
    

    }else {
        return <div className = {change}>
         {minutes}:{seconds}
        </div>
    }



}
    return <>
    <Countdown date={Date.now() + time*60000}
    renderer={rendere}
    >
<Completeionlist/>
    </Countdown>
    </>
}