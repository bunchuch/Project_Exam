import { useState,useEffect } from 'react'
import Icon from './Icon';
import {FcAlarmClock} from "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux';
// import { TimerAction } from '../redux/TimerSlice';



 const Timer = ({initialMinute,initialSeconds}) => {
    

    // const dispatch = useDispatch()
   
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds );
    




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

//  const disable = dispatch(TimerAction.disable({minute:minutes}))

//  console.log(disable)

    return (
        <div className='2xl:text-[18px]  md:text-[14px] text-[12px]'>
        { minutes === 0 && seconds === 0
            ? <div 
            className='py-1.5 px-2 md:px-2  font-sans space-x-2 
            flex items-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300'>
                <p className='text-yellow-700  '>
                    😌Time is Out</p></div>
            : <div className={`py-1.5 px-2 md:px-1.5 2xl:py-2 border-[1px] text-white  space-x-2 flex items-center bg-gradient-to-br
             ${ minutes <= 5 ? 'from-rose-600 to-rose-500 ':"from-variation-500 to-variation-400" }
             border-gray-100 rounded-full  `}>
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