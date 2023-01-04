import React from "react"


import { styleAudio } from "../style/style"


export default function Audio({audio}){
    return <>{
      audio?(<>
      <div className={styleAudio.main}>
    <audio className={styleAudio.audio} controlsList="nodownload" controls>
      <source  src={audio} type="audio/mpeg" />
    </audio>
  </div>
      </>):(<></>)
    }

    
    </>
}