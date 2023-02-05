import { useState,useEffect } from 'react'
import Icon from './Icon';
import {FcAlarmClock} from "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from '../exam/hook/userLocalStorage';


 const Timer = (props) => {
    
    const dispatch = useDispatch()
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const loacalStorge = useLocalStorage("Time", {minutes: 0 , seconds:0})




    useEffect(()=>{
    
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds( seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div className=''>
        { minutes === 0 && seconds === 0
            ? <div 
            className='py-1.5 px-2 md:px-2 text-[12px] font-sans md:text-[14px] space-x-2 
            flex items-center rounded-full bg-yellow-200'>
                <p className='text-yellow-700  '>
                    😌 Opps... Time is Out</p></div>
            : <div className={`py-1.5 px-2 md:px-1.5 space-x-2 flex items-center
             ${ minutes <= 5 ? 'bg-red-500 text-white':"bg-purple-800 text-white" }
             border-yellow-500 rounded-full  `}>
                    <div className='h-5 w-5 md:h-6 md:w-6'>
                    <Icon name={<FcAlarmClock/>}></Icon>
                    </div>
                    <p className='md:block hidden font-mono'>Time Left</p>
                  <h1 className='font-medium md:font-none font-mono '>
                     {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
             </div> 
        }
        </div>
    )
}

export default Timer