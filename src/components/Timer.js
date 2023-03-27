import { useState,useEffect } from 'react'
import Icon from './Icon';
import {FcClock} from "react-icons/fc"

const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
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
            ? <></>
            : <div className="py-2 px-2 md:px-2 m-1 space-x-2 flex z-10 items-center bg-purple-200
             text-purple-800 border-yellow-500 rounded">
                    <p className='font-semibold'>Time Left</p>
                    <div className='h-5 w-5'>
                    <Icon name={<FcClock></FcClock>}></Icon>
                    </div>
                  <h1 className='font-medium md:font-none text-[16px]'> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
             </div> 
        }
        </div>
    )
}

export default Timer;