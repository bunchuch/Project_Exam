
import React, { useEffect, useState } from "react"
import {BiRadio} from "react-icons/bi"
import Icon from "./Icon";
import { styleAudio } from "../style/style"




export default function Audio({audio,title, type}){
 

    return <>{
      audio?(<>
      <div  className={styleAudio.main}>
        <div className="flex justify-center items-center">
        <h1 className={styleAudio.title_audio}>{title}</h1>
        </div>
       
    <audio className={styleAudio.audio} controlsList="nodownload" controls>
      <source  src={audio} type="audio/mpeg" />
    </audio>
  </div>
      </>):(<></>)
    }

    
    </>
}