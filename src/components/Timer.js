import { useState,useEffect } from 'react'


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
            : <div className="py-2 px-2 md:px-6 m-1 flex items-center text-white border-b-4 border-l-2 bg-gradient-to-tr
            from-yellow-300 to-yellow-400 border-yellow-500 rounded">
                  <h1 className='font-medium md:font-none text-[16px]'> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
             </div> 
        }
        </div>
    )
}

export default Timer;