import { useState,useEffect } from 'react'
import Icon from './Icon';
import {FcClock} from "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux';
import { TimerAction } from '../redux/TimerSlice';
import { useLocalStorage } from '../exam/hook/userLocalStorage';
import { CgInsertBefore } from 'react-icons/cg';

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
            className='py-2 px-2 md:px-2 m-1 text-[12px]  md:text-[14px] space-x-2 
            flex z-10 items-center rounded bg-yellow-200'>
                <p className='text-yellow-700  '>
                    😌 Opps... Time is Out</p></div>
            : <div className={`py-2 px-2 md:px-2 m-1 space-x-2 flex items-center
             ${ minutes <= 5 ? 'bg-red-200 text-red-600':"bg-purple-200 text-purple-800" }
             border-yellow-500 rounded  `}>
                    <p className='md:block hidden'>Time Left</p>
                    <div className='h-5 w-5'>
                    <Icon name={<FcClock></FcClock>}></Icon>
                    </div>
                  <h1 className='font-medium md:font-none '>
                     {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
             </div> 
        }
        </div>
    )
}

export default Timer