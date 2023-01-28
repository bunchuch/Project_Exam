import React from "react"


import { styleAudio } from "../style/style"


export default function Audio({audio,title}){
    return <>{
      audio?(<>
      <div className={styleAudio.main}>
        <h1 className={styleAudio.title_audio}>{title}</h1>
    <audio className={styleAudio.audio} controlsList="nodownload" controls>
      <source  src={audio} type="audio/mpeg" />
    </audio>
  </div>
      </>):(<></>)
    }

    
    </>
}