import { buttonstyle } from "../style/style"


export const showScore = (event)=>{
    return (

         <div className="relative">
            <div className="inset-0 absoulte">
                <div>
                    <button onClick={event} className={buttonstyle.grenBtn}>
                        Go To Main
                    </button>
                </div>
            </div>
         </div>
    )
}